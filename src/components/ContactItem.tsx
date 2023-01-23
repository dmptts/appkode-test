import styled from 'styled-components';
import userpicPlaceholder from '../images/userpic-placeholder.png';
import userpicPlaceholder2x from '../images/userpic-placeholder@2x.png';

export default function ContactItem() {
  return (
    <StyledContactItem>
      <UserPic
        src={userpicPlaceholder}
        srcSet={userpicPlaceholder2x}
        width="72"
        height="72"
        alt="Аватар пользователя"
      />
      <div>
        <NameWrapper>
          <Name>Алексей Миногаров</Name>
          <Nickname>mi</Nickname>
        </NameWrapper>
        <Speciality>Analyst</Speciality>
      </div>
    </StyledContactItem>
  );
}

const StyledContactItem = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;

  padding-top: 8px;
  padding-bottom: 8px;
`;

const UserPic = styled.img`
  width: 72px;
  height: 72px;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 4px;
  row-gap: 4px;
`;

const Name = styled.h2`
  margin: 0;

  font-size: 1rem;
  font-weight: 500;
`;

const Nickname = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-light-primary);
`;

const Speciality = styled.p`
  margin: 0;

  font-size: 0.8125rem;
  color: var(--color-text-light-thirdly);
`;
