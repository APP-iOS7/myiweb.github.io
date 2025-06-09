
import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function NoteDetail() {

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
                <img src={process.env.PUBLIC_URL + "/images/calendar.png"} alt="calendar" className="scroll-image" />
                <div className="scroll-text">
                    <p className="little-title">일지 상세</p>
                    <h2 className="large-title">사진과 함께<br />기록했던 하루를 돌아봐요</h2>
                    <p className="description">
                    하루 동안의 소중한 순간들을<br />
                    여러 장의 사진과 함께 생생하게 남길 수 있어요.<br />
                    글도 자유롭게, 길게 작성할 수 있어서<br />
                    육아의 감정과 이야기를 자세히 기록할 수 있죠.<br />
                    사진과 글이 함께 어우러진 일지로<br />
                    하루하루를 특별하게 기억해보세요.
                    </p>
                </div>
                
                </div>
            </div>

        </div>
    );
}

export default NoteDetail;

