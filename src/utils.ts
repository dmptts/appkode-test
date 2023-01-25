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
