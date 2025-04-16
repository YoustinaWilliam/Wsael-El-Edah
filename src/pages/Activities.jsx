import React from "react";
import MyCard from "../components/MyCard";
import activity1 from "../assets/activity2.jpeg";
import activity2 from "../assets/activity1.jpeg";

function Activities() {
    return (
        <section id="activities" className="bg-light text-center">
            <div className="container">
                <h2 className="text-danger display-4 fw-bold mb-5">النشاطات</h2>
                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mx-auto">
                        <MyCard 
                            img={activity2} 
                            name="منتجات الخدمه" 
                            description="عرض المزيد" 
                            link="/Wsael-El-Edah/services"
                        />
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mx-auto">
                        <MyCard 
                            img={activity1} 
                            name="خدمه الأطفال" 
                            description="عرض المزيد" 
                            link="/Wsael-El-Edah/children"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Activities;
