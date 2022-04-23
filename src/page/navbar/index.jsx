import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import {
  MdHome,
  MdDocumentScanner,
  MdFormatListBulleted,
  MdFace,
} from "react-icons/md";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <form className="form">
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
      </form>
    </div>
  );
}

export default Navbar;
