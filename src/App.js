import React, { Component } from 'react';
import Select from './components/select';
import Text from './components/text';
import Number from './components/numbers';
import axios from 'axios';
import './App.css';



class App extends Component {
    constructor() {
      super();

      this.state = {
        paras:4,
        html:true,
        text:''

      }


    }


 
componentWillMount() {
 this.getSampleText();


}



 
  getSampleText() {
    axios.get('http://hipsterjesus.com/api?paras=' + this.state.paras + '&html=' + this.state.html)
        .then((response) => {
            this.setState({
              text: response.data.text

            }, () => {
              console.log(this.state);

            });

        }).catch((err) => {
            console.log(err);


        });

  }


 //Functions 

 showHTML(boolData) {
  
  this.setState({
    html: boolData
  } , () => {
    this.getSampleText();

  });

 }

 putParas(num) {
    this.setState({
        paras: num

    }, () => {

        this.getSampleText();
    });

 }




 
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ReactJS with HipsterJesus API</h1>
        <div className="row">
        { /* Select Box for Enabling HTML or Not  */ }
          <div className="col-xs-2">  
            <Select value={this.state.html} onChange={this.showHTML.bind(this)} /> 
         </div>
         { /* Number Input Box to Choose the Number of Paras */ }
         <div className="col-xs-5">
                    <Number value={this.state.paras} onChange={this.putParas.bind(this)} />

         </div>

      </div>
        <Text value={this.state.text}/>

      </div>
    );
  }
}

export default App;
