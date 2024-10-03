import SideBar from "../../components/side-bar/side-bar.jsx";
import TitleBar from "../../components/TitleBar/TitleBar.jsx";
import Url from "../../assets/fake-data/url.jsx";
import formBg from "../../assets/image/form-bg.png";
import "./new-car.scss";

const NewCarPage = () => {
  const down = <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_454_1183)"><path d="M7.29377 9.20605C7.6844 9.59668 8.31877 9.59668 8.7094 9.20605L13.7094 4.20605C14.1 3.81543 14.1 3.18106 13.7094 2.79043C13.3188 2.39981 12.6844 2.39981 12.2938 2.79043L8.00002 7.08418L3.70627 2.79355C3.31565 2.40293 2.68127 2.40293 2.29065 2.79355C1.90002 3.18418 1.90002 3.81855 2.29065 4.20918L7.29065 9.20918L7.29377 9.20605Z" fill="#4318FF"/></g><defs><clipPath id="clip0_454_1183"><rect width="10" height="16" fill="white" transform="matrix(0 -1 1 0 0 10.5)"/></clipPath></defs></svg>
  
  return (
    <main className="new-car">
      <SideBar />
      <div className="content">
        <TitleBar
          title="خودرو‌ جدید"
          breadcrumb="داشبورد مدیریت / خودرو جدید"
          buttonText="لیست خودرو ها"
          buttonOnClick={`${Url}/dashboard/car`}
        />
        <div className="car-form">
          <div className="form-container">
            <div className="header">
              <img className="background-image" src={formBg} alt="Background" />
              <div className="car-title">
                <span className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                </span>
                <h2>Toyota Corolla 2014</h2>
              </div>
              <img
                className="car-image"
                src="https://via.placeholder.com/62x62"
                alt="Car"
              />
            </div>
            <div className="form-section">
              <div className="form-fields top-fields">
                <div className="field">
                  <select>
                    <option>سال ساخت</option>
                  </select>
                  {down}
                </div>
                <div className="field">
                  <select>
                    <option>تریم</option>
                  </select>
                  {down}
                </div>
                <div className="field">
                  <select>
                    <option>کارکرد</option>
                  </select>
                  {down}
                </div>
                <div className="field currency">
                  <input className="" type="text" placeholder="قیمت پایه" />
                  <svg
                    width="17"
                    height="8"
                    viewBox="0 0 17 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5098 3.79395L16.0801 4.77148C15.099 5.30859 13.6882 5.87077 11.8477 6.45801C9.39844 7.23861 7.31445 7.62891 5.5957 7.62891C2.13672 7.62891 0.407227 6.67643 0.407227 4.77148C0.407227 3.63997 1.04102 2.56217 2.30859 1.53809V2.6123C1.3418 3.30697 0.858398 3.84408 0.858398 4.22363C0.858398 4.66048 1.26302 5.09733 2.07227 5.53418C3.10352 6.09277 4.47852 6.37207 6.19727 6.37207C7.76562 6.37207 9.52734 6.12142 11.4824 5.62012C13.3014 5.14746 14.9772 4.53874 16.5098 3.79395ZM9.82812 1.57031C9.82812 2.10026 9.56673 2.36523 9.04395 2.36523C8.82194 2.36523 8.63216 2.29004 8.47461 2.13965C8.32422 1.9821 8.24902 1.79232 8.24902 1.57031C8.24902 1.04753 8.514 0.786133 9.04395 0.786133C9.25879 0.786133 9.44141 0.864909 9.5918 1.02246C9.74935 1.17285 9.82812 1.35547 9.82812 1.57031ZM7.61523 1.57031C7.61523 2.10026 7.35384 2.36523 6.83105 2.36523C6.60905 2.36523 6.41927 2.29004 6.26172 2.13965C6.11133 1.9821 6.03613 1.79232 6.03613 1.57031C6.03613 1.04753 6.30111 0.786133 6.83105 0.786133C7.0459 0.786133 7.22852 0.864909 7.37891 1.02246C7.53646 1.17285 7.61523 1.35547 7.61523 1.57031Z"
                      fill="#4318FF"
                    />
                  </svg>
                </div>
              </div>
              <div className="form-fields">
                <div className="field color-selection">
                  <span>رنگ بدنه</span>
                  <div className="color-options">
                    {[
                      "multi",
                      "red",
                      "beige",
                      "white",
                      "gray",
                      "dark-gray",
                      "black",
                    ].map((color) => (
                      <div>
                        <div
                          key={color}
                          className={`color-option ${color}`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="field color-selection">
                  <span>رنگ داخلی</span>
                  <div className="color-options">
                    {[
                      "multi",
                      "red",
                      "beige",
                      "white",
                      "gray",
                      "dark-gray",
                      "black",
                    ].map((color) => (
                      <div>
                        <div
                          key={color}
                          className={`color-option ${color}`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="additional-info">
                <h3>اطلاعات تکمیلی</h3>
                <div className="form-fields">
                  <div className="field">
                    <label>وضعیت بدنه</label>
                    <select>
                      <option>انتخاب کنید</option>
                    </select>
                    {down}
                  </div>
                  <div className="field">
                    <label>وضعیت موتور</label>
                    <select>
                      <option>انتخاب کنید</option>
                    </select>
                    {down}
                  </div>
                  <div className="field">
                    <label>مهلت بیمهٔ شخص ثالث</label>
                    <select>
                      <option>انتخاب کنید</option>
                    </select>
                    {down}
                  </div>
                  <div className="field">
                    <label>نوع سوخت</label>
                    <select>
                      <option>انتخاب کنید</option>
                    </select>
                    {down}
                  </div>
                  <div className="field">
                    <label>گیربکس</label>
                    <select>
                      <option>انتخاب کنید</option>
                    </select>
                    {down}
                  </div>
                  <div className="checkbox-group">
                    <label>
                      امکان فروش قسطی وجود دارد.
                      <input type="checkbox" />
                    </label>
                    <label>
                      کارشناسی شده است.
                      <input type="checkbox" />
                    </label>
                  </div>
                  <div className="field">
                    <label>توضیحات خودرو</label>
                    <textarea rows="6"></textarea>
                  </div>
                  <div className="field">
                    <label>تصاویر خودرو</label>
                    <div className="upload-image">
                      <div><svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_456_1343)"><path d="M24.6511 37.9536H34.1395C35.4441 37.9536 36.5116 36.8861 36.5116 35.5815V23.721H40.2832C42.3944 23.721 43.4618 21.1592 41.9674 19.6648L31.0795 8.77684C30.1544 7.85173 28.66 7.85173 27.7348 8.77684L16.8469 19.6648C15.3525 21.1592 16.3962 23.721 18.5074 23.721H22.279V35.5815C22.279 36.8861 23.3465 37.9536 24.6511 37.9536ZM15.1627 42.6978H43.6279C44.9325 42.6978 46 43.7652 46 45.0699C46 46.3745 44.9325 47.442 43.6279 47.442H15.1627C13.8581 47.442 12.7906 46.3745 12.7906 45.0699C12.7906 43.7652 13.8581 42.6978 15.1627 42.6978Z" fill="#4318FF"/></g><defs><clipPath id="clip0_456_1343"><rect width="56.9302" height="56.9302" fill="white" transform="translate(0.930176)"/></clipPath></defs></svg></div>
                      <h4>بارگزاری تصویر یا لینک</h4>
                      <p>می‌توانید PNG و JPG و GIF را وارد کنید.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-buttons">
                <button className="submit-button">ثبت خودرو</button>
                <button className="cancel-button">انصراف</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewCarPage;
