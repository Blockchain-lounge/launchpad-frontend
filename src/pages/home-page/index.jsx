import "./home-page-style.scss";

import NftHeaderCard from "../../components/molecules/nft-header";
import NftMiniCard from "../../components/molecules/nft-mini-card";
import HeroIndicator from "../../components/atoms/hero-indicator";
import HeroCard from "../../components/molecules/hero-card";

import DashboardLayout from "../../templates/dashboard-layout";
import Footer from "../../components/organisms/footer";
import Button from "../../components/atoms/button";
import Heading from "../../components/atoms/heading";
import Tag from "../../components/atoms/tag";
import FeaturedIcon from "../../components/atoms/vectors/featured-icon";

import Sliders from "../../components/molecules/nft-slider";
import {
  heroCards,
  nftDatas,
  nft2Datas,
  nft3Datas,
  nft4Datas,
} from "../../store/data";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [heroData, setHeroData] = useState(heroCards);
  const [activeCard, setActiveCard] = useState(heroData[0]);
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="home-wrapper">
        <div className="space-y-[9rem] center mb-[10.125rem]">
          <section className="hero">
            <div>
              <Tag tag={activeCard?.tag} icon={<FeaturedIcon />} />
              <Heading title={activeCard.title} twClasses="mt-4" />
              <p className="lg:max-w-xl">{activeCard.content}</p>
              <Button
                title={activeCard.cta}
                onClick={() => navigate("/nft-detail-page")}
              />
            </div>
            <div className="hero-img-cards">
              <div className="hero-img">
                <img src={activeCard.img} alt={activeCard.title + "-img"} />
              </div>
              <div className="hero-cards">
                {heroData
                  .filter((d) => d.title !== activeCard.title)
                  .map((data) => (
                    <HeroCard
                      key={data.title}
                      {...data}
                      onClick={() => {
                        setActiveCard(data);
                      }}
                    />
                  ))}
              </div>
              <div className="flex w-full mb-4 lg:mb-0 items-center justify-center lg:block mt-4 lg:mt-[2.6875rem]">
                <HeroIndicator
                  arr={heroData}
                  active={activeCard}
                  setActiveData={setActiveCard}
                />
              </div>
            </div>
          </section>
          <section className="hero-section-1">
            <NftHeaderCard
              heading="Popular Collections"
              selectTitle="Last 24 hours"
            />
            <div className="hero-section-1-collection">
              {nftDatas.map(({ imgUrl, title }, i) => (
                <NftMiniCard
                  key={`title-${i + 1}`}
                  index={i + 1}
                  title={title}
                  imgUrl={imgUrl}
                />
              ))}
            </div>
            <span className="mobile-see-all-btn">See All</span>
          </section>

          <section>
            <NftHeaderCard heading="LaunchPad Drops" selectTitle="On Sale" />
            <Sliders data={nft2Datas} />
            <span className="mobile-see-all-btn">See All</span>
          </section>
          <section>
            <NftHeaderCard heading="In-Demand Collections" selectTitle="All" />
            <Sliders data={nft3Datas} />
            <span className="mobile-see-all-btn">See All</span>
          </section>
          <section>
            <NftHeaderCard heading="Explore Art" />
            <Sliders data={nft4Datas} />
          </section>
        </div>
        <Footer />
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
