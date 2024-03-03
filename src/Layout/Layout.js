import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div>
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};
export default AppLayout;
