import CoinIcon from "../../atoms/vectors/coin-icon";
import "./hero-card-style.scss";

const HeroCard = ({ img, title, price, onClick }) => {
  return (
    <div className="hero-card-wrapper" onClick={onClick}>
      <div className="h-[11.875rem] rounded-[1.25rem] flex">
        <img src={img} alt={title} className="flex-1" />
      </div>
      <span className="title">{title}</span>
      <div className="flex items-center">
        <CoinIcon />
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default HeroCard;
