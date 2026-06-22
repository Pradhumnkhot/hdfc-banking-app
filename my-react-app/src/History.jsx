import { useEffect, useState } from "react";
import axios from "axios";
import history from "./assets/history.jpeg";

function History() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/account/transactions"
      );

      setTransactions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.45),
          rgba(0,0,0,0.45)
        ), url(${history})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "95%",
          margin: "0 auto",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "30px",
          color: "white",
          boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          📜 HDFC BANK - Transaction History
        </h1>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "black",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#1E3A8A",
                color: "white",
              }}
            >
              <th style={{ padding: "12px" }}>
                Transaction ID
              </th>
              <th style={{ padding: "12px" }}>
                Type
              </th>
              <th style={{ padding: "12px" }}>
                Amount
              </th>
              <th style={{ padding: "12px" }}>
                From Account
              </th>
              <th style={{ padding: "12px" }}>
                To Account
              </th>
              <th style={{ padding: "12px" }}>
                Remarks
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr
                key={t.trasactionId}
                style={{
                  textAlign: "center",
                }}
              >
                <td style={{ padding: "10px" }}>
                  {t.trasactionId}
                </td>
                <td style={{ padding: "10px" }}>
                  {t.trasactionType}
                </td>
                <td style={{ padding: "10px" }}>
                  ₹{t.amount}
                </td>
                <td style={{ padding: "10px" }}>
                  {t.fromAccount}
                </td>
                <td style={{ padding: "10px" }}>
                  {t.toAccount}
                </td>
                <td style={{ padding: "10px" }}>
                  {t.remarks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;