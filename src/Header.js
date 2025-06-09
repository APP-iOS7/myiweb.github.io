import React, { useEffect, useState } from "react";
import "./Header.css";


function Header() {

    const [isFixed, setIsFixed] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 300);
    
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const isAtTop = window.scrollY < 100;
            const headerOffset = isAtTop ? 200 : 50;
            const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className="main-container">
            <header className={`main-header ${isFixed ? "fixed" : ""}`}>
                <div className="logo" onClick={() => window.location.href = "/"}>
                    <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" className="logo-image" />
                    <span>My i</span>
                </div>
                <div className="header-buttons">
                    <button className="header-button" onClick={() => scrollToSection("record-section")}>육아 기록</button>
                    <button className="header-button" onClick={() => scrollToSection("calendar-section")}>육아 수첩</button>
                    <button className="header-button" onClick={() => scrollToSection("voicerecord-section")}>울음 분석</button>
                    <button className="header-button" onClick={() => scrollToSection("statistic-section")}>기록 분석</button>
                    <button className="header-button" onClick={() => scrollToSection("other-section")}>더보기</button>
                </div>
            </header>
            <h1 className={`main-title ${showContent ? "fade-up" : "fade-init"}`}>
            감정부터 성장까지<br />
            성장 기록을 더 쉽고 따뜻하게
            </h1>
    
            <div className={`url-section ${showContent ? "fade-up" : "fade-init"}`}>
                <a
                    href="https://apps.apple.com/kr/app/%EB%A7%88%EC%9D%B4-%EC%95%84%EC%9D%B4/id6746396797"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                        className="store-button"
                    />
                </a>
                <a
                    href="https://github.com/APP-iOS7/MyiApp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={process.env.PUBLIC_URL + "/images/github.png"} alt="github" className="store-button" />
                </a>
            </div>
            <div className={`scroll-arrow ${showContent ? "fade-up" : "fade-init"}`}>
                <span className="arrow-down">^</span>
            </div>
        </div>
    );
}



export default Header;

