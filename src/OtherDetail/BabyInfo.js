import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function BabyInfo() {

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
                    <p className="little-title">아이 정보</p>
                    <h2 className="large-title">육아 중인 아이들을<br />한 눈에 확인해요</h2>
                    <p className="description">
                    등록된 아이들의 이름, 생년월일, 성별 등<br />
                    주요 정보를 한눈에 볼 수 있어요.<br />
                    아이의 정보를 선택하면 상세 정보를 수정할 수 있고<br />
                    아이를 리스트로 보여줘, 여러 명의 아이도 쉽게 관리할 수 있어요.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/record.png"} alt="record" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default BabyInfo;