import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function ChartDetail() {

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
                    <p className="little-title">차트 상세</p>
                    <h2 className="large-title">카테고리별로<br />더 깊이 있게!</h2>
                    <p className="description">
                    수유, 배변, 수면, 목욕, 간식<br />
                    각 활동에 대해 자세한 분석을 제공해요.<br />
                    시간, 횟수, 용량 등 유용한 정보가<br />
                    카테고리별로 정리되어 있어요.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/statistics.png"} alt="statistics" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default ChartDetail;
