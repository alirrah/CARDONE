import SideBar from "../../components/side-bar/side-bar.jsx";
import TitleBar from "../../components/TitleBar/TitleBar.jsx";
import Url from "../../assets/fake-data/url.jsx";
import CustomerCard from '../../components/CustomerCard/CustomerCard';
import "./customer.scss";

const customerData = [
  { name: "علی محمدی" },
  { name: "فاطمه رضایی" },
  { name: "محمد حسینی" },
  { name: "زهرا کریمی" },
  { name: "امیر علیپور" },
  { name: "مریم نجفی" },
  { name: "رضا صادقی" },
  { name: "سارا احمدی" },
  { name: "حسین قاسمی" },
  { name: "نرگس موسوی زاده حسینی" },
  { name: "مهدی عباسی" },
  { name: "لیلا رحمانی" },
  { name: "جواد اکبری" },
  { name: "الهام حیدری" },
  { name: "بهروز نوری" },
  { name: "شیما صالحی" },
  { name: "کامران فرهادی" },
  { name: "پریسا محسنی" },
  { name: "سعید یوسفی" },
  { name: "ندا جعفری" }
];

const CustomerPage = () => {
  return (
    <main className="customer">
      <SideBar />
      <div className="content">
        <TitleBar
          title="مشتری‌ها"
          breadcrumb="داشبورد مدیریت / مشتری‌ها"
          buttonText="اضافه کردن مشتری"
          buttonOnClick={`${Url}/dashboard/customer/new`}
        />
        <div className="customer-list">
            {customerData.map((customer, index) => (
              <CustomerCard
                key={index}
                name={customer.name}
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export default CustomerPage;
