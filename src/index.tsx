import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
    Routes
} from "react-router-dom";
import App from "./App";
import {
    GalleryPage,
    HomePage,
    MembersPage,
    NotFoundPage,
    ProfilePage
} from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/members/:username" element={<ProfilePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
