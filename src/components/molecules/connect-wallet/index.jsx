import { useState } from "react";
import ConnectWalletStage1 from "../connect-wallet-stage-1";
import ConnectWalletTab from "../connect-wallet-tab";
("./connect-wallet.scss");

const ConnectWallet = ({ stage, setStage, activeTab, setActiveTab }) => {
  return (
    <div className="w-full">
      <ConnectWalletTab activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 ? (
        <ConnectWalletStage1 stage={stage} setStage={setStage} />
      ) : activeTab === 1 ? (
        // <ConnectWalletStage1 />
        <div>tab 2</div>
      ) : activeTab === 2 ? (
        // <ConnectWalletStage1 />
        <div>tab 3</div>
      ) : activeTab === 3 ? (
        // <ConnectWalletStage1 />
        <div>tab 4</div>
      ) : (
        <ConnectWalletStage1 />
      )}
    </div>
  );
};

export default ConnectWallet;
