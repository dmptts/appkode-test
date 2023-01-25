import styled from 'styled-components';
import { IContact } from '../const';
import Container from './Container';
import { ReactComponent as StarIcon } from './../images/icon-star.svg';
import { ReactComponent as PhoneIcon } from './../images/icon-phone.svg';
import { formatCount, formatPhoneNumber, getFormattedDate } from '../utils';

interface IContactPageBodyProps {
  contact: IContact;
}

const getFormattedAge = (bithday: Date) => {
  const now = Date.now();
  const age = Math.floor((+now - +bithday) / 1000 / 60 / 60 / 24 / 365);

  return `${age} ${formatCount(age, 'лет', 'год', 'года', 'лет')}`;
};

export default function ContactPageBody({ contact }: IContactPageBodyProps) {
  const { birthday, phone } = contact;
  const birthdayDate = new Date(birthday);

  return (
    <main>
      <Container>
        <ContactInfoList>
          <ContactInfoItem>
            <>
              <ItemLeft>
                <StyledStarIcon />
                {getFormattedDate(birthdayDate)}
              </ItemLeft>
              <ItemRight>{getFormattedAge(birthdayDate)}</ItemRight>
            </>
          </ContactInfoItem>
          <ContactInfoItem>
            <ItemLeft>
              <PhoneLink href={`tel:${phone}`}>
                <StyledPhoneIcon />
                {formatPhoneNumber(phone)}
              </PhoneLink>
            </ItemLeft>
          </ContactInfoItem>
        </ContactInfoList>
      </Container>
    </main>
  );
}

const StyledStarIcon = styled(StarIcon)`
  width: 24px;
  height: 24px;

  fill: var(--color-text-default);
`;

const StyledPhoneIcon = styled(PhoneIcon)`
  width: 24px;
  height: 24px;

  fill: var(--color-text-default);
`;

const ContactInfoList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const ContactInfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  row-gap: 8px;
  padding-top: 18px;
  padding-bottom: 18px;
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  font-weight: 500;
`;

const ItemRight = styled.div`
  color: var(--color-text-light-primary);
`;

const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
