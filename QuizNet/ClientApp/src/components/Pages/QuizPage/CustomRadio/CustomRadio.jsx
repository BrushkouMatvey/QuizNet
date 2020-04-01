import React from 'react';
import s from "./CustomRadio.module.css";
import { NavLink } from "react-router-dom";


// export default class RadioButton extends React.Component = (props) => {
//     return (

//         <NavLink to={props.link}><button className={s.button}> {props.text}</button></NavLink>

//     );
// };




class RadioBtn extends React.Component{

    constructor(props) {
        super(props);
    }

    handleClick(){
        this.props.handler(this.props.index);
    }

    render() {
        return (
            <div className="radio-btn-group" onClick={this.handleClick.bind(this)}>
                <div className={this.props.isChecked ? "radiobtn checked" : "radiobtn unchecked"} data-value={this.props.value}></div>
                <label>{this.props.text}</label>
            </div>
        );
    }
}

class RadioGrp extends React.Component{

    constructor() {
        super();
        this.state = {
          selectedIndex: null,
          selectedValue: null,
          options: ["option 0","option 1","option 2","option 3"]
        };
    }

    toggleRadioBtn(index){
        this.setState({
          selectedIndex: index,
          selectedValue: this.state.options[index],
          options: this.state.options
        });
    }

    render() {

        const { options } = this.state;

        const allOptions = options.map((option, i) => {
            return <RadioBtn key={i} isChecked={(this.state.selectedIndex == i)} text={option} value={option} index={i} handler={this.toggleRadioBtn.bind(this)} />
        });

        return (
            <div>{allOptions}</div>
        );
    }
}

export default RadioGrp;