import './InvestWithVepayPage.css';
import Invest from "./Invest.jsx";
import investWithVepayBgImage from "../assets/invest-with-vepay-hero-bg.png";
import bussinessFundingSustainabilityBg from "../assets/bussiness-funding-sustainability-bg.png"
import howWorkImg5 from "../assets/how-work-img-5.svg"
import howWorkImg6 from "../assets/how-work-img-6.svg"
import howWorkImg7 from "../assets/how-work-img-7.svg"
import howWorkImg3 from "../assets/how-work-img-3.png"
import eligibilitySectionLogo1 from "../assets/eligibility-section-logo-1.svg"
import eligibilitySectionLogo2 from "../assets/eligibility-section-logo-2.svg"
import cardImg4 from "../assets/why-choose-card-logo-7.svg";
import readyToMakeImpactSectionBg from "../assets/ready-to-make-impact-section-bg.png";



import HowWork from "./HowWork.jsx";
import FaqSection from "./FaqSection.jsx";
import WhyChooseAdvanced from "./WhyChooseAdvanced.jsx";
import InvestmentPlan from "./InvestmentPlan.jsx";
import InvestmentCalculator from "./InvestmentCalculator.jsx";
import WhyEcommerceSection from "./WhyEcommerceSection.jsx";
import ReadyToMakeImpactSection from "./ReadyToMakeImpactSection.jsx";


const InvestWithVepayPage = () => {
    const steps = [
        {
            image: howWorkImg5,
            altText: "Choose Your Investment",
            heading: "Choose Your Investment",
            description: "",
            customClass: "custom-img-1" // Unique class for this image

        },
        {
            image: howWorkImg6,
            altText: "Initial Investment ",
            heading: "Initial Investment ",
            description: "",
            customClass: "custom-img-2" // Unique class for this image

        },
        {
            image: howWorkImg7,
            altText: "Receive Quarterly Distributions",
            heading: "Receive Quarterly Distributions",
            description: "",
            customClass: "custom-img-3" // Unique class for this image

        },
        {
            image: howWorkImg3,
            altText: "Watch Your Investment Grow or Withdraw Your Balance",
            heading: "Watch Your Investment Grow or Withdraw Your Balance",
            description: ""

        }
    ];

    const cardDataInvestWithVepayPage = [
        {
            imgSrc: cardImg4,
            title: "Support Small Businesses",
            description: "Your investment directly empowers eCommerce entrepreneurs at the grassroots level, helping them grow their business and sustain their families."
        },
        {
            imgSrc: cardImg4,
            title: "Consistent Returns",
            description: "Enjoy an average expected ROI of 15% per annum. Your capital helps businesses succeed while generating competitive returns."
        },
        {
            imgSrc: cardImg4,
            title: "Ethical & Faith-Based Model",
            description: "We offer a Shariah-compliant investment model with no involvement in interest, usury, or harmful business practices."
        },
        {
            imgSrc: cardImg4,
            title: "Sustainable & Transparent",
            description: "Enjoy an average expected ROI of 15% per annum. Your capital helps businesses succeed while generating competitive returns."
        }
    ];

    const cardsEligibilitySection = [
        {
            subheading: "Sellers",
            items: [
                {
                    image: eligibilitySectionLogo1,
                    altText: "Average Monthly Sales",
                    title: "Average Monthly Sales",
                    description: "$10,000"
                },
                {
                    image: eligibilitySectionLogo2,
                    altText: "Minimum Marketplace History",
                    title: "Minimum Marketplace History",
                    description: "12 Months"
                }
            ]
        },
        {
            subheading: "Vendors",
            items: [
                {
                    image: eligibilitySectionLogo1,
                    altText: "Average Monthly Sales of",
                    title: "Average Monthly Sales of",
                    description: "$20,000"
                },
                {
                    image: eligibilitySectionLogo2,
                    altText: "Minimum Marketplace History",
                    title: "Minimum Marketplace History",
                    description: "12 Months"
                }
            ]
        }
    ];
    const faqs = [
        { question: "Q. What payment methods do you accept?", answer: "We accept credit cards, PayPal, and bank transfers." },
        { question: "Q. How long does shipping take?", answer: "Shipping takes 3-5 business days, depending on your location." },
        { question: "Q. Can I return a product?", answer: "Yes, you can return products within 30 days of purchase." },
        { question: "Q. Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide." }
    ];

    return (
        <>
            <div className="invest-with-vepay-invest-section-hero">
                <Invest
                    subheading="Invest with VePay"
                    heading="Empower Growth. Invest Ethically."
                    description="Invest in the future of eCommerce and support small businesses that drive the global economy – with ethical returns you can trust. No interest,
                                no hidden fees – just smart financing tailored for you."
                    buttonText="Invest Now!"
                    imageSrc={investWithVepayBgImage}
                    bgSizeMd="contain"
                    bgSizeLg="79rem"

                />
            </div>

            <WhyChooseAdvanced
                title="Impact and Ethical Investment"
                description="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly."
                cardData={cardDataInvestWithVepayPage}
                buttonText="Invest Ethically Today!"
                buttonLink="#"
            />

            <HowWork
                title="How InstaPay Work?"
                subtext="At VePay, we’ve made it fast and effortless to get funded. In just three easy steps, connect your eCommerce business and access the working capital you need – instantly."
                steps={steps}
                buttonPrimaryText=""
                buttonSecondaryText=""
            />
            <div className="investment-plan-section">
            <InvestmentPlan></InvestmentPlan>
            </div>
            <InvestmentCalculator></InvestmentCalculator>
            <WhyEcommerceSection
                heading="Why eCommerce"
                backgroundImage={bussinessFundingSustainabilityBg}
            ></WhyEcommerceSection>
            <ReadyToMakeImpactSection
                heading="Ready to Make an Impact?"
                description="Join the VePay investor community and empower small businesses while enjoying strong, ethical returns. Whether you’re investing for faith-based reasons or to diversify your portfolio, VePay is here to help you grow your wealth responsibly."
                buttonText="Invest Now!"
                backgroundImage={readyToMakeImpactSectionBg}
            ></ReadyToMakeImpactSection>
            <FaqSection faqs={faqs} />

        </>

    )
        ;
};

export default InvestWithVepayPage;
