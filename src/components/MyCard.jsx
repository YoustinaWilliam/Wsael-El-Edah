import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyCard({ img, name, description, link }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={link}
            className="text-decoration-none"
        >
            <div 
                className="card text-white position-relative overflow-hidden shadow-lg border-0"
                style={{ 
                    width: "22rem", 
                    height: "300px", 
                    cursor: "pointer", 
                    transition: "transform 0.3s ease-in-out",
                    transform: isHovered ? "scale(1.05)" : "scale(1)"
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* الخلفية المضببة */}
                <div className="position-absolute w-100 h-100 bg-dark" 
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(3px)",
                        transition: "filter 0.3s ease-in-out",
                    }}
                ></div>

                {/* المحتوى */}
                <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center bg-black bg-opacity-50">
                    <h3 className="fw-bold text-white display-5">{name}</h3>
                    
                    {isHovered && (
                        <p className="small mt-2 bg-white text-danger p-2 rounded shadow">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default MyCard;

