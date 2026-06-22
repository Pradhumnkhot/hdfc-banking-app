import  { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import password from "./assets/password.jpeg";

function ChangePassword() {
  const navigate = useNavigate();

  const [email] = useState(
    localStorage.getItem("email") || ""
  );

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changePassword = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        "http://localhost:8080/api/auth/change-password",
        {
          email,
          oldPassword,
          newPassword,
        }
      );

      toast.success("Password Changed Successfully");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Failed To Change Password");
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
                ), url(${password})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
      <h1 style={{ textAlign: "center" }}>
        🔐 Change Password
      </h1>

      <form
        onSubmit={changePassword}
        style={{
          width: "450px",
          margin: "40px auto",
          background: "rgba(255,255,255,0.15)",
          padding: "30px",
          borderRadius: "15px",
        }}
      >
        <input
          type="email"
          value={email}
          readOnly
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) =>
            setOldPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Update Password
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;