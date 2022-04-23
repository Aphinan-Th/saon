import React from "react";

function Test2({ title, name }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  React.useEffect(() => {
    console.log("changed Email");
  }, [email,password]);
  React.useEffect(() => {
    console.log("changed Password");
  }, [password]);

  return (
    <div>
      Email: <input placeholder="Email" onChange={onChangeEmail}></input>
      <br />
      Your Email = {email}
      <br />
      Password: <input placeholder="Password" onChange={onChangePassword}></input>
        <br/>
     Your Password:={password}
    </div>
  );
}

export default Test2;
