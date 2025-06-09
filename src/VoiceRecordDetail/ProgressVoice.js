

import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function ProgressVoice() {

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
                <div className="scroll-content-2">
                <img src={process.env.PUBLIC_URL + "/images/voicerecord2.png"} alt="voicerecord2" className="scroll-image" />
                <div className="scroll-text">
                    <p className="little-title">울음 분석 중</p>
                    <h2 className="large-title">AI가 울음소리를<br />분석하고 있어요</h2>
                    <p className="description">
                    울음소리를 실시간으로 분석 중이에요.<br />
                    프로그레스 바를 통해 진행 상황을 확인하고<br />
                    분석이 끝나면 바로 결과를 받아볼 수 있어요.<br />
                    조금만 기다려주세요
                    </p>
                </div>
                </div>
            </div>

        </div>
    );
}

export default ProgressVoice;
