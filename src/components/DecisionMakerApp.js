import React from 'react';
import Header from './Header';
import AddOptions from './AddOptions';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

export default class DecisionMakerApp extends React.Component{

    state = {
        options:[1,2,3],
        isItemSelected:undefined
    }

    handleDeleteAction = ()=>{
        this.setState(()=>({options:[]}));
    }

    handlePickAction = ()=>{
        this.setState(()=>({isItemSelected:(this.state.options[Math.floor(Math.random()*this.state.options.length)])}));
        //alert((this.state.options[Math.floor(Math.random()*this.state.options.length)]));
    }

    handleOkButtonAction = ()=>{
        this.setState(()=>({isItemSelected:undefined}));
    }

    handleAddOption = (option)=>{
        if(!option){
            return "no item has been entered";
        } else if(this.state.options.indexOf(option)>-1){
            return "item already existed";
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
    }

    render(){
        const title = "DecisionMaker";
        const subtitle = "Hey computer, please make a decision for me!"

        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action buttonEnabled = {this.state.options.length>0} handlePickAction={this.handlePickAction}/>
            <Options options={this.state.options} handleDeleteAction={this.handleDeleteAction}/>
            <AddOptions handleAddOption = {this.handleAddOption}/>
            <OptionModal selectedItem = {this.state.isItemSelected} handleOkButtonAction ={this.handleOkButtonAction}/>
            </div>
        );
    }
}