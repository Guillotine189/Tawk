import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import Authentication from "./pages/authentication";
import Authentication2 from "./pages/authentication2";
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from "./pages/videoMeet";
import HomeComponent from './pages/home';
import GuestComponent from "./pages/guest"
import History from "./pages/history"

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>

            <Route path='/home' element={<HomeComponent />} />
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/login" element={<Authentication></Authentication>}></Route>
            <Route path="/register" element={<Authentication2></Authentication2>}></Route>
            <Route path="/:url" element={<VideoMeetComponent></VideoMeetComponent>}></Route>
            <Route path="/guest" element={<GuestComponent></GuestComponent>}></Route>
            <Route path="/history" element={<History></History>}></Route>
            

          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;
