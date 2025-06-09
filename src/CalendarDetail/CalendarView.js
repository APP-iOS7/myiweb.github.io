import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function CalendarView() {

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
                    <p className="little-title">캘린더</p>
                    <h2 className="large-title">한 달간의 일정과<br />기록을 한 눈에</h2>
                    <p className="description">
                    매일의 육아 일지를 한눈에 확인할 수 있는 월간 캘린더입니다.<br />
                    기록이 있는 날짜는 자동으로 표시되며,<br />
                    각 날짜를 클릭하면 해당 일자의 일정과 일지를 볼 수 있어요.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/calendar.png"} alt="calendar" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default CalendarView;
