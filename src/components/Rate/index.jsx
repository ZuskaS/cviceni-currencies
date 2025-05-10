import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
};

export const Rate = ({ from }) => {
  const kurz = currencies[from].CZK;
  return (
    <div className="rate">
      <div className="rate__currency">{from}</div>
      <div>=</div>
      <div className="rate__value">{kurz}</div>
    </div>
  );
};
