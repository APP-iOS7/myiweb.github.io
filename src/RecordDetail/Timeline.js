
import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function Timeline() {

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
                <img src={process.env.PUBLIC_URL + "/images/record2.png"} alt="record2" className="scroll-image" />
                <div className="scroll-text">
                    <p className="little-title">타임라인</p>
                    <h2 className="large-title">아기의 하루를<br />순서대로 돌아보기</h2>
                    <p className="description">
                    수유, 배변, 수면 등 하루 동안의 기록을<br />
                    타임라인 형식으로 시간 순서대로 확인해보세요.<br />
                    각 기록에 아이콘도 함께 보여져서<br />
                    더욱 생생하게 하루를 되돌아볼 수 있어요.
                    </p>
                </div>
                </div>
            </div>

        </div>
    );
}

export default Timeline;
