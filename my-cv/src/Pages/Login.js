import React, { useEffect, useState } from "react";
import { Form, message ,Spin} from "antd";
import "../Ressources/Authentification.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  

  const [loading, setLoading]= useState(false)
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true)
    try {
      
      const user = await axios.post("api/user/login", values);
      setLoading(false)
      message.success("login successefull");
      localStorage.setItem("my-cv-users", JSON.stringify(user));
      navigate('/home')
    } catch (error) {
      setLoading(false)
      message.error("login failedd");
    }
  };


  useEffect(()=>{
    if(localStorage.getItem("my-cv-users"))
    {
      navigate('/home')
    }
  });



  return (
    <div className="auth-parent">
      {loading && (<Spin size="large"/>)}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <input  type="text" name="name" value="username"/>
        </Form.Item>

        <Form.Item name="password" label="Password">
          <input type="password" />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/Register"> Click Here to Register </Link>
          <button type="primary" htmltype="Submit">
            Login
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Register;