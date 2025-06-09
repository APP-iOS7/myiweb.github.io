import React from "react";
import { useInView } from "react-intersection-observer";
import "./ScrollView.css";
import { useNavigate } from "react-router-dom";


function Statistic() {
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
                <div className="scroll-content-2">
                <img src={process.env.PUBLIC_URL + "/images/statistics.png"} alt="statistics" className="scroll-image" />
                <div className="scroll-text">
                    <p className="little-title">기록 분석</p>
                    <h2 className="large-title">아기의 하루하루,<br />데이터로 확인해보세요</h2>
                    <p className="description">
                    최근 수유, 수면, 기저귀, 키·몸무게까지<br />
                    모든 기록을 한 곳에서 그래프와 함께 요약해드려요.<br />
                    변화 추이도, 평균 비교도 간편하게 볼 수 있어요.
                    </p>
                    <button
                        className="more-button"
                        onClick={() => navigate("/statistic")}
                    >더보기</button>
                </div>
                
                </div>
            </div>

        </div>
    );
}

export default Statistic;
