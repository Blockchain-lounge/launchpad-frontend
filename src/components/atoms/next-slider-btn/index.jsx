import ShortNextArrowIcon from "../vectors/short-next-arrow";
import "./next-slider-style.scss";

const NextSliderBtn = (onClickProps) => {
  const { onClick } = onClickProps;

  return (
    <div className="next-slider" onClick={onClick}>
      <ShortNextArrowIcon color="#2F79F9" />
    </div>
  );
};

export default NextSliderBtn;
