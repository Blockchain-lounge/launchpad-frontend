import clsx from "clsx";

import Toggle from "react-toggle";
import "react-toggle/style.css";

import "./mini-user-profile.scss";

import ProfileIcon from "../../atoms/vectors/profile-icon";
import SettingsIcon from "../../atoms/vectors/settings-icon";
import CreateNFTIcon from "../../atoms/vectors/create-nft-icon";
import CreateCollectionIcon from "../../atoms/vectors/create-collection-icon";
import NightModeIcon from "../../atoms/vectors/night-mode-icon";
import SignOutIcon from "../../atoms/vectors/sign-out-icon";

const MiniUserProfile = ({ showProfile, onClick, handleSignOut }) => {
  const userMiniProfileLinks = [
    {
      link: "Profile",
      icon: <ProfileIcon />,
      to: "",
    },
    {
      link: "Settings",
      icon: <SettingsIcon />,
      to: "",
    },
    {
      link: "Create NFT",
      icon: <CreateNFTIcon />,
      to: "",
    },
    {
      link: "Create Collection",
      icon: <CreateCollectionIcon />,
      to: "",
    },
    {
      link: "Night Mode",
      icon: <NightModeIcon />,
      to: "",
    },
  ];
  return (
    <div
      className={clsx(
        "mini-user-profile-wrapper",
        showProfile
          ? "transition-[right] duration-300 right-12"
          : "transition-[right] ease-in-out duration-300 right-[-50rem]"
      )}
    >
      {userMiniProfileLinks.map(({ icon, link }) => (
        <div key={link} className="mini-user-profile-links">
          {icon}{" "}
          <span
            className="mini-user-profile-link flex-1 hover:text-[#3694FA]"
            onClick={onClick}
          >
            {link}
          </span>
          {link === "Night Mode" && (
            <Toggle
              defaultChecked={false}
              icons={false}
              className="mini-user-toggle-btn"
              // onChange={this.handleTofuChange}
            />
          )}
        </div>
      ))}
      <div className="mini-user-profile-links">
        <SignOutIcon />
        <span
          className="mini-user-profile-link text-[#FB4E4E]"
          onClick={handleSignOut}
        >
          Sign out
        </span>
      </div>
    </div>
  );
};

export default MiniUserProfile;
