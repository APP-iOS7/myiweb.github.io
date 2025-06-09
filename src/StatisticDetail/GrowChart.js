

import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function GrowChart() {

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
                <img src={process.env.PUBLIC_URL + "/images/statistics.png"} alt="statistics" className="scroll-image" />
                <div className="scroll-text">
                    <p className="little-title">성장 곡선</p>
                    <h2 className="large-title">키와 몸무게 변화,<br />한눈에 확인해요</h2>
                    <p className="description">
                    아기의 키와 몸무게 데이터를 기반으로<br />
                    성장곡선을 만들어 보여드려요.<br />
                    성장 추이를 그래프 형식으로 확인하고,<br />
                    건강 상태를 쉽게 체크할 수 있어요.
                    </p>
                </div>
                </div>
            </div>

        </div>
    );
}

export default GrowChart;
