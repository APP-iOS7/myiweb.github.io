//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Record from './ScrollView/Record';
import Calendar from './ScrollView/Calendar';
import VioceRecord from './ScrollView/VioceRecord';
import Statistic from './ScrollView/Statistic';
import Other from './ScrollView/Other';

function MainPage() {
    return (
        <div>
            <Header />
        <section id="record-section">
            <div className="scroll">
            <Record />
            </div>
        </section>
            <section id="calendar-section">
            <div className="scroll">
            <Calendar />
        </div>
        </section>
        <section id="voicerecord-section">
            <div className="scroll">
            <VioceRecord />
            </div>
        </section>
        <section id="statistic-section">
            <div className="scroll">
            <Statistic />
            </div>
        </section>
        <section id="other-section">
            <div className="scroll">
            <Other />
            </div>
        </section>
        </div>
    )
}

export default MainPage;
