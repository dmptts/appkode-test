import React, { Dispatch, PropsWithChildren, ReactElement } from 'react';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface ITabsProps {
  children:
    | ReactElement<PropsWithChildren<ITabProps>>
    | ReactElement<PropsWithChildren<ITabProps>>[];
  clickHandler?: () => void;
}

export default function Tabs({ children }: ITabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const TabsWithInjectedProps = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActive: index === activeTab,
      setActiveTab() {
        setActiveTab(index);
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

interface ITabProps {
  children: ReactNode;
  isActive?: boolean;
  setActiveTab?: () => void;
  clickHandler?: () => void;
}

function Tab({
  children,
  isActive = false,
  setActiveTab,
  clickHandler,
}: ITabProps) {
  const handleClick = () => {
    setActiveTab?.();
    clickHandler?.();
  };

  return (
    <TabItem>
      <TabButton type="button" isActive={isActive} onClick={handleClick}>
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
  padding-left: 8px;
  padding-right: 8px;

  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ isActive }) =>
    isActive ? 'var(--color-text-default)' : 'var(--color-text-light-primary)'};

  background-color: transparent;
  border: none;
  ${({ isActive }) =>
    isActive && 'box-shadow: 0 -2px 0 0 var(--color-brand-violet) inset;'}
  cursor: ${({ isActive }) => !isActive && 'pointer'};

  &:hover {
    box-shadow: 0 -2px 0 0 var(--color-brand-violet) inset;
  }
`;
