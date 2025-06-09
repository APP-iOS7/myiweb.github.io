import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function CompleteVoice() {

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
                    <p className="little-title">울음 분석 완료</p>
                    <h2 className="large-title">결과 도착!<br />지금 아기는...</h2>
                    <p className="description">
                    AI가 울음소리를 분석한 결과예요.<br />
                    배고픔, 졸림, 불편함 등의 가능성을<br />
                    퍼센티지로 한눈에 확인할 수 있어요.<br />
                    아기의 상태를 이해하는 데 큰 도움이 되죠!
                    </p>
                </div>
                <img src="/images/voicerecord.png" alt="voicerecord preview" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default CompleteVoice;
