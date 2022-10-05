import EthIcon from "../../atoms/vectors/eth-icon";
import SolanaIcon from "../../atoms/vectors/solana-icon";
import TezozIcon from "../../atoms/vectors/tezoz-icon";
import PolygonIcon from "../../atoms/vectors/polygon-icon";
import ConnectHeader from "../connect-wallet-header";

import "./connect-wallet-tab.scss";

const ConnectHeaderTab = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { text: "Ethereum", icon: EthIcon, iconName: "eth" },
    { text: "solana", icon: SolanaIcon, iconName: "solana" },
    { text: "Tezoz", icon: TezozIcon, iconName: "tezoz" },
    { text: "polygon", icon: PolygonIcon, iconName: "polygon" },
  ];
  const handleActiveTab = (i) => () => setActiveTab(i);
  return (
    <div className="connect-header-tab">
      {tabs.map(({ text, icon }, idx) => (
        <ConnectHeader
          key={text}
          text={text}
          ICON={icon}
          isActive={activeTab === idx}
          onClick={handleActiveTab(idx)}
        />
      ))}
    </div>
  );
};

export default ConnectHeaderTab;
