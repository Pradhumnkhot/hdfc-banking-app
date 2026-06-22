import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import statement from "./assets/statement.jpeg";

function Statement() {
  const navigate = useNavigate();

  const downloadPdf = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/account/statement/pdf",
        {
          responseType: "blob",
        }
      );

      const file = new Blob([response.data], {
        type: "application/pdf",
      });

      const fileURL = window.URL.createObjectURL(file);

      const link = document.createElement("a");
      link.href = fileURL;
      link.download = "HDFC_Statement.pdf";

      document.body.appendChild(link);
      link.click();

      link.remove();

      toast.success("Statement Downloaded Successfully");
    } catch (error) {
      console.error(error);
      toast.error("Unable to Download Statement");
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
                ), url(${statement})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h1>📄 Account Statement</h1>

        <p
          style={{
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          Download your account statement in PDF format.
        </p>

        <div
          style={{
            marginTop: "50px",
            background: "rgba(255,255,255,0.15)",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
          }}
        >
          <h2>🏦 HDFC Bank Statement</h2>

          <button
            onClick={downloadPdf}
            style={{
              marginTop: "30px",
              padding: "15px 30px",
              fontSize: "18px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#16A34A",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ⬇ Download PDF Statement
          </button>

          <br />

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#374151",
              color: "white",
              cursor: "pointer",
            }}
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Statement;