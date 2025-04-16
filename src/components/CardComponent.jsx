import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  card: {
    width: "100%", // Use percentage for responsiveness
    maxWidth: "300px", // Limit the maximum width
    height: "400px", // Set a fixed height for uniformity
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "#fff",
    border: "2px solid #dc3545",
    transition: "transform 0.3s ease",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
    margin: "0 auto", // Center the card horizontally
  },
  cardHover: {
    transform: "scale(1.03)",
  },
  image: {
    width: "100%",
    height: "200px", // Set a fixed height for the image
    objectFit: "cover", // Ensure the image covers the area without distortion
  },
  body: {
    padding: "15px",
    height: "calc(100% - 200px)", // Fill the remaining space below the image
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
  },
  title: {
    color: "#dc3545",
    fontWeight: "bold",
    fontSize: "1.3rem",
    textAlign: "center",
  },
  text: {
    color: "#555",
    fontSize: "0.95rem",
    textAlign: "center",
  },
};

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  render() {
    const { image, title, description } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        style={{
          ...styles.card,
          ...(isHovered ? styles.cardHover : {}),
        }}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <img src={image} alt={title} style={styles.image} />
        <div style={styles.body}>
          <h5 style={styles.title}>{title}</h5>
          <p style={styles.text}>{description}</p>
        </div>
      </div>
    );
  }
}

export default CardComponent;
