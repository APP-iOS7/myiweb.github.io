import React from "react";
import { useInView } from "react-intersection-observer";
import "./ScrollView.css";
import { useNavigate } from "react-router-dom";


function Other() {
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
                    <p className="little-title">더보기</p>
                    <h2 className="large-title">사용자 정보부터<br />아기 정보까지</h2>
                    <p className="description">
                    아이 정보를 자세하게 확인하고, 수정할 수 있어요.<br />
                    사용자 정보부터, 개인정보나 업데이트 확인 등<br />
                    마이아이를 보다 편리하게 사용해보세요.
                    </p>
                    <button
                        className="more-button"
                        onClick={() => navigate("/other")}
                    >더보기</button>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/other.png"} alt="other" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default Other;
