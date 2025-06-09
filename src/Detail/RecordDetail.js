import React from "react";
import "./DetailCSS.css";
import "../Header.css";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";
import { useNavigate, useLocation } from "react-router-dom";
import BabyProfile from '../RecordDetail/BabyProfile';
import Timeline from '../RecordDetail/Timeline';
import ClickButton from '../RecordDetail/ClickButton';
import EditModal from '../RecordDetail/EditModal';
import ChangeBaby from '../RecordDetail/ChangeBaby';

function RecordDetail() {
    const location = useLocation();
    const currentPath = location.pathname;

    const navigate = useNavigate();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    console.log("inView:", inView);

    return (
        <div className="detail-container">
            <header className={"detail-header"}>
            <div className="logo" onClick={() => navigate("/")}>
                <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" className="logo-image" />
                    <span>My i</span>
                </div>
                <div className="header-buttons">
                <button className={`header-button ${currentPath === "/record" ? "active" : ""}`} onClick={() => navigate("/record")}>육아 기록</button>
                    <button className={`header-button ${currentPath === "/calendar" ? "active" : ""}`} onClick={() => navigate("/calendar")}>육아 수첩</button>
                    <button className={`header-button ${currentPath === "/voicerecord" ? "active" : ""}`} onClick={() => navigate("/voicerecord")}>울음 분석</button>
                    <button className={`header-button ${currentPath === "/statistic" ? "active" : ""}`} onClick={() => navigate("/statistic")}>기록 분석</button>
                    <button className={`header-button ${currentPath === "/other" ? "active" : ""}`} onClick={() => navigate("/other")}>더보기</button>
                </div>
            </header>
            
            <div
                ref={ref}
                className={`detail-view-container ${inView ? "fade-up" : "fade-init"}`}
            >

                <div className="detail-grid">
                    <div>
                        <BabyProfile />
                    </div>
                    <div>
                        <Timeline />
                    </div>
                    <div>
                        <ClickButton />
                    </div>
                    <div>
                        <EditModal />
                    </div>
                    <div>
                        <ChangeBaby />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecordDetail;
