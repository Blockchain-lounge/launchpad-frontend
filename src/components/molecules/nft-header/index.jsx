import React from "react";
import Heading from "../../atoms/heading";
import Select from "../../atoms/select";
import ShortNextArrow from "../../atoms/vectors/short-next-arrow";

import "./nft-header-styles.scss";

const NftHeader = ({ heading, selectTitle }) => {
  return (
    <div className="nft-header-wrapper">
      <div className="flex flex-col w-full lg:w-[40%]">
        <div className="nft-head">
          <Heading
            title={heading}
            twClasses="text-3xl leading-[2rem] lg:text-5xl lg:leading-[3.58rem] mt-0"
          />
          {selectTitle && <Select title={selectTitle} />}
        </div>
        <div className="nft-head-bg"></div>
      </div>
      <div className="hidden lg:block">
        <span className="nft-tail">
          See All <ShortNextArrow />
        </span>
      </div>
    </div>
  );
};

export default NftHeader;
