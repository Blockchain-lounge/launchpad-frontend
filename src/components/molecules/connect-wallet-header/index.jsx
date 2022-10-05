import clsx from "clsx";
import "./connect-wallet.scss";

const ConnectWalletHeader = ({ isActive, onClick, text, ICON }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "connect-header-wrapper",
        isActive &&
          "after:bg-gradient-to-r after:from-[#2F79F9] after:to-[#3DAEFA]"
      )}
    >
      <span>{<ICON color={isActive ? "#3CABFA" : undefined} />}</span>
      <span className={clsx(isActive ? "text-[#3CABFA]" : "text-[#b9b9c0]")}>
        {text}
      </span>
    </div>
  );
};

export default ConnectWalletHeader;
