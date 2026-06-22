import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Dashboard() {
  const navigate = useNavigate();

  const [account, setAccount] = useState({});

  const { transcript, listening } =
    useSpeechRecognition();

  const userName =
    localStorage.getItem("userName") || "Customer";

  const loadAccount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/account/details/1001"
      );

      setAccount(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAccount();
  }, []);

  useEffect(() => {
    const text = transcript.toLowerCase();

    if (text.includes("deposit")) {
      navigate("/deposit");
    }

    if (text.includes("withdraw")) {
      navigate("/withdraw");
    }

    if (text.includes("transfer")) {
      navigate("/transfer");
    }

    if (text.includes("statement")) {
      navigate("/statement");
    }

    if (text.includes("history")) {
      navigate("/history");
    }

    if (text.includes("profile")) {
      navigate("/profile");
    }

    if (text.includes("password")) {
      navigate("/change-password");
    }

    if (text.includes("logout")) {
      localStorage.clear();
      navigate("/");
    }
  }, [transcript, navigate]);

  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const cardStyle = {
    width: "220px",
    height: "130px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  };

  const smallCard = {
    width: "180px",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0F172A,#1E3A8A,#2563EB)",
        padding: "30px",
        color: "white",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "10px",
          }}
        >
          🏦 HDFC BANK
        </h1>

        <h2 style={{ color: "#FBBF24" }}>
          Welcome {userName} 👋
        </h2>

        <p>Secure • Fast • Reliable Banking</p>
      </div>

      {/* Balance Card */}
      <div
        style={{
          width: "400px",
          margin: "25px auto",
          background:
            "linear-gradient(135deg,#16A34A,#22C55E)",
          padding: "35px",
          borderRadius: "25px",
          textAlign: "center",
          boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
        }}
      >
        <h3>💰 Available Balance</h3>

        <h1
          style={{
            fontSize: "48px",
            margin: "10px 0",
          }}
        >
          ₹{account.balance || 0}
        </h1>

        <p>Primary Savings Account</p>
      </div>

      {/* Quick Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <div style={smallCard}>💳 Savings</div>
        <div style={smallCard}>💸 Payments</div>
        <div style={smallCard}>📈 Investments</div>
        <div style={smallCard}>🔔 Alerts</div>
      </div>

      {/* Menu */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4, 220px)",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            ...cardStyle,
            backgroundColor: "#16A34A",
          }}
          onClick={() => navigate("/deposit")}
        >
          💰 Deposit
        </div>

        <div
          style={{
            ...cardStyle,
            backgroundColor: "#EA580C",
          }}
          onClick={() => navigate("/withdraw")}
        >
          💸 Withdraw
        </div>

        <div
          style={{
            ...cardStyle,
            backgroundColor: "#0284C7",
          }}
          onClick={() => navigate("/transfer")}
        >
          🔄 Transfer
        </div>

        <div
          style={{
            ...cardStyle,
            backgroundColor: "#EC4899",
          }}
          onClick={startListening}
        >
          🎤 Voice Banking
        </div>

        <div
          style={{
            ...cardStyle,
            backgroundColor: "#7C3AED",
          }}
          onClick={() => navigate("/statement")}
        >
          📄 Statement
        </div>

        <div
          style={{
            ...cardStyle,
            backgroundColor: "#DC2626",
          }}
          onClick={() => navigate("/history")}
        >
          📜 History
        </div>

        <div
          style={{
            ...cardStyle,
            backgroundColor: "#0891B2",
          }}
          onClick={() => navigate("/profile")}
        >
          👤 Profile
        </div>

        <div
          style={{
            ...cardStyle,
            backgroundColor: "#9333EA",
          }}
          onClick={() =>
            navigate("/change-password")
          }
        >
          🔐 Password
        </div>

        <div
          style={{
            ...cardStyle,
            backgroundColor: "#374151",
          }}
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          🚪 Logout
        </div>
      </div>

      {/* Voice Banking */}
      <div
        style={{
          width: "600px",
          margin: "40px auto",
          background: "rgba(255,255,255,0.15)",
          padding: "25px",
          borderRadius: "15px",
          textAlign: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2>🎤 Voice Banking Assistant</h2>

        <p>
          Status:
          {" "}
          {listening
            ? "Listening..."
            : "Stopped"}
        </p>

        <p>
          <strong>You Said:</strong>
          {" "}
          {transcript}
        </p>

        <button
          onClick={startListening}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Start Listening
        </button>

        <button
          onClick={stopListening}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Stop Listening
        </button>
      </div>
    </div>
  );
}

export default Dashboard;