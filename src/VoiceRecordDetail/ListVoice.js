

import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function ListVoice() {

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
                <img src={process.env.PUBLIC_URL + "/images/voicerecord.png"} alt="voicerecord" className="scroll-image" />
                <div className="scroll-text">
                    <p className="little-title">울음 분석 기록</p>
                    <h2 className="large-title">지금까지의 분석 결과를<br />모두 모아봤어요</h2>
                    <p className="description">
                    지금까지 진행한 모든 울음 분석 결과를<br />
                    리스트로 확인할 수 있어요.<br />
                    아기의 울음 패턴을 살펴보고<br />
                    상태 변화를 추적해보세요.
                    </p>
                </div>
                </div>
            </div>

        </div>
    );
}

export default ListVoice;
