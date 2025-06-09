import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function BabyProfile() {

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
                    <p className="little-title">아기 프로필</p>
                    <h2 className="large-title">우리 아기의<br />소중한 정보를 한 눈에</h2>
                    <p className="description">
                    이름, 생년월일, 성별, 혈액형 등 기본 정보를 등록해두면<br />
                    홈화면에서 한 눈에 카드 형식으로 확인할 수 있어요.<br />
                    사진과 함께 아기의 정보를 확인해보세요.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/record.png"} alt="record" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default BabyProfile;
