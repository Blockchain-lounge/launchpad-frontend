import { Routes, Route } from "react-router-dom";
import CreateNewNftPage from "./pages/create-new-nft-page";
import CollectionsPage from "./pages/collections-page";
import SettingsPage from "./pages/settings-page";
import ProfilePage from "./pages/profile-page";
import NftDetailPage from "./pages/nft-details-page";
import HomePage from "./pages/home-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="nft-detail-page" element={<NftDetailPage />} />
      <Route path="create-new-nft" element={<CreateNewNftPage />} />
      <Route path="collections" element={<CollectionsPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
