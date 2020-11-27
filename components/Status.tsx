import React, {Component, Fragment} from 'react'

class Status extends Component{
    constructor(props: {} | Readonly<{}>){
      super(props);
  
      this.state = {
        status: null
      };
    }
  
    componentDidMount() {
      fetch("/api/cartola/status")
        .then(response => response.json())
        .then(data => this.setState({ status : data}));
    }
  
    render(){
      return(
        <Fragment>
            <ul>
                
            </ul>
        </Fragment>
      )
    }
  }

  export default Status