import React from "react";
import "./index.css";
import {
  Table,
  Column,
  ButtonGroup,
  ButtonIcon,
  Badge,
  MenuItem,
  Button,
} from "react-rainbow-components";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const DataTable = [
  {
    name: "pi",
    status: "ok",
    email: "mail@kkk",
  },
  {
    name: "pi2",
    status: "ok",
    email: "mail@kkk",
  },
];

function Order({ title }) {
  const badgeStyles = { color: "#1de9b6", marginLeft: "0.5rem" };
  const StatusBadge = ({ value }) => (
    <Badge label={value} variant="lightest" style={badgeStyles} />
  );
  const onApprove = () => {
    console.log("approve");
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <header className="header">
        <h1>Order Page</h1>
      </header>
      <assign className="assign">
        <h2>My Order</h2>
        <Table keyField="id" data={DataTable}>
          <Column type="submit" header="Name" field="name" />
          <Column header="Status" field="status" component={StatusBadge} />
          <Column header="Description" field="email" />
          <Column type="action">
            <MenuItem label="Detail" onClick={openModal} />
            <MenuItem
              label="Delete"
              onClick={(event, data) => console.log(`Delete ${data.name}`)}
            />
          </Column>
        </Table>
      </assign>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        className="Modal"
        contentLabel="Example Modal"
      >
        <h1>ร้าน</h1>
        <label className="label">ชื่อร้าน : </label>
        <br></br>
        <inform
          type="string"
          id="input-component-1"
          placeholder="Lastname"
        ></inform>
        <input
          type="checkbox"
          id="toDoList1"
          name="toDoList1"
          value="toDoList1"
        ></input>
        <label for="toDoList">โซน</label>
        <br></br>
        <input
          type="checkbox"
          id="toDoList2"
          name="toDoList2"
          value="toDoList2"
        ></input>
        <label for="toDoList">โต๊ะ</label>
        <br></br>
        <button type="submit" class="btn" onClick={onApprove}>
          Approve
        </button>
        <button class="btn cancel" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}
export default Order;
