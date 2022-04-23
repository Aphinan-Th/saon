import React, { Children } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import {
  MdHome,
  MdDocumentScanner,
  MdFormatListBulleted,
  MdFace,
  MdLogout,
} from "react-icons/md";

function Navbar( {children} ) {
  const navigate = useNavigate();
  const location = window.location.pathname;
  console.log(location);
  if (location === "/login" || location === "/register") { return (<div className="container-nav">{children}</div>) }
  else {
    return (
      <div className="container-nav">
        <div className="form-nav">
          <div className="circle-nav" onClick={() => navigate("/home")}>
            <MdHome size={"1.5rem"} />
          </div>
          <div className="circle-nav" onClick={() => navigate("/history")}>
            <MdDocumentScanner size={"1.5rem"} />
          </div>
          <div className="circle-nav" onClick={() => navigate("/order")}>
            <MdFormatListBulleted size={"1.5rem"} />
          </div>
          <div className="circle-nav" onClick={() => navigate("/profile")}>
            <MdFace size={"1.5rem"} />
          </div>
        </div>
        {children}
        <div className="card-nav">
          <div>
            <img
              className="profile-nav"
              alt=""
              src="https://picsum.photos/200/300"
            ></img>
            <h3>Aphinan Thongpho</h3>
            <div className="contents-nav">
              <p>Email : aphinan_th@kkumail.com</p>
              <p>Phone : 0938953518</p>
              <p>Bank : KrungThai</p>
            </div>
          </div>
          <div className="btn-logOut-nav" onClick={() => navigate("/login")}>
            Log Out
            <MdLogout />
          </div>
        </div>

      </div>
    );
  }

}

export default Navbar;
