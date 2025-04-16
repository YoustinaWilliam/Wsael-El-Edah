import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMusic, FaTheaterMasks, FaGamepad, FaAward, FaBus } from "react-icons/fa";

const activities = [
  { title: "ترانيم", icon: <FaMusic />, color: "#ff6b6b" },
  { title: "مسرحيات", icon: <FaTheaterMasks />, color: "#6f42c1" },
  { title: "ألعاب", icon: <FaGamepad />, color: "#20c997" },
  { title: "مسابقات", icon: <FaAward />, color: "#fd7e14" },
  { title: "رحلات", icon: <FaBus />, color: "#0d6efd" },
];

const Children = () => {
  return (
    <div className="container" dir="rtl" style={{ marginBottom: "50px" }}>
      <h1 className="text-center fw-bold mb-5" style={{ color: "#dc3545", fontSize: "2.7rem" }}>
        أنشطة خدمة الأطفال
      </h1>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="text-white d-flex flex-column align-items-center justify-content-center shadow"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "20px",
              backgroundColor: activity.color,
              transition: "transform 0.3s ease",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{activity.icon}</div>
            <div>{activity.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Children;
