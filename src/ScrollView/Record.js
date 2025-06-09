import React from "react";
import { useInView } from "react-intersection-observer";
import "./ScrollView.css";
import { useNavigate } from "react-router-dom";


function Record() {
    const navigate = useNavigate();

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
                    <p className="little-title">육아 기록</p>
                    <h2 className="large-title">수유부터 수면까지.<br />육아 기록을 한 곳에서</h2>
                    <p className="description">
                    아기의 하루를 꼼꼼하게 기록하세요.<br />
                    배변, 목욕, 간식, 키/몸무게까지<br />
                    놓치기 쉬운 순간들을 하나의 화면에 간편하게 모아볼 수 있어요.
                    </p>
                    <button
                        className="more-button"
                        onClick={() => navigate("/record")}
                    >더보기</button>
                </div>
                <img src="/images/record.png" alt="record preview" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default Record;
