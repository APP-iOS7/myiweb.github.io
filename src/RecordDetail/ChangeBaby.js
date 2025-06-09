import React from "react";
import { useInView } from "react-intersection-observer";
import "../ScrollView/ScrollView.css";

function ChangeBaby() {

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
                    <p className="little-title">아이 전환</p>
                    <h2 className="large-title">아이 이름을 누르면<br />간편하게 전환돼요</h2>
                    <p className="description">
                    아이 프로필 카드에서 이름을 누르면<br />
                    현재 육아 중인 아이들의 리스트가 펼쳐져요.<br />
                    원하는 아이를 선택하면 즉시 전환되어<br />
                    여러 아이를 쉽고 빠르게 관리할 수 있어요.
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/record.png"} alt="record" className="scroll-image" />
                </div>
            </div>

        </div>
    );
}

export default ChangeBaby;
