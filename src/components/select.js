import React , {Component} from 'react';
import {render}  from 'react-dom';



export class Select extends Component {
    constructor(props) {
        super();
        this.state = {
            data: props.value
        }

    }

    // Functions
    onChange(event) {
        this.setState({

            data: event.target.value

        }, () => {
            this.props.onChange(this.state.data);

        });

    } 




    render() {
        return(
         
              <select className="form-control" onChange={this.onChange.bind(this)}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>



        );


    }




}


export default Select;
