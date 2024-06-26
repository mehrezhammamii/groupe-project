import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import Home from './components/home';
import Course from './components/course';
import AboutUs from './components/aboutus';
import Contact from './components/contact';
import Login from './components/login';
import SignUp from './components/signup';
import OneCourse from './components/oneCourse'; 
import QuizPage from './components/quiz';
import Profile from './components/profile'; // Import Profile component
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Login_Signin from './components/Login_Signin/Login_Signin';


const App = () => {
    const [currentView, setCurrentView] = useState('home');
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showLogin, setShowLogin] = useState(false);

    const handleNavigation = (view, courseId = null) => {
        setCurrentView(view);
        setSelectedCourse(courseId); 
    };

    const renderView = () => {
        switch (currentView) {
            case 'home':
                return <Home />;
            case 'course':
                return <Course handleNavigation={handleNavigation} />;
            case 'about-us':
                return <AboutUs />;
            case 'contact':
                return <Contact />;
            case 'login':
                return <Login />;
            case 'sign-up':
                return <SignUp />;
            case 'oneCourse':
                return <OneCourse courseId={selectedCourse} handleNavigation={handleNavigation} 
                setShowLogin={setShowLogin}/>;
            case 'quizPage':
                return <QuizPage courseId={selectedCourse} handleNavigation={handleNavigation} />;
            case 'profile': 
                return <Profile handleNavigation={handleNavigation} />;
                             default:
                return <Home />;
        }
    };

    return (
      <div>
        {showLogin ? <Login_Signin setShowLogin={setShowLogin} handleNavigation={handleNavigation}/> : <></>}
        <div className="app">
            <Navbar handleNavigation={handleNavigation} setShowLogin={setShowLogin} />
            <div className="content">
                {renderView()}
            </div>
            <Footer />
        </div>
      </div>
    );
};

export default App;
