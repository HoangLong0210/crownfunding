import LayoutDashboard from "layout/LayoutDashboard";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const CreateCampaignPage = lazy(() => import("./pages/CreateCampaignPage"));
const CampaignDetailPage = lazy(() => import("./pages/CampaignDetailPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/campaign/start-campaign"
            element={<CreateCampaignPage></CreateCampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignDetailPage></CampaignDetailPage>}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
