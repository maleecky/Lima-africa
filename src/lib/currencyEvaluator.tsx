type props = {
  price: number;
  rate: number;
};

export const getRate = ({ price, rate }: props) => {
  let displayedAmount;

  if (price) {
    displayedAmount = Math.floor(price * rate);
  }

  return displayedAmount;
};
