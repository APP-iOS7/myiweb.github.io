import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function SharePDF() {

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
                    <p className="little-title">PDF 공유하기</p>
                    <h2 className="large-title">기록을 PDF로 저장하고<br />공유해보세요</h2>
                    <p className="description">
                    모든 통계 데이터를 PDF로 변환해<br />
                    가족, 의료진과 손쉽게 공유할 수 있어요.<br />
                    인쇄하거나 저장해두면 유용한 자료가 되죠.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/statistics5.png"} alt="statistics5" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default SharePDF;
