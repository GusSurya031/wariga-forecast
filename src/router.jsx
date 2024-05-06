import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Ramalan from "./pages/Ramalan";
import Faq from "./pages/Faq";
import TentangWariga from "./pages/TentangWariga";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ramalan />
  },
  {
    path: "/faq",
    element: <Faq />
  },
  {
    path: "/tentang-wariga",
    element: <TentangWariga />
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
