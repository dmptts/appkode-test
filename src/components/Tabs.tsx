import React, { PropsWithChildren, ReactElement } from 'react';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface ITabsProps<T> {
  children:
    | ReactElement<PropsWithChildren<ITabProps<T>>>
    | ReactElement<PropsWithChildren<ITabProps<T>>>[];
  value: T;
  clickHandler?: (value: T) => void;
}

export default function Tabs<T>({
  children,
  value,
  clickHandler,
}: ITabsProps<T>) {
  const [activeTab, setActiveTab] = useState(value);

  const TabsWithInjectedProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      isActive: child.props.value === activeTab,
      clickHandler() {
        setActiveTab(child.props.value);
        clickHandler?.(child.props.value);
      },
    })
  );

  return <TabsList>{TabsWithInjectedProps}</TabsList>;
}

const TabsList = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;

  list-style: none;
`;

interface ITabProps<T> {
  children: ReactNode;
  value: T;
  isActive?: boolean;
  clickHandler?: () => void;
}

function Tab<T extends string | number>({
  children,
  value,
  isActive = false,
  clickHandler,
}: ITabProps<T>) {
  return (
    <TabItem>
      <TabButton
        type="button"
        isActive={isActive}
        onClick={clickHandler}
        value={value}
      >
        {children}
      </TabButton>
    </TabItem>
  );
}

Tabs.TabItem = Tab;

const TabItem = styled.li`
  line-height: 0;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;

  font-size: 1rem;
  font-weight: 600;
  color: ${({ isActive }) =>
    isActive ? 'var(--color-text-default)' : 'var(--color-text-light-primary)'};
  letter-spacing: -0.6px;

  background-color: transparent;
  border: none;
  ${({ isActive }) =>
    isActive && 'box-shadow: 0 -2px 0 0 var(--color-brand-violet) inset;'}
  cursor: ${({ isActive }) => !isActive && 'pointer'};

  &:hover {
    box-shadow: 0 -2px 0 0 var(--color-brand-violet) inset;
  }
`;
