
import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function ClickButton() {

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
                    <p className="little-title">빠른 기록 버튼</p>
                    <h2 className="large-title">자주 쓰는 기록을<br />한 번의 클릭으로</h2>
                    <p className="description">
                    수유량, 배변 등 자주 입력하는 정보를<br />
                    최근 기록값으로 자동 입력해 타임라인에 바로 저장해줘요.<br />
                    복잡한 입력 없이 버튼 하나로 빠르고 편리하게<br />
                    아기의 하루를 놓치지 않고 기록할 수 있어요.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/record3.png"} alt="record3" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default ClickButton;
