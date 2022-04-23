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
function History() {
  const badgeStyles = { color: "", marginLeft: "0.5rem" };
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

  return<div>
     <header className="header-his">
        <h1>History Page</h1>
      </header>
      <history className="history">
        <h2>My History</h2>
        <Table keyField="id" data={DataTable}>
          <Column type="submit" header="Name" field="name" />
          <Column header="Status" field="status" component={StatusBadge} />
          <Column header="Description" field="email" />
          <Column type="action">
            <MenuItem label="Detail" onClick={openModal} />
            <MenuItem
              label="Cancle"
              onClick={(event, data) => console.log(`Cancle ${data.name}`)}
            />
          </Column>
        </Table>
      </history>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal-his"
        contentLabel="Example Modal"
      >
        <h1>ร้าน</h1>
        <label className="check-his">ชื่อร้าน : </label>
        <br></br>
        <inform
          type="string"
          id="input-component-1"
          placeholder="Lastname"
          className="check-his"
        ></inform>
        <input
          type="checkbox"
          id="toDoList1"
          name="toDoList1"
          value="toDoList1"
          className="check-his"
        ></input>
        <label for="toDoList" className="check-his">โซน</label>
        <br></br>
        <input
          type="checkbox"
          id="toDoList2"
          name="toDoList2"
          value="toDoList2"
          className="check-his"
        ></input>
        <label for="toDoList" className="check-his">โต๊ะ</label>
        <br></br>
        <button type="submit" class="btn-his" onClick={onApprove}>
          Approve
        </button>
        <button class="btn-cancel-his" onClick={closeModal}>
          Close
        </button>
      </Modal>
  </div>
}
export default History;