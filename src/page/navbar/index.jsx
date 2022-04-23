import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import {
  MdHome,
  MdDocumentScanner,
  MdFormatListBulleted,
  MdFace,
  MdLogout,
} from "react-icons/md";

function Navbar({children}) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form">
        <div className="circle" onClick={() => navigate("/home")}>
          <MdHome size={"1.5rem"} />
        </div>
        <div className="circle" onClick={() => navigate("/history")}>
          <MdDocumentScanner size={"1.5rem"} />
        </div>
        <div className="circle" onClick={() => navigate("/order")}>
          <MdFormatListBulleted size={"1.5rem"} />
        </div>
        <div className="circle" onClick={() => navigate("/profile")}>
          <MdFace size={"1.5rem"} />
        </div>
      </div>
      {children}
      <div className="card">
        <div>
          <img
            className="profile"
            alt=""
            src="https://picsum.photos/200/300"
          ></img>
          <h3>Aphinan Thongpho</h3>
          <div className="contents">
            <p>Email : aphinan_th@kkumail.com</p>
            <p>Phone : 0938953518</p>
            <p>Bank : KrungThai</p>
          </div>
        </div>
        <div className="btn-logOut">
          Log Out
          <MdLogout />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
