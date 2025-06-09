import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function StartVoice() {

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
                    <p className="little-title">울음 분석 시작</p>
                    <h2 className="large-title">아기가 우는 이유<br />AI가 분석해드려요</h2>
                    <p className="description">
                    버튼 한 번으로 울음 분석이 시작돼요.<br />
                    AI가 아기의 울음소리를 듣고<br />
                    지금 어떤 상태인지 빠르게 파악하죠.<br />
                    궁금했던 아기의 마음, 지금 바로 확인해보세요!
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/voicerecord.png"} alt="voicerecord" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default StartVoice;
