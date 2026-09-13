import SideBar from "../../components/side-bar/side-bar.jsx";
import TitleBar from "../../components/TitleBar/TitleBar.jsx";
import Url from "../../assets/fake-data/url.jsx";
import "./shop.scss";

const ShopPage = () => {
  return (
    <main className="shop">
      <SideBar />
      <div className="content">
        <TitleBar
          title="فروشگاه"
          breadcrumb="داشبورد مدیریت / فروشگاه"
        />
      </div>
    </main>
  );
}

export default ShopPage;