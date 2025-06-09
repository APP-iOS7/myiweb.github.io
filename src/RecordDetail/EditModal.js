

import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function EditModal() {

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
                <img src="/images/record.png" alt="record preview" className="scroll-image" />
                <div className="scroll-text">
                    <p className="little-title">기록 수정 기능</p>
                    <h2 className="large-title">기록을 눌러<br />자세히 보고 수정해요</h2>
                    <p className="description">
                    타임라인에 저장된 기록을 클릭하면<br />
                    상세 내용을 확인하고 자유롭게 수정할 수 있어요.<br />
                    수유량을 조정하거나, 수면 시간을 변경하는 등<br />
                    기록의 정확도를 높이는 데 유용해요.
                    </p>
                </div>
                </div>
            </div>

        </div>
    );
}

export default EditModal;
