import MainPage from "./MainPage";
import RecordDetail from './Detail/RecordDetail';
import CalendarDetail from './Detail/CalendarDetail';
import VoiceRecordDetail from './Detail/VoiceRecordDetail';
import StatisticsDetail from './Detail/StatisticsDetail';
import OtherDetail from './Detail/OtherDetail';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/record" element={<RecordDetail />} />
        <Route path="/calendar" element={<CalendarDetail />} />
        <Route path="/voicerecord" element={<VoiceRecordDetail />} />
        <Route path="/statistic" element={<StatisticsDetail />} />
        <Route path="/other" element={<OtherDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
