import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function ScheduleAlarm() {

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
                    <p className="little-title">일정 알람</p>
                    <h2 className="large-title">중요한 일정을<br />놓치지 않도록</h2>
                    <p className="description">
                    사용자가 직접 원하는 시간에 맞춰 알람을 설정할 수 있어요.<br />
                    알람은 정해진 시간에 정확히 울려, 소중한 일정들을<br />
                    빠짐없이 챙길 수 있도록 도와줍니다.<br />
                    약속, 예방접종, 일기 작성 등 어떤 일정이든<br />
                    알림으로 꼼꼼하게 관리해보세요.
                    </p>
                </div>
                <img src="/images/calendar.png" alt="calendar preview" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default ScheduleAlarm;

