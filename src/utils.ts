export const formatCount = (
  amount: number,
  zero: string,
  one: string,
  few: string,
  many: string
) => {
  if (amount !== 0) {
    const hundredthRemainder = amount - Math.floor(amount / 100) * 100;

    if (hundredthRemainder >= 10 && hundredthRemainder < 20) {
      return many;
    } else {
      const decimalRemainder = amount - Math.floor(amount / 10) * 10;

      if (decimalRemainder === 1) {
        return one;
      } else if (decimalRemainder > 1 && decimalRemainder < 5) {
        return few;
      } else {
        return many;
      }
    }
  } else {
    return zero;
  }
};

enum Months {
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
}

export const getFormattedDate = (date: Date) => {
  return `${date.getDate()} ${Months[date.getMonth()]} ${date.getFullYear()}`;
};

export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(
    /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g,
    `$1 ($2) $3 $4 $5`
  );
};

export const addMinutesToDate = (date: Date, minutes: number) => {
  return date.getTime() + minutes * 1000 * 60;
};

export const sortByAlphabet = (a: string, b: string) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export const getNextBirthday = (birthdate: Date) => {
  let currentDate = new Date();
  let birthday = new Date(birthdate);
  birthday.setFullYear(currentDate.getFullYear());

  if (birthday.getTime() - currentDate.getTime() < 0) {
    birthday.setFullYear(currentDate.getFullYear() + 1);
  }

  return birthday;
};

export const sortByBirthday = (a: Date, b: Date) => {
  return getNextBirthday(a).getTime() - getNextBirthday(b).getTime();
};
