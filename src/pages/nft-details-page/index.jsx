import { useNavigate } from "react-router-dom";
import Heading from "../../components/atoms/heading";

import ArrowBack from "../../components/atoms/vectors/arrow-down";
import CoinIcon from "../../components/atoms/vectors/coin-icon";
import Footer from "../../components/organisms/footer";
import DashboardLayout from "../../templates/dashboard-layout";
import "./nft-detail-page-style.scss";

const NftDetailPage = () => {
  const navigate = useNavigate();
  const nftData = {
    content:
      "Become one of the 4,000 Ducks to gain access to the ultimate Play-and-Earn Metaverse DucksVegas NFT becomes your digital identity, your profile picture, and your in-game character. Participate in a variety of games to climb leaderboards, level up, and most importantly - earn $QUACK. Otherwise, rent out your NFTs to receive a steady stream of passive income.",
    tags: ["DOXXED", "ESCROW 1d"],
  };

  return (
    <DashboardLayout>
      <div className="nft-detail-wrapper">
        <div className="nft-detail-wrapper-content center">
          <div>
            <div className="hidden lg:block" onClick={() => navigate(-1)}>
              <ArrowBack />
            </div>
            <Heading title="Dreamy Ape" twClasses="mt-4" />
            <div className="nft-detail-tag-price">
              <div className="nft-detail-tag">
                {nftData.tags.map((tag) => (
                  <span
                    className="nft-detail-tag-label"
                    data={tag}
                    key={tag}
                  ></span>
                ))}
              </div>

              <span className="nft-detail-price block">
                <span className="nft-detail-price-label">Price:</span>
                <CoinIcon /> 4.8
              </span>
            </div>
            <p className="lg:max-w-xl">{nftData.content}</p>
            <div className="flex flex-col gap-y-6">
              <div className="nft-detail-mint">
                <div className="nft-detail-mint-token-tag">
                  <span className="nft-detail-mint-label">Whitelist Mint</span>
                  <span className="nft-detail-mint-tag" data="ENDED"></span>
                </div>
                <div className="nft-detail-mint-price">
                  <span className="nft-detail-price-tag">MAX 1 TOKEN</span>
                  <div className="nft-detail-price">
                    <span className="nft-detail-price-label">Price:</span>
                    <CoinIcon /> <span>4.8</span>
                  </div>
                </div>
              </div>
              <div className="nft-detail-mint">
                <div className="nft-detail-mint-token-tag">
                  <span className="nft-detail-mint-label">Public Mint</span>
                  <span className="nft-detail-mint-tag" data="ENDED"></span>
                </div>
                <div className="nft-detail-mint-price">
                  <span className="nft-detail-price-tag">Unlimited</span>
                  <div className="nft-detail-price">
                    <span className="nft-detail-price-label">Price:</span>
                    <CoinIcon /> <span>4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nft-detail-detail-img">
            <img src="/images/ape.png" alt={"ape-img"} />
          </div>
        </div>
        <Footer />
      </div>
    </DashboardLayout>
  );
};

export default NftDetailPage;
