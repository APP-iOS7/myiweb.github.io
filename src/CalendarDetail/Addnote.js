

import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function Addnote() {

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
                <img src={process.env.PUBLIC_URL + "/images/calendar2.png"} alt="calendar2" className="scroll-image" />
                <div className="scroll-text">
                    <p className="little-title">일지&일정 추가</p>
                    <h2 className="large-title">일정은 체계적으로<br />일지는 생생하게</h2>
                    <p className="description">
                    제목, 시간, 내용을 자유롭게 입력하여<br />
                    아이의 하루를 꼼꼼하게 남길 수 있어요.<br />
                    특히 일지에는 사진도 함께 첨부할 수 있어서<br />
                    아이의 성장 순간을 생생하게 기록하고<br />
                    추억으로 간직할 수 있습니다.
                    </p>
                </div>
                
                </div>
            </div>

        </div>
    );
}

export default Addnote;

