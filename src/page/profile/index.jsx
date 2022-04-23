import React from "react";
import "./index.css";
import { Input } from "react-rainbow-components";
import { Button } from "react-rainbow-components";
// import { useNavigate } from "react-router-dom";

function Profile() {
  const [userName, setUserName] = React.useState("");
  const onSubmit = (e) => {
    console.log(document.getElementById("input-component-1"));
    const onChangeUsername = (e) => {
      setUserName(e.target.value);
    };
  };

  return (
    <div className="profile-container">
      <h1>PROFILE</h1>
      <form className="session-area" onSubmit={onSubmit}>
        <label className="label-in-section">Username</label>
        <Input
          id="textfild"
          type="text"
          // id="input-component-1"
          value="Apinan Thongphoo"
          // OnChange={onChangeBankID}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
        <Button
          label="change"
          variant="outline-brand"
          id="change-button"
          className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap"
          // id="submit-button"
          // placeholder="submit"
          onClick={onSubmit}
        />
      </form>

      <form className="session-area" onSubmit={onSubmit}>
        <label className="label-in-section">Firstname</label>
        <Input
          id="textfild"
          type="text"
          // id="input-component-1"
          value="Apinan"
          // OnChange={onChangeBankID}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
        <Button
          label="change"
          variant="outline-brand"
          id="change-button"
          className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap"
          // id="submit-button"
          // placeholder="submit"
          onClick={onSubmit}
        />
      </form>

      <form className="session-area" onSubmit={onSubmit}>
        <label className="label-in-section">Lastname</label>
        <Input
          id="textfild"
          type="text"
          // id="input-component-1"
          value="Thongphoo"
          // OnChange={onChangeBankID}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
        <Button
          label="change"
          variant="outline-brand"
          id="change-button"
          className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap"
          // id="submit-button"
          // placeholder="submit"
          onClick={onSubmit}
        />
      </form>

      <form className="session-area" onSubmit={onSubmit}>
        <label className="label-in-section">Emaill</label>
        <Input
          id="textfild"
          type="email"
          // id="input-component-1"
          value="aphinan_th@kkumail.com"
          // OnChange={onChangeBankID}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
        <Button
          label="change"
          variant="outline-brand"
          id="change-button"
          className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap"
          // id="submit-button"
          // placeholder="submit"
          onClick={onSubmit}
        />
      </form>

      <form className="session-area" onSubmit={onSubmit}>
        <label className="label-in-section">Phone Number</label>
        <Input
          id="textfild"
          type="text"
          // id="input-component-1"
          value="093-895-3518"
          // OnChange={onChangeBankID}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
        <Button
          label="change"
          variant="outline-brand"
          id="change-button"
          className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap"
          // id="submit-button"
          // placeholder="submit"
          onClick={onSubmit}
        />
      </form>

      <form className="session-area" onSubmit={onSubmit}>
        <label className="label-in-section">BankID</label>
        <Input
          id="textfild"
          type="text"
          // id="input-component-1"
          value="aphinan_th@kkumail.com"
          // OnChange={onChangeBankID}
          className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        />
        <Button
          label="change"
          variant="outline-brand"
          id="change-button"
          className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap"
          // id="submit-button"
          // placeholder="submit"
          onClick={onSubmit}
        />
      </form>


    </div>
  );
}

export default Profile;
