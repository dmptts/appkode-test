import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IContact } from '../const';
import { ReactComponent as ChevronIcon } from './../images/icon-chevron.svg';
import userpicPlaceholder from '../images/userpic-placeholder.png';
import userpicPlaceholder2x from '../images/userpic-placeholder@2x.png';
import Container from './Container';

interface IContactPageHeaderProps {
  contact: IContact;
}

export default function ContactPageHeader({
  contact,
}: IContactPageHeaderProps) {
  const { avatarUrl, firstName, lastName, userTag, position } = contact;

  return (
    <StyledHeader>
      <StyledContainer>
        <BackLink to={'/'}>
          <StyledChevronIcon />
          Назад
        </BackLink>
        <UserPic
          src={avatarUrl ? avatarUrl : userpicPlaceholder}
          srcSet={avatarUrl ? avatarUrl : userpicPlaceholder2x}
          width="104"
          height="104"
          alt={`Аватар пользователя ${firstName} ${lastName}`}
        />
        <NameWrapper>
          <Name>
            {firstName} {lastName}
          </Name>
          <UserTag>{userTag}</UserTag>
        </NameWrapper>
        <Position>{position}</Position>
      </StyledContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-bg);
`;

const StyledContainer = styled(Container)`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 72px;
  padding-bottom: 24px;
`;

const StyledChevronIcon = styled(ChevronIcon)`
  width: 24px;
  height: 24px;

  fill: var(--color-text-default);
`;

const BackLink = styled(Link)`
  position: absolute;
  top: 22px;
  left: 24px;

  display: block;
  width: 24px;
  height: 24px;

  font-size: 0;

  &:hover ${StyledChevronIcon} {
    fill: var(--color-brand-violet);
  }
`;

const UserPic = styled.img`
  width: 104px;
  height: 104px;
  margin-bottom: 24px;

  background-color: var(--color-default-white);
  border-radius: 50%;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: baseline;
  column-gap: 4px;
  margin-bottom: 12px;
`;

const Name = styled.h1`
  margin: 0;

  font-size: 1.5rem;
  font-weight: 700;
`;

const UserTag = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-light-primary);
`;

const Position = styled.p`
  margin: 0;

  font-size: 0.8125rem;
  color: var(--color-text-light-thirdly);
`;
