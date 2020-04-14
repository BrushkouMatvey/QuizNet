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
        const colors = [
            { color1: '#BFC43A', color2: '#DB81A2', color3:'#B02727' },
            { color1: '#363463', color2: '#733B4F', color3: '#A1335B' },
            { color1: '#1D276B', color2: '#1C7672', color3: '#1AA67F' },
            { color1: '#EC642A', color2: '#1AA67F' },
            { color1: '#1A2A6C', color2: '#B21F1F', color3: '#FDBB2D' },

            { color1: '#912435', color2: '#B05042', color3: '#C06C47', color4:'#D4A481' },
            { color1: '#49A0F1', color2: '#78BFDB', color3: '#9AD6D4', color4:'#ADDEC7' },
            { color1: '#980CA2', color2: '#B0C200' },
            { color1: '#E751A1', color2: '#F0549A', color3: '#E57890', color4: '#DC9385', color5:'#D9B67B' },
            { color1: '#96C93D', color2: '#00B09B' },
            { color1: '#A2AB58', color2: '#636363',},
            { color1: '#AC3ACE', color2: '#222D96'}
        ]

        let topics = this.state.topics.map((t, index) => {
            console.log("The current iteration is: " + index);
            return <TopicItem text={t} link={`${this.props.apiUrl}/${t}`} color1={colors[index].color1} color2={colors[index].color2} />;
        } )
        return <div className={s.quizTopicsPage}>
            {topics}
        </div>
    }
}


export default QuizTopicsPage;