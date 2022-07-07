import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-panel">
        <form className="form-panel" action="#">
          <div className="center-input">
            <label className="input-label" for="entrance_type">
              نوع کاربر
            </label>
            <select className="drop-down" name="entrance_type" id="entrance_type">
              <option className="drop-down-option" value="">
                دانشجو
              </option>
              <option className="drop-down-option" value="">
                آموزش
              </option>
              <option className="drop-down-option" value="">
                استاد
              </option>
              <option className="drop-down-option" value="">
                والدین
              </option>
              <option className="drop-down-option" value="">
                دانشجو جدیدالورود
              </option>
              <option className="drop-down-option" value="">
                دانشجویان مهمان تک درس و مهمان ترم و انتقال
              </option>
              <option className="drop-down-option" value="">
                ثبت نام امتحان
              </option>
            </select>
          </div>
          <div className="center-input">
            <input
              className="form-input"
              type="number"
              name=""
              id=""
              placeholder="شماره دانشجویی"
            />
          </div>
          <div className="center-input">
            <input
              className="form-password"
              type="password"
              name=""
              id=""
              placeholder="رمز عبور"
            />
          </div>
          <div className="center-input">
            <input
              className="primary-button"
              type="button"
              name=""
              id=""
              value="ورود به سیستم"
            />
          </div>
          <div className="center-input">
            <a href="#" className="form-link">
              رمز عبور خود را به خاطر نمی آورم
            </a>
          </div>
        </form>
        <hr className="horizontal-seperator" />
        <div className="notice-panel">
          <h4 className="card-title">اطلاعیه</h4>
          <div className="notice">
            <h6 className="notice-title">نکته اول</h6>
            <p className="notice-text">
              با توجه به آغاز زمان ارزشيابي دانشجويان عزيز از كيفيت تدريس اساتيد
              محترم در نيمسال دوم سال تحصيلی 1401-1400 ( از تاريخ 08/03/1401
              لغايت 24/03/1401 )، لطفاً پس از ورود به سامانه با انتخاب گزينه
              "دروس ارزشيابي"نسبت به اعلام نظرات و پيشنهادات و تکميل فرم هاي
              ارزشيابي استادان خود اقدام فرماييد. لازم به ذکر است نظرات
              دانشجويان گرامي در تکميل فرم هاي ارزشيابي جنبه محرمانه داشته و
              توسط هيچ شخصي حتي اساتيد قابل رويت و دسترسي نمي باشد و نتايج حاصل
              از ارزيابي بعد از پايان امتحانات و اعلام نمرات گزارش مي شود. لذا
              در راستاي ارتقاء کمي و كيفي آموزشي دانشگاه ، پاسخگويي دقيق و
              صادقانه به سوالات مندرج در فرمهاي ارزشيابي اساتيد بسيار مهم مي
              باشد. لطفاً با ارزيابي دقيق و به موقع و با اعلام نظرات و پيشنهادات
              خود ما را در بهبود و پيشرفت آموزشي ياري فرماييد.
            </p>
          </div>
          <div className="notice">
            <h6 className="notice-title">نکته دوم</h6>
            <p className="notice-text">
              با توجه به آغاز زمان ارزشيابي دانشجويان عزيز از كيفيت تدريس اساتيد
              محترم در نيمسال دوم سال تحصيلی 1401-1400 ( از تاريخ 08/03/1401
              لغايت 24/03/1401 )، لطفاً پس از ورود به سامانه با انتخاب گزينه
              "دروس ارزشيابي"نسبت به اعلام نظرات و پيشنهادات و تکميل فرم هاي
              ارزشيابي استادان خود اقدام فرماييد. لازم به ذکر است نظرات
              دانشجويان گرامي در تکميل فرم هاي ارزشيابي جنبه محرمانه داشته و
              توسط هيچ شخصي حتي اساتيد قابل رويت و دسترسي نمي باشد و نتايج حاصل
              از ارزيابي بعد از پايان امتحانات و اعلام نمرات گزارش مي شود. لذا
              در راستاي ارتقاء کمي و كيفي آموزشي دانشگاه ، پاسخگويي دقيق و
              صادقانه به سوالات مندرج در فرمهاي ارزشيابي اساتيد بسيار مهم مي
              باشد. لطفاً با ارزيابي دقيق و به موقع و با اعلام نظرات و پيشنهادات
              خود ما را در بهبود و پيشرفت آموزشي ياري فرماييد.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-logo">
        <div className="small-logo"></div>
        <p className="logo-subtitle">دانشگاه شهید مدنی آذربایجان</p>
      </div>
    </div>
  );
}

export default App;
