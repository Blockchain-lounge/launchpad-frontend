import { useState } from "react";
import Button from "../../atoms/button";
import InputField from "../../atoms/input";
import CaretDown from "../../atoms/vectors/caret-down";
import WalletIcon from "../../atoms/vectors/wallet-icon";
import ConnectWallet from "../../molecules/connect-wallet";
import DisplayWallet from "../../molecules/display-wallet";
import MiniUserProfile from "../../molecules/mini-user-profile";
import MiniUserWallet from "../../molecules/mini-user-wallet";
import NavTab from "../../molecules/nav-tab";
import Modal from "../modal";
import "./nav-bar.scss";

const NavBar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showBal, setShowBal] = useState(false);

  const [activeTab, setActiveTab] = useState(0);
  const [stage, setStage] = useState(0);

  const statusArr = [
    {
      title: "Volume 24h",
      value: "105.717 Eth",
    },
    {
      title: "Volume total",
      value: "26.306.477 Eth",
    },
    {
      title: "Eth/USD",
      value: "$357.60",
    },
    {
      title: "Ethereum Network",
      value: "3,009 TPS",
    },
  ];

  const handleWalletConnect = () => {
    setOpenModal(!openModal);
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setShowProfile(false);
    setShowBal(false);
  };

  const handleShowBal = () => {
    setShowBal(!showBal);
  };
  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <nav>
      <div className="nav-status center">
        <div></div>
        <div className="flex gap-x-[1rem]">
          {statusArr.map(({ title, value }) => (
            <div key={title}>
              <span className="nav-status-title">{title}:</span>
              <span className="nav-status-value">{value}</span>
            </div>
          ))}
        </div>

        <span className="nav-select">
          English <CaretDown />
        </span>
      </div>
      <div className="main-nav center">
        <img src="/images/Cloudax_Light_logo.png" alt="nav-logo" />
        <div className="nav-tab">
          <InputField />
          <NavTab />
        </div>
        {isLoggedIn ? (
          <div className="flex items-center gap-x-4 relative">
            <img
              src="/images/Dreamy-ape.png"
              alt="user-img"
              className="h-12 w-12 rounded-full"
              onClick={handleShowProfile}
            />
            <div className="p-[12px]">
              <WalletIcon onClick={handleShowBal} />
            </div>
            <MiniUserWallet showBal={showBal} handleSignOut={handleLogin} />
            <MiniUserProfile
              showProfile={showProfile}
              handleSignOut={handleLogin}
            />
          </div>
        ) : (
          <Button
            title="Connect Wallet"
            prefix={<WalletIcon />}
            outline
            onClick={handleWalletConnect}
          />
        )}
      </div>
      <Modal
        openModal={openModal}
        title="Connect a wallet to continue"
        closeModal={setOpenModal}
        active={stage > 0}
      >
        <div className="flex">
          {stage === 0 ? (
            <ConnectWallet
              stage={stage}
              setStage={setStage}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ) : (
            <DisplayWallet closeModal={setOpenModal} setStage={setStage} />
          )}
        </div>
      </Modal>
    </nav>
  );
};

export default NavBar;
