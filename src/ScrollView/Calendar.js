import React from "react";
import { useInView } from "react-intersection-observer";
import "./ScrollView.css";
import { useNavigate } from "react-router-dom";


function Calendar() {
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
                    <img src="/images/calendar.png" alt="record preview" className="scroll-image" />
                    <div className="scroll-text">
                        <p className="little-title">육아 수첩</p>
                        <h2 className="large-title">일정과 일지를 한 눈에<br />내 아기만의 기록 캘린더</h2>
                        <p className="description">
                        예방접종, 병원 예약 등 중요한 일정은 캘린더에 등록하고<br />
                        하루 중 기억하고 싶은 순간은 일지로 따뜻하게 남겨보세요.<br />
                        일정에는 알림 설정도 가능해 놓치지 않고 챙길 수 있어요.
                        </p>
                        <button
                            className="more-button"
                            onClick={() => navigate("/calendar")}
                        >더보기</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Calendar;
