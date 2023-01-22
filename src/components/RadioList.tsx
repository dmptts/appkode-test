import React, {
  InputHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';
import styled from 'styled-components';
import { visuallyHidden } from '../global-styles';

interface IRadioListProps {
  children:
    | ReactElement<PropsWithChildren<IRadioItemProps>>
    | ReactElement<PropsWithChildren<IRadioItemProps>>[];
  name: string;
  value: string;
}

export default function RadioList({ children, name, value }: IRadioListProps) {
  const [activeItem, setActiveItem] = useState<string>(value);

  const RadioItemsWithinjectedProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      name,
      isActive: activeItem === child.props.value,
      clickHandler() {
        setActiveItem(child.props.value);
        child.props.clickHandler?.();
      },
    });
  });

  return <div>{RadioItemsWithinjectedProps}</div>;
}

interface IRadioItemProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
  value: string;
  isActive?: boolean;
  clickHandler?: () => void;
}

function RadioItem(props: IRadioItemProps) {
  const { children, id, isActive = false, clickHandler, ...restProps } = props;

  return (
    <RadioItemContainer>
      <RadioItemLabel htmlFor={id} isActive={isActive} onClick={clickHandler}>
        {children}
      </RadioItemLabel>
      <RadioItemInput type="radio" id={id} {...restProps} />
    </RadioItemContainer>
  );
}

RadioList.Item = RadioItem;

const RadioItemContainer = styled.div`
  position: relative;
`;

const RadioItemLabel = styled.label<{ isActive: boolean }>`
  display: block;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 36px;

  font-weight: 500;

  cursor: pointer;

  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    content: '';

    width: 20px;
    height: 20px;

    border: 2px solid #6534ff;
    border-radius: 50%;

    transform: translateY(-50%);
  }

  ${({ isActive }) =>
    isActive &&
    `
    &::before {
      background-color: #6534ff;
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 10px;
      content: '';

      width: 8px;
      height: 8px;

      background-color: #ffffff;
      border-radius: 50%;

      transform: translate(-50%, -50%);
    }`}
`;

const RadioItemInput = styled.input`
  ${visuallyHidden}
`;
