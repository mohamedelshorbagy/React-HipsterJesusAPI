import React, {Component} from 'react';



export class Number extends Component {
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

        } , () => {
            this.props.onChange(this.state.data);

        });

    }

  
    render() {
        return(
          
                <input className="form-control" type="number" value={this.props.value} onChange={this.onChange.bind(this)} />

          


        );


    }






}


export default Number;