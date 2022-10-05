import { useState } from "react";

import WalletConnect from "../../atoms/vectors/wallect-connect";
import EtherWallet from "../../atoms/vectors/ethereum-icon";
import Coinbase from "../../atoms/vectors/coin-base-icon";
import Metamask from "../../atoms/vectors/metamask-icon";
import Portis from "../../atoms/vectors/portis-icon";
import Torus from "../../atoms/vectors/torus-icon";

import "./connect-wallet-stage-1.scss";

const ConnectWalletStage1 = ({ setStage, stage }) => {
  const [showMore, setShowMore] = useState(false);
  const handleStageChange = () => {
    setStage(stage + 1);
  };

  const wallets = [
    { name: "Metamask", icon: <Metamask />, action: handleStageChange },
    {
      name: "Wallet connect",
      icon: <WalletConnect />,
      action: handleStageChange,
    },
    { name: "Coinbase", icon: <Coinbase />, action: handleStageChange },
    { name: "MyEtherWallet", icon: <EtherWallet />, action: handleStageChange },
    { name: "Portis", icon: <Portis />, action: handleStageChange },
    { name: "Coinbase", icon: <Coinbase />, action: handleStageChange },
    { name: "Torus", icon: <Torus />, action: handleStageChange },
  ];

  const handleShowMore = () => setShowMore(!showMore);
  return (
    <div className="connect-wallet-stage-1">
      <>
        <span className="text-white">Popular</span>
        <div className="connect-wallet-stage-1-more">
          {wallets.slice(0, 3).map(({ name, icon, action }, idx) => (
            <div
              key={name + idx}
              className="connect-wallet-stage-1-data"
              onClick={action}
            >
              <span>{icon}</span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </>

      {showMore && (
        <>
          <span className="text-white">More</span>
          <div className="connect-wallet-stage-1-more">
            {wallets.slice(3).map(({ name, icon }, idx) => (
              <div key={name + idx} className="connect-wallet-stage-1-data">
                <span>{icon}</span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </>
      )}
      <span
        className="connect-wallet-stage-1-data justify-center"
        onClick={handleShowMore}
      >
        {showMore ? "Show less" : "Show more"}
      </span>
    </div>
  );
};
export default ConnectWalletStage1;
