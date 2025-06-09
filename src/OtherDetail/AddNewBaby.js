

import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function AddNewBaby() {

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
                <img src={process.env.PUBLIC_URL + "/images/record.png"} alt="record" className="scroll-image" />
                <div className="scroll-text">
                    <p className="little-title">아이 등록</p>
                    <h2 className="large-title">새로운 아이를<br />등록하고 함께 기록해요</h2>
                    <p className="description">
                    직접 아이 정보를 입력하여 새로 등록하거나,<br />
                    공유 코드를 통해 가족이나 보호자와 함께<br />
                    아이를 공동 관리할 수 있어요.<br />
                    이름, 생일, 성별 등 간단한 입력으로<br />
                    새로운 육아 기록을 바로 시작해보세요.
                    </p>
                </div>
                </div>
            </div>

        </div>
    );
}

export default AddNewBaby;
