import clsx from "clsx";
import YoutubeIcon from "../../atoms/vectors/footer-youtube-icon";
import TwitterIcon from "../../atoms/vectors/footer-twitter-icon";
import FacebookIcon from "../../atoms/vectors/footer-facebook-icon";
import GooglePlusIcon from "../../atoms/vectors/footer-google-icon";
import "./footer.scss";

const Footer = () => {
  const aboutLinks = [
    "About",
    "About NFT",
    "Live Auctions",
    "NFT Blog",
    "Activity",
  ];
  const supportLinks = [
    "Support",
    "Help & Support",
    "Item Details",
    "Author Profile",
    "Collection",
  ];
  return (
    <footer>
      <div>
        <img src="/images/Cloudax_Light_logo.png" alt="logo" />
      </div>
      <div>
        <div className="footer-icons">
          <YoutubeIcon />
          <TwitterIcon />
          <FacebookIcon />
          <GooglePlusIcon />
        </div>
        <span className="footer-copy">All rights reserved @Cloudax 2022</span>
      </div>
      <div className="about-links">
        {aboutLinks.map((link, i) => (
          <span
            key={link}
            className={clsx(i === 0 ? "footer-link-title" : "footer-links")}
          >
            {link}
          </span>
        ))}
      </div>
      <div>
        {supportLinks.map((link, i) => (
          <span
            key={link}
            className={clsx(i === 0 ? "footer-link-title" : "footer-links")}
          >
            {link}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
