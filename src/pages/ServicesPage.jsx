import React from "react";
import CardComponent from "../components/CardComponent";
import GalleryComponent from "../components/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";

const cards = [
  {
    title: "تأجير و بيع ماسكات",
    description: "ماسكات بأنواعها لعروض المسرح والفعاليات.",
    icon: "icons/mask.jpeg",
  },
  {
    title: "ماكيتات",
    description: "تصميم وعرض ماكيتات احترافية.",
    icon: "icons/maket.jpeg",
  },
  {
    title: "أدوات و ملابس مسرح",
    description: "ملابس واكسسوارات مسرحية بأنواعها.",
    icon: "icons/theater.jpeg",
  },
  {
    title: "عرائس بأنواعها",
    description: "عرائس يدوية، ماريونيت، خيال ظل والمزيد.",
    icon: "icons/puppet.jpeg",
  },
];

const ServicesPage = () => {
  return (
    <div className="container py-5">
      {/* Page Title */}
      <h1
        className="text-center text-danger fw-bold mb-5"
        style={{ fontSize: "2.5rem" }}
      >
        منتجاتنا
      </h1>

      {/* Responsive Cards Section */}
      <div className="row g-4">
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <CardComponent
              image={card.icon}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <div className="mt-5">
        <GalleryComponent />
      </div>
    </div>
  );
};

export default ServicesPage;
