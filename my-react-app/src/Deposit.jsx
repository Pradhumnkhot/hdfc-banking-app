import  { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import deposit from "./assets/deposit.jpeg";

function Deposit() {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const depositMoney = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/account/deposit", {
        accountNumber,
        amount: Number(amount),
      });

      toast.success("Deposit Successful");

      setAccountNumber("");
      setAmount("");
    } catch (error) {
      toast.error("Deposit Failed");
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
            ), url(${deposit})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
      {/* Header */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "48px",
            margin: 0,
            letterSpacing: "3px",
            textShadow: "2px 2px 5px black",
          }}
        >
          🏦 HDFC BANK
        </h1>

        <p
          style={{
            color: "white",
            marginTop: "10px",
            fontSize: "18px",
          }}
        >
          Secure Banking Solution
        </p>
      </div>

      {/* Deposit Card */}
      <form
        onSubmit={depositMoney}
        style={{
          width: "420px",
          backgroundColor: "white",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0px 0px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#198754",
            marginBottom: "25px",
          }}
        >
          Deposit Money
        </h2>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              fontWeight: "bold",
              color: "#198754",
            }}
          >
            Account Number
          </label>

          <input
            type="text"
            placeholder="Enter Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #198754",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              fontWeight: "bold",
              color: "#198754",
            }}
          >
            Amount
          </label>

          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #198754",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#198754",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Deposit
        </button>
      </form>

      {/* Footer */}
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.2)",
          color: "white",
          textAlign: "center",
          padding: "10px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        🏦 HDFC Bank | Secure Banking Portal | © 2026 All Rights Reserved
      </div>
    </div>
  );
}

export default Deposit;