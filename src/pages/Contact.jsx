import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
    return (
        <section id="contact" className="py-5" style={{ background: "#fff" }}>
            <div className="container">
                <h2 className="text-center mb-5 text-danger fw-bold" style={{ fontSize: "2.5rem" }}>
                    للتواصل معنا
                </h2>
                <div className="row justify-content-center align-items-stretch g-4">
                    <div className="col-12 col-md-6">
                        <div className="bg-light rounded-4 shadow-sm p-4 h-100">
                            <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.5rem" }}>الأرقام الهاتفية:</h4>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><strong>+20 12 26111639</strong></li>
                                <li><strong>+20 12 11222130</strong></li>
                            </ul>
                            <hr className="my-3" />
                            <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.5rem" }}>واتس أب:</h4>
                            <p>
                                يمكنك التواصل معنا عبر{" "}
                                <a href="https://wa.me/201226111639" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm px-3">
                                    <i className="fab fa-whatsapp me-2"></i> واتس أب
                                </a>
                            </p>
                            <hr className="my-3" />
                            <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.5rem" }}>صفحتنا على الفيسبوك:</h4>
                            <p>
                                يمكنك التواصل معنا عبر صفحتنا على الفيسبوك:{" "}
                                <a href="https://www.facebook.com/profile.php?id=100009405296410" target="_blank" rel="noopener noreferrer" className="text-primary fw-bold">
                                    وسائل الإيضاح مارجرس
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="bg-light rounded-4 shadow-sm p-4 h-100 d-flex flex-column justify-content-between">
                            <div>
                                <h4 className="text-dark fw-bold mb-3" style={{ fontSize: "1.5rem" }}>قناتنا على اليوتيوب:</h4>
                                <p>
                                    تابعنا على{" "}
                                    <a href="https://youtu.be/shYQ08yE7H4?si=2duleZ1hACr7udMY" target="_blank" rel="noopener noreferrer" className="text-danger fw-bold">
                                        الكبادوكي لوسائل الايضاح بالفيوم
                                    </a>
                                </p>
                            </div>
                            <div>
                                <iframe
                                    width="100%"
                                    height="250"
                                    src="https://www.youtube.com/embed/shYQ08yE7H4"
                                    title="فيديو من قناة اليوتيوب"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded-3 mt-3"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
