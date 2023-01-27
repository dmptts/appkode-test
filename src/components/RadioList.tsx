import React, {
  InputHTMLAttributes,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';
import styled from 'styled-components';
import { visuallyHidden } from '../global-styles';

interface IRadioListProps<T> {
  children:
    | ReactElement<PropsWithChildren<IRadioItemProps>>
    | ReactElement<PropsWithChildren<IRadioItemProps>>[];
  name: string;
  value: T;
  changeHandler: (value: T) => void;
}

export default function RadioList<T>({
  children,
  name,
  value,
  changeHandler,
}: IRadioListProps<T>) {
  const [activeItem, setActiveItem] = useState(value);

  const RadioItemsWithinjectedProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      name,
      isActive: activeItem === child.props.value,
      changeHandler() {
        setActiveItem(child.props.value as T);
        changeHandler?.(child.props.value as T);
      },
    });
  });

  return <div>{RadioItemsWithinjectedProps}</div>;
}

interface IRadioItemProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
  isActive?: boolean;
  changeHandler?: () => void;
}

function RadioItem(props: IRadioItemProps) {
  const { children, id, isActive = false, changeHandler, ...restProps } = props;

  return (
    <RadioItemContainer>
      <RadioItemLabel htmlFor={id} isActive={isActive} onClick={changeHandler}>
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

    border: 2px solid var(--color-brand-violet);
    border-radius: 50%;

    transform: translateY(-50%);
  }

  ${({ isActive }) =>
    isActive &&
    `
    &::before {
      background-color: var(--color-brand-violet);
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 10px;
      content: '';

      width: 8px;
      height: 8px;

      background-color: var(--color-default-white);
      border-radius: 50%;

      transform: translate(-50%, -50%);
    }`}
`;

const RadioItemInput = styled.input`
  ${visuallyHidden}
`;
