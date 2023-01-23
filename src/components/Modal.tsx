import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { useModal } from '../hooks';
import { ReactComponent as XIcon } from './../images/icon-x.svg';

interface IModalProps {
  children: [
    ReactElement<PropsWithChildren<IModalBodyProps>>,
    ReactElement<PropsWithChildren<IModalHeaderProps>>
  ];
  name: string;
}

export default function Modal({ children, name }: IModalProps) {
  const { activeModal, closeModal } = useModal();
  const isOpened = activeModal === name;

  return (
    <>
      <StyledModal isOpened={isOpened}>
        <CloseBtn onClick={closeModal}>
          <StyledXIcon />
          Закрыть
        </CloseBtn>
        {children}
      </StyledModal>
      <Overlay isOpen={isOpened} onClick={closeModal} />
    </>
  );
}

const StyledModal = styled.div<{ isOpened: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;

  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
  width: 375px;
  padding-top: 24px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: var(--color-default-white);
  border-radius: 20px;

  transform: translate(-50%, -50%);
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  background-color: rgba(5, 5, 16, 0.5);
`;

const StyledXIcon = styled(XIcon)`
  width: 16px;
  height: 16px;

  fill: var(--color-text-light-secondary);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 23px;
  z-index: 15;

  display: flex;
  align-items: center;
  align-content: center;
  width: 24px;
  height: 24px;

  font-size: 0;

  background-color: var(--color-bg);
  border: none;
  border-radius: 50%;

  cursor: pointer;

  &:hover ${StyledXIcon}, &:active ${StyledXIcon} {
    fill: var(--color-text-default);
  }
`;

interface IModalHeaderProps {
  children: string;
}

function ModalHeader({ children }: IModalHeaderProps) {
  return <ModalTitle>{children}</ModalTitle>;
}

Modal.Header = ModalHeader;

const ModalTitle = styled.h2`
  margin: 0;
  margin-bottom: 23px;
  padding-left: 48px;
  padding-right: 48px;

  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`;

interface IModalBodyProps {
  children: ReactNode;
}

function ModalBody({ children }: IModalBodyProps) {
  return <div>{children}</div>;
}

Modal.Body = ModalBody;
