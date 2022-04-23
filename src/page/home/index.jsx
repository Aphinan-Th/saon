import React from "react";
import "./index.css";
import { Button } from 'react-rainbow-components';
import { MdAddCircleOutline } from "react-icons/md";
function Home() {
  return (

    <div className="container-home">
      <form className="form-home">
        <div className="superlabel-home">ราคาเสนอ : 100 บาท</div>
        <div className="label-home">งาน : จองร้านเหล้า</div>
        <div className="label-home">วันที่นัด : 24/09/65</div>
        <div className="label-home">เวลานัด : 19.00น.</div>
        <img src="https://picsum.photos/200" alt="Avatar" className="my-photo-home" />
        <Button id="bt-size-home" label="Duel" variant="brand" className="rainbow-m-around_medium" size='large'></Button>
      </form>
      <div className="bt-adder-home"><MdAddCircleOutline size={"1.5rem"} className="icon-add-style"/></div>
      {/* <formpic className="container-pic-home"> */}
      {/* </formpic> */}

    </div>
  );
}

export default Home;
