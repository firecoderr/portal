import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const navigation = useLocation();

  return (
    <div>
      <Navbar />
      <Outlet key={navigation.key} />
    </div>
  );
};

export default RootLayout;
