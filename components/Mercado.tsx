import React, { Component, Fragment} from 'react'

let Data = {}

class Status extends Component{
    constructor(props: {} | Readonly<{}>){
      super(props);
  
      this.state = {
        status: {}
      };
    }
  
    componentDidMount() {
      fetch("/api/cartola/mercado/status")
        .then(response => response.json())
        .then(data => this.setState({ status : data}));
    }
  
    render(){
      const {status} = this.state;
      const {children} = this.props;
      return(
        <Fragment>
          {status.status_mercado==1 && <div>{children} aberto</div>}
          {status.status_mercado==2 && <div>{children} fechado</div>}
        </Fragment>
      )
    }
  }

export {Status, Data}