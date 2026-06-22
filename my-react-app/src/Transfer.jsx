import  { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import transfer from "./assets/transfer.jpeg";

function Transfer() {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");

  const transferMoney = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/account/transfer", {
        fromAccount,
        toAccount,
        amount: Number(amount),
      });

      toast.success("Transfer Successful");

      setFromAccount("");
      setToAccount("");
      setAmount("");
    } catch (error) {
      toast.error("Transfer Failed");
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
                ), url(${transfer})`,
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

      {/* Transfer Card */}
      <form
        onSubmit={transferMoney}
        style={{
          width: "450px",
          backgroundColor: "white",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0px 0px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0284C7",
            marginBottom: "25px",
          }}
        >
          Transfer Money
        </h2>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              fontWeight: "bold",
              color: "#0284C7",
            }}
          >
            From Account Number
          </label>

          <input
            type="text"
            placeholder="Enter From Account Number"
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #0284C7",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              fontWeight: "bold",
              color: "#0284C7",
            }}
          >
            To Account Number
          </label>

          <input
            type="text"
            placeholder="Enter To Account Number"
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #0284C7",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              fontWeight: "bold",
              color: "#0284C7",
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
              border: "1px solid #0284C7",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#0284C7",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Transfer
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

export default Transfer;