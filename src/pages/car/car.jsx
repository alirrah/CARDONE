import SideBar from "../../components/side-bar/side-bar.jsx";
import TitleBar from "../../components/TitleBar/TitleBar.jsx";
import Url from "../../assets/fake-data/url.jsx";
import CarCard from '../../components/CarCard/CarCard';
import "./car.scss";

const CarPage = () => {
    const carData = [
        {
          image: "https://via.placeholder.com/125x125",
          name: "تویوتا کورولا ۲۰۱۴",
          color: "قرمز",
          mileage: "۲۰,۰۰۰",
          model: "۲۰۱۴",
          price: "توافقی"
        },
        {
          image: "https://via.placeholder.com/125x125",
          name: "تویوتا کورولا ۲۰۱۴",
          color: "قرمز",
          mileage: "۲۰,۰۰۰",
          model: "۲۰۱۴",
          price: "توافقی"
        },
        {
          image: "https://via.placeholder.com/125x125",
          name: "تویوتا کورولا ۲۰۱۴",
          color: "قرمز",
          mileage: "۲۰,۰۰۰",
          model: "۲۰۱۴",
          price: "توافقی"
        },
        {
          image: "https://via.placeholder.com/125x125",
          name: "تویوتا کورولا ۲۰۱۴",
          color: "قرمز",
          mileage: "۲۰,۰۰۰",
          model: "۲۰۱۴",
          price: "توافقی"
        },
        {
          image: "https://via.placeholder.com/125x125",
          name: "تویوتا کورولا ۲۰۱۴",
          color: "قرمز",
          mileage: "۲۰,۰۰۰",
          model: "۲۰۱۴",
          price: "توافقی"
        },
        {
          image: "https://via.placeholder.com/125x125",
          name: "تویوتا کورولا ۲۰۱۴",
          color: "قرمز",
          mileage: "۲۰,۰۰۰",
          model: "۲۰۱۴",
          price: "توافقی"
        },
        {
          image: "https://via.placeholder.com/125x125",
          name: "تویوتا کورولا ۲۰۱۴",
          color: "قرمز",
          mileage: "۲۰,۰۰۰",
          model: "۲۰۱۴",
          price: "توافقی"
        },
      ];

  return (
    <main className="car">
      <SideBar />
      <div className="content">
        <TitleBar
          title="خودرو ها"
          breadcrumb="داشبورد مدیریت / خودرو ها"
          buttonText="اضافه کردن خودرو"
          buttonOnClick={`${Url}/dashboard/car/new`}
        />
        <div className="car-list">
            {carData.map((car, index) => (
              <CarCard
                key={index}
                image={car.image}
                name={car.name}
                color={car.color}
                mileage={car.mileage}
                model={car.model}
                price={car.price}
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export default CarPage;
