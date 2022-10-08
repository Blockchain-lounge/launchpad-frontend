import { useCallback, useState } from "react";
import CollectionIcon from "../../atoms/vectors/collections-icon";
import ExploreIcon from "../../atoms/vectors/explore-icon";
import TrendingIcon from "../../atoms/vectors/trending-icon";
import GamesIcon from "../../atoms/vectors/games-icon";
import ActivitiesIcon from "../../atoms/vectors/activities-icon";
import SupportIcon from "../../atoms/vectors/support-icon";
import SidebarMenu from "../../atoms/sidebar-link";
import IOSIcon from "../../atoms/vectors/ios-icon";
import DiscordIcon from "../../atoms/vectors/discord-icon";
import TikTokIcon from "../../atoms/vectors/tiktok-icon";
import YoutubeIcon from "../../atoms/vectors/youtube-icon";
import TwitterIcon from "../../atoms/vectors/twitter-icon";
import InstagramIcon from "../../atoms/vectors/instagram-icon";
import "./sidebar-style.scss";
import Button from "../../atoms/button";
import WalletIcon from "../../atoms/vectors/wallet-icon";
import { useDispatch } from "react-redux";
import { toggleMobileModal } from "../../../reducers/modalReudcer";

const SideBar = () => {
  const dispatch = useDispatch();
  const [isActiveIndex, setActiveIndex] = useState(null);
  const handleMobileModalToggle = () => {
    dispatch(toggleMobileModal());
  };

  const sidebarLinks = [
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
    <div className="sidebar-container">
      <div className="sidebar-btn">
        <img
          src="/vectors/close-icon.svg"
          alt="close-mobile-tab-img"
          onClick={handleMobileModalToggle}
        />
        <span className="block m-1">
          <Button title="Connect Wallet" prefix={<WalletIcon />} outline />
        </span>
      </div>
      {sidebarLinks.map((item) => (
        <SidebarMenu key={item.label} item={item} />
      ))}
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

export default SideBar;
