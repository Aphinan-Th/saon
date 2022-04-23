// import React from "react";
// import "./assign.css";
// import {
//   Table,
//   Column,
//   ButtonGroup,
//   ButtonIcon,
//   Badge,
//   MenuItem,
// } from "react-rainbow-components";
// function LoginPage() {
//   const [email, setEmail] = React.useState();
//   const [password, setPassword] = React.useState();
//   const onChangeEmail = (input) => {
//     setEmail(input.target.value);
//   };
//   const onChangePassword = (password) => {
//     setPassword(password.target.value);
//   };
//   React.useEffect(() => {
//       console.log({email, password});
//   }, [email, password]);
// function Assign({ title }) {
//   const onClick = () => {
//     console.log("Clicked");
//   };
//   const onApprove = () => {
//     console.log("approve");
//   };

//   return (
//     <div className="container">
//       {title}
//       <form className="form">
//         <div className="circle">First page</div>
//         <div className="circle">รับงาน</div>
//         <div className="circle">จ้างงาน</div>
//         <div className="circle"></div>
//       </form>
//       <header className="header">
//         <h1>Assign Page</h1>
//       </header>
//       <assign className="assign">
//         <h2>งานที่จ้าง</h2>
//         <Table keyField="id" /*data={DataTable}*/>
//           <Column header="Name" field="name" onClick={onApprove}>
//             <button type="submit" onClick={onApprove}></button>
//           </Column>
//           <Column header="Status" field="status" /*component={StatusBadge}*/ />
//           <Column header="Email" field="email" />
//           <Column type="action">
//             <MenuItem
//               label="Edit"
//               onClick={(event, data) => console.log(`Edit ${data.name}`)}
//             />
//             <MenuItem
//               label="Delete"
//               onClick={(event, data) => console.log(`Delete ${data.name}`)}
//             />
//           </Column>
//         </Table>
//       </assign>
//     </div>
//   );
// }
// export default Assign;

{
  /* <block className="block">
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
          <button type="submit" onClick={onApprove}>
            ยืนยัน
          </button>

          {/* <form className="form" onSubmit = {onsubmit}>
      <h1>Login Page</h1>
      <label className="label">Email</label>
      <input type="email" placeholder="email" onChange={onChangeEmail}></input>
      <label className="label">Password</label>
      <input type="password" placeholder="password" onChange={onChangePassword}></input>{" "}
      <button type="submit">submit</button>
      </form> */
}
// </block> */}
