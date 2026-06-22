import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "./assets/profile.jpeg";

function Profile() {
  const navigate = useNavigate();

  const userName =
    localStorage.getItem("userName") || "Customer";

  const email =
    localStorage.getItem("email") || "Not Available";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.45),
          rgba(0,0,0,0.45)
        ), url(${profile})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: "40px",
          textAlign: "center",
          color: "white",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
            fontSize: "36px",
          }}
        >
          👤 Customer Profile
        </h1>

        <div
          style={{
            textAlign: "left",
            fontSize: "20px",
            lineHeight: "2",
          }}
        >
          <p>
            <strong>Name:</strong> {userName}
          </p>

          <p>
            <strong>Email:</strong> {email}
          </p>

          <p>
            <strong>Role:</strong> Customer
          </p>

          <p>
            <strong>Status:</strong> Active
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          style={{
            marginTop: "25px",
            padding: "12px 30px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#2563EB",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ⬅ Back To Dashboard
        </button>
      </div>
    </div>
  );
}

export default Profile;