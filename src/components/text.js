import React , {Component} from 'react';


export class Text extends Component {
    constructor(props) {
        super();

        this.state = {
            data:props.value


        }

    }
    
    
    render() {
        return(
        
                <div className="well">
                    {this.props.value}


                </div>
        




        );




    }

   
}


export default Text;