import SideBar from "../../components/side-bar/side-bar.jsx";
import TitleBar from "../../components/TitleBar/TitleBar.jsx";
import Url from "../../assets/fake-data/url.jsx";
import "./new-customer.scss";

const NewCustomerPage = () => {
  const left = <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.2937 7.79365C0.903076 8.18428 0.903076 8.81865 1.2937 9.20928L6.2937 14.2093C6.68433 14.5999 7.3187 14.5999 7.70933 14.2093C8.09995 13.8187 8.09995 13.1843 7.70933 12.7937L3.41558 8.4999L7.7062 4.20615C8.09683 3.81553 8.09683 3.18115 7.7062 2.79053C7.31558 2.3999 6.6812 2.3999 6.29058 2.79053L1.29058 7.79053L1.2937 7.79365Z" fill="#4318FF"/></svg>;  
    return (
        <main className="new-customer">
          <SideBar />
          <div className="content">
            <TitleBar
              title="مشتری‌ جدید"
              breadcrumb="داشبورد مدیریت / مشتری جدید"
              buttonText="لیست مشتری ها"
              buttonOnClick={`${Url}/dashboard/customer`}
            />
            <div className="customer-form">
              <div className="form-container">
                <div className="form-section">
                <div className="additional-info">
                    <h3>اطلاعات الزامی</h3>
                    <div className="form-fields">
                      <div className="field">
                        <label>نام و نام‌خانوادگی</label>
                        <input type="text" placeholder="نام و نام خانوادگی را وارد کنید" />
                      </div>
                      <div className="field">
                        <label>شماره تماس</label>
                        <input type="text" placeholder="مثال: 09123456789" />
                      </div>
                      <div className="field full-width">
                        <label>ایمیل</label>
                        <input type="text" placeholder="مثال: example@gmail.com" />
                      </div>
                    </div>
                  </div>
                  <div className="additional-info">
                    <h3>اطلاعات تکمیلی</h3>
                    <div className="form-fields">
                      
                    <div className="field">
                        <label>علاقه‌مندی ها</label>
                        <input disabled type="text" placeholder="کلیک کنید" />
                        {left}
                      </div>
                      <div className="field">
                        <label>خودرو های خریداری شده</label>
                        <input disabled type="text" placeholder="کلیک کنید" />
                        {left}
                      </div>
                      <div className="field full-width">
                        <label>توضیحات مشتری</label>
                        <textarea rows="6"></textarea>
                      </div>
                      
                    </div>
                  </div>
    
                  <div className="form-buttons">
                    <button className="submit-button">ثبت مشتری</button>
                    <button className="cancel-button">انصراف</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
}

export default NewCustomerPage;