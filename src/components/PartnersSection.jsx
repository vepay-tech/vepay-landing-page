import { useEffect, useRef } from "react";
import "./PartnersSection.css";
import partner1 from "../assets/vepay-Amazonpartner.png";
import partner2 from "../assets/vepay-Walmart.png";
import partner3 from "../assets/vepay-Shopify.png";
import partner4 from "../assets/vepay-Wayfair.png";
import partner5 from "../assets/vepay-pingpong.png";
import partner6 from "../assets/vepay-usmanico.png";
import partner7 from "../assets/vepay-dhl.png";
import partner8 from "../assets/vepay-inpay.png";
import partner9 from "../assets/vepay-greensfin.jpg";

const PartnersSection = () => {
    const trackRef = useRef(null);
    const animationRef = useRef();
    const speed = 0.5; // adjust for faster/slower

    const logos = [
        { src: partner1, alt: "Amazon", name: "" },
        { src: partner2, alt: "Walmart", name: "" },
        { src: partner3, alt: "Shopify", name: "" },
        { src: partner4, alt: "Wayfair", name: "" },
        { src: partner5, alt: "Pingpong", name: "" },
        { src: partner6, alt: "Usmanico", name: "" },
        { src: partner7, alt: "DHL", name: "" },
        { src: partner8, alt: "Inpay", name: "" },
        { src: partner9, alt: "Greensfin", name: "" }
    ];

    useEffect(() => {
        const track = trackRef.current;
        let position = 0;

        const animate = () => {
            position -= speed;
            if (Math.abs(position) >= track.scrollWidth / 2) {
                position = 0;
            }
            track.style.transform = `translateX(${position}px)`;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    return (
        <section className="partners-section">
            <h2 className="partners-heading">Our Valued Partners</h2>
            <p className="partners-subtext">
                We're proud to collaborate with these leading organizations
            </p>

            <div className="carousel-wrapper">
                <div className="carousel-track" ref={trackRef}>
                    {[...logos, ...logos].map((partner, index) => (
                        <div className="partner-item" key={index}>
                            <img src={partner.src} alt={partner.alt} />
                            <p>{partner.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
