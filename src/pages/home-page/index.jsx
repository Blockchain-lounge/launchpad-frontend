import { HideUntilLoaded } from "react-animation";

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
import Loader from "../../components/atoms/loader";
import { useState } from "react";

const HomePage = () => {
  const [heroData, setHeroData] = useState(heroCards);
  const [activeCard, setActiveCard] = useState(heroData[0]);

  return (
    <HideUntilLoaded
      animationIn="bounce"
      imageToLoad="/images/hero-dashboard.jpg"
      Spinner={() => <Loader />}
    >
      <DashboardLayout>
        <div className="home-wrapper">
          <div className="space-y-[9rem] center mb-[10.125rem]">
            <section className="hero">
              <div>
                <Tag tag={activeCard?.tag} icon={<FeaturedIcon />} />
                <Heading title={activeCard.title} twClasses="mt-4" />
                <p className="max-w-xl">{activeCard.content}</p>
                <Button title={activeCard.cta} />
              </div>
              <div className="hero-img">
                <div className="h-[44.5625rem] max-w-[54.73rem] flex">
                  <img
                    src={activeCard.img}
                    alt={activeCard.title + "-img"}
                    className="object-cover flex-1"
                  />
                </div>
                <div className="hero-cards">
                  {heroData
                    .filter((d, i) => d.title !== activeCard.title)
                    .map((data, i) => (
                      <HeroCard
                        key={data.title}
                        {...data}
                        onClick={() => {
                          setActiveCard(data);
                        }}
                      />
                    ))}
                </div>
                <HeroIndicator />
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
            </section>

            <section>
              <NftHeaderCard heading="LaunchPad Drops" selectTitle="On Sale" />
              <Sliders data={nft2Datas} />
            </section>
            <section>
              <NftHeaderCard
                heading="In-Demand Collections"
                selectTitle="All"
              />
              <Sliders data={nft3Datas} />
            </section>
            <section>
              <NftHeaderCard heading="Explore Art" />
              <Sliders data={nft4Datas} />
            </section>
          </div>
          <Footer />
        </div>
      </DashboardLayout>
    </HideUntilLoaded>
  );
};

export default HomePage;
