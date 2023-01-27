import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IContact } from '../const';
import userpicPlaceholder from '../images/userpic-placeholder.png';
import userpicPlaceholder2x from '../images/userpic-placeholder@2x.png';

interface IContactItemProps {
  contact: IContact;
}

export default function ContactItem({ contact }: IContactItemProps) {
  const { avatarUrl, firstName, lastName, userTag, position } = contact;

  return (
    <StyledContactItem>
      <UserPic
        src={avatarUrl ? avatarUrl : userpicPlaceholder}
        srcSet={avatarUrl ? avatarUrl : userpicPlaceholder2x}
        width="72"
        height="72"
        alt={`Аватар пользователя ${firstName} ${lastName}`}
      />
      <Link to={`/contact/${contact.id}`}>
        <NameWrapper>
          <Name>
            {firstName} {lastName}
          </Name>
          <UserTag>{userTag}</UserTag>
        </NameWrapper>
        <Position>{position}</Position>
      </Link>
    </StyledContactItem>
  );
}

const StyledContactItem = styled.li`
  display: flex;
  column-gap: 8px;
  align-items: center;

  padding-top: 8px;
  padding-bottom: 8px;
`;

const UserPic = styled.img`
  width: 72px;
  height: 72px;

  background-color: var(--color-bg-secondary);
  border-radius: 50%;
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

const UserTag = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-light-primary);
`;

const Position = styled.p`
  margin: 0;

  font-size: 0.8125rem;
  color: var(--color-text-light-thirdly);
`;
