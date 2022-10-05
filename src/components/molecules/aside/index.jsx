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

const DashboardAside = () => {
  const [isActiveIndex, setActiveIndex] = useState(null);

  const asideLinks = [
    {
      label: "Collections",
      icon: <CollectionIcon />,
      subLinks: [
        { label: "Popular collections" },
        { label: "Drop calendar" },
        { label: "Auctions" },
      ],
    },
    {
      label: "Explore",
      icon: <ExploreIcon />,
      link: "",
    },
    {
      label: "Trending",
      icon: <TrendingIcon />,
      link: "",
    },
    {
      label: "Activities",
      icon: <ActivitiesIcon />,
      link: "",
    },
    {
      label: "Cloudax Games",
      icon: <GamesIcon />,
      link: "",
      tag: "coming",
    },

    {
      label: "Support",
      icon: <SupportIcon />,
      link: "",
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
      <div>
        {asideLinks.map((value, i) => (
          <AsideDropDown
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
