import SideBar from "../../components/side-bar/side-bar.jsx";
import TitleBar from "../../components/TitleBar/TitleBar.jsx";
import Url from "../../assets/fake-data/url.jsx";
import "./profile.scss";

const ProfilePage = () => {
  return (
    <main className="profile">
      <SideBar />
      <div className="content">
        <TitleBar
          title="پروفایل"
          breadcrumb="داشبورد مدیریت / پروفایل"
          buttonText="پیش نمایش"
          buttonOnClick={`#`}
        />
      </div>
    </main>
  );
};

export default ProfilePage;
