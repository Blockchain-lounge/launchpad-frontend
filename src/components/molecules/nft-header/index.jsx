import React from "react";
import Heading from "../../atoms/heading";
import Select from "../../atoms/select";
import ShortNextArrow from "../../atoms/vectors/short-next-arrow";

import "./nft-header-styles.scss";

const NftHeader = ({ heading, selectTitle }) => {
  return (
    <div className="nft-header-wrapper">
      <div>
        <div className="nft-head">
          <Heading
            title={heading}
            twClasses="text-5xl leading-[3.58rem] mt-0"
          />
          {selectTitle && <Select title={selectTitle} />}
        </div>
        <div className="nft-head-bg"></div>
      </div>
      <div>
        <span className="nft-tail">
          See All <ShortNextArrow />
        </span>
      </div>
    </div>
  );
};

export default NftHeader;
