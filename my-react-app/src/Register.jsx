import { useState, useEffect } from "react";
import axios from "axios";
import register from "./assets/register.jpeg";
import "./App.css";

function Register() {
  const [roles, setRoles] = useState([]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/roles"
      );

      setRoles(response.data);

      if (response.data.length > 0) {
        setUser((prev) => ({
          ...prev,
          role: response.data[0].roleName,
        }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        user
      );

      alert(response.data);

      setUser({
        name: "",
        email: "",
        password: "",
        role: roles.length > 0 ? roles[0].roleName : "",
      });
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
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
        ), url(${register})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form
        style={{
          width: "420px",
          padding: "35px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "25px",
          }}
        >
          Create Account
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter Full Name"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.15)",
              color: "black",
              boxSizing: "border-box",
            }}
          />
        </div>

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
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.15)",
              color: "black",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
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
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.15)",
              color: "black",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Role
          </label>

          <select
            value={user.role}
            onChange={(e) =>
              setUser({ ...user, role: e.target.value })
            }
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.15)",
              color: "black",
              boxSizing: "border-box",
            }}
          >
            {roles.map((role) => (
              <option
                key={role.id}
                value={role.roleName}
              >
                {role.roleName}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={registerUser}
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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;