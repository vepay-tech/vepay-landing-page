import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="fade-in">
                Unlock 70% of Your <span>eCommerce </span> Sales Instantly. <br></br>No Interest, <br></br>No Waiting

                </h1>
                <p className="fade-in">Fast, Transparent, Ethical Solutions for Your Business Success</p>
                <button className="hero-button fade-in-up" onClick={() => window.open("https://dev.vepay.io/onboarding", "_blank")}>Start Growing Your Business Today</button>
            </div>

            {/* Image (Hidden on Mobile) */}
            <div className="hero-image">
                {/*<img src={heroImage} alt="Business Growth" />*/}
            </div>
        </section>

    );
};

export default Hero;
