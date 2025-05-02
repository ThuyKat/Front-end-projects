import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Vans from "./pages/Vans/Vans";
import VanDetails from "./pages/Vans/VanDetails";
import "./server";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails/HostVanDetails";
import HostVanDetailsInfo from "./pages/Host/HostVanDetails/HostVanDetailsInfo";
import HostVanDetailsPhotos from "./pages/Host/HostVanDetails/HostVanDetailsPhotos";
import HostVanDetailsPricing from "./pages/Host/HostVanDetails/HostVanDetailsPricing";
import Login from "./pages/Login"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />
            <Route path="login" element={<Login/>} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanDetailsInfo />} />
                <Route path="pricing" element={<HostVanDetailsPricing />} />
                <Route path="photos" element={<HostVanDetailsPhotos />} />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
