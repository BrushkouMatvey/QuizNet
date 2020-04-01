import * as React from 'react';

import { Button } from '../Button/Button';
import s from './QuizTopicsPage.module.css'
import { TopicItem } from './TopicItem/TopicItem';

class QuizTopicsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { topics: [] };

    }

    loadData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.apiUrl, true);
        xhr.onload = (() => {
            var data = JSON.parse(xhr.responseText);
            this.setState({ topics: data });
        }).bind(this);
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }

    render() {
        let topics = this.state.topics.map(t => <TopicItem text={t} />)
        return <div className={s.quizTopicsPage}>
            {
                topics
            }
        </div>
    }
}




// const QuizTopicsPage = () => {
//     return (
//         <div className={s.quizTopicsPage}>
//             <TopicItem text ="Наука"/>
//             <TopicItem text ="Литература"/>
//             <TopicItem text ="История"/>
//             <TopicItem text ="Личности"/>
//             <TopicItem text ="Флаги"/>
//             <TopicItem text ="Мультфильмы"/>
//             <TopicItem text ="Искусство"/>
//             <TopicItem text ="Спорт"/>
//             <TopicItem text ="Космос"/>
//             <TopicItem text ="Кино"/>
//             <TopicItem text ="Музыка"/>
//             <TopicItem text ="Искусство"/>
//         </div>
//     )
// }

export default QuizTopicsPage;