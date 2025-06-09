

import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function WeeklyStatistic() {

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
                    <p className="little-title">주별 차트</p>
                    <h2 className="large-title">한 주의 기록을<br />일정표처럼 확인하세요</h2>
                    <p className="description">
                    주 단위로 정리된 활동 기록을 통해<br />
                    아이의 생활 패턴을 한눈에 파악할 수 있어요.<br />
                    일정표처럼 구성되어 있어 더 쉽게 볼 수 있답니다.
                    </p>
                </div>
                </div>
            </div>

        </div>
    );
}

export default WeeklyStatistic;
