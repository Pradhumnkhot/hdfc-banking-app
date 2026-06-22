import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import bankimg from "./assets/bankimg.jpeg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "userName",
        response.data.name
      );

      localStorage.setItem(
        "email",
        response.data.email
      );

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid Credentials");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.25),
          rgba(0,0,0,0.25)
        ), url(${bankimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "fixed",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "60px",
            margin: 0,
            letterSpacing: "4px",
            textShadow: "3px 3px 10px black",
          }}
        >
          🏦 HDFC BANK
        </h1>

        <p
          style={{
            color: "white",
            fontSize: "20px",
            marginTop: "10px",
            textShadow: "2px 2px 5px black",
          }}
        >
          Secure Banking Solution
        </p>
      </div>

      {/* Login Card */}
      <form
        onSubmit={loginUser}
        style={{
          width: "420px",
          padding: "35px",
          background: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "25px",
          }}
        >
          Login
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.15)",
              color: "white",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.15)",
              color: "white",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "white",
            color: "#0F172A",
            border: "none",
            borderRadius: "30px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      {/* Footer */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          color: "white",
          textAlign: "center",
          padding: "12px",
          fontWeight: "bold",
        }}
      >
        🏦 HDFC Bank | Secure Banking Portal | © 2026 All Rights Reserved
      </div>
    </div>
  );
}

export default Login;