import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function DailyStatistic() {

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
                    <p className="little-title">일별 차트</p>
                    <h2 className="large-title">하루하루의 기록,<br />차트로 확인하세요</h2>
                    <p className="description">
                    수유, 배변, 수면, 목욕, 간식 활동을<br />
                    날짜별로 한눈에 볼 수 있어요.<br />
                    하루 동안 어떤 일이 있었는지<br />
                    그래프로 직관적으로 확인할 수 있죠.
                    </p>
                </div>
                <img src="/images/statistics.png" alt="statistics preview" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default DailyStatistic;
