import React from "react";
import { useInView } from "react-intersection-observer";
import "./ScrollView.css";
import { useNavigate } from "react-router-dom";


function VioceRecord() {
    const navigate = useNavigate();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div
            ref={ref}
            className={`scroll-view-container ${inView ? "fade-up" : "fade-init"}`}
        >
            <div className="scroll-section">
                <div className="scroll-content">
                <div className="scroll-text">
                    <p className="little-title">울음 분석</p>
                    <h2 className="large-title">이유 모를 울음도,<br />AI가 함께 들어줄게요</h2>
                    <p className="description">
                    아기의 울음 소리를 AI가 분석해<br />
                    배고픔, 졸림, 불편함 같은 주요 원인을 예측해드려요.<br />
                    이젠 막막하지 않도록, 울음에도 이유가 있다는 걸 알려줄 수 있어요.
                    </p>
                    <button
                        className="more-button"
                        onClick={() => navigate("/voicerecord")}
                    >더보기</button>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/voicerecord1.png"} alt="voicerecord" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default VioceRecord;
