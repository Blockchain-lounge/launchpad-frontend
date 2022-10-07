import { useCallback, useState } from "react";
import CollectionIcon from "../../atoms/vectors/collections-icon";
import ExploreIcon from "../../atoms/vectors/explore-icon";
import TrendingIcon from "../../atoms/vectors/trending-icon";
import GamesIcon from "../../atoms/vectors/games-icon";
import ActivitiesIcon from "../../atoms/vectors/activities-icon";
import SupportIcon from "../../atoms/vectors/support-icon";
import AsideDropDown from "../../atoms/aside-dropdown";
import IOSIcon from "../../atoms/vectors/ios-icon";
import DiscordIcon from "../../atoms/vectors/discord-icon";
import TikTokIcon from "../../atoms/vectors/tiktok-icon";
import YoutubeIcon from "../../atoms/vectors/youtube-icon";
import TwitterIcon from "../../atoms/vectors/twitter-icon";
import InstagramIcon from "../../atoms/vectors/instagram-icon";
import "./aside-style.scss";
import Button from "../../atoms/button";
import WalletIcon from "../../atoms/vectors/wallet-icon";
import { useDispatch } from "react-redux";
import { toggleMobileModal } from "../../../reducers/modalReudcer";

const DashboardAside = () => {
  const dispatch = useDispatch();
  const [isActiveIndex, setActiveIndex] = useState(null);
  const handleMobileModalToggle = () => {
    dispatch(toggleMobileModal());
  };

  const asideLinks = [
    {
      label: "Collections",
      icon: <CollectionIcon />,
      subLinks: [
        { label: "Popular collections", link: "/collections" },
        { label: "Drop calendar", link: "/settings" },
        { label: "Auctions", link: "/settings" },
      ],
    },
    {
      label: "Explore",
      icon: <ExploreIcon />,
      link: "/profile",
    },
    {
      label: "Trending",
      icon: <TrendingIcon />,
      link: "/create-new-nft",
    },
    {
      label: "Activities",
      icon: <ActivitiesIcon />,
      link: "/create-new-nft",
    },
    {
      label: "Cloudax Games",
      icon: <GamesIcon />,
      link: "/create-new-nft",
      tag: "coming",
    },

    {
      label: "Support",
      icon: <SupportIcon />,
      link: "/create-new-nft",
    },
  ];

  const socialLinks = [
    { icon: <IOSIcon />, label: "iOS App" },
    { icon: <DiscordIcon />, label: "Discord" },
    { icon: <TikTokIcon />, label: "TikTok" },
    { icon: <YoutubeIcon />, label: "Youtube" },
    { icon: <TwitterIcon />, label: "Twitter" },
    { icon: <InstagramIcon />, label: "Instagram" },
  ];

  return (
    <div className="aside-container">
      <div className="aside-btn">
        <img
          src="/vectors/close-icon.svg"
          alt="close-mobile-tab-img"
          onClick={handleMobileModalToggle}
        />
        <span className="block m-1">
          <Button title="Connect Wallet" prefix={<WalletIcon />} outline />
        </span>
      </div>
      <div>
        {asideLinks.map((value, i) => (
          <AsideDropDown
            value={value}
            key={value.label}
            icon={value.icon}
            label={value.label}
            subLinks={value.subLinks}
            link={value.link}
            tag={value.tag}
            index={i}
            activeIndex={isActiveIndex}
            isActive={isActiveIndex === i}
            handleActive={setActiveIndex}
          />
        ))}
      </div>
      <div className="social-links">
        {socialLinks.map(({ icon, label }) => (
          <span key={label} className="social-link">
            {icon} {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DashboardAside;
