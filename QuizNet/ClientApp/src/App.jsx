import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import StartPage from './components/Pages/StartPage/StartPage';
import GameWithFriendsPage from './components/Pages/GameWithFriendsPage/GameWithFriendsPage';
import QuizPage from './components/Pages/QuizPage/QuizPage.jsx';
import QuizTopicsPage from './components/Pages/QuizTopicsPage/QuizTopicsPage';
import s from './custom.module.css'
import loginAndRegPage from './components/Pages/LoginAndRegisterPage/loginAndRegPage';
import ResultQuizPage from './components/Pages/ResultQuizPage/ResultQuizPage';

const App = () => {
    return (
        <div className = {s.app}>
            <Layout>
                <Route exact path='/' component={StartPage  } />
                <Route exact path='/login' component={loginAndRegPage}/>
                <Route path='/withFriends' component={GameWithFriendsPage} />
                <Route exact path='/api/questions/:name' component={QuizPage} />
                <Route exact path='/api/questions/:name/resultPage' component={ResultQuizPage} />
                <Route exact path='/api/questions' render={() => <QuizTopicsPage apiUrl="/api/questions" />} />     
            </Layout>
        </div>
    );
};

export default App;
