import React, {Component, Fragment} from 'react'

class Mercado extends Component{
    constructor(props: {} | Readonly<{}>){
      super(props);
  
      this.state = {
        data: null
      };
    }
  
    componentDidMount() {
      fetch("/api/cartola/atletas/mercado")
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }
  
    render(){
      return(
        <Fragment>
          Mercado
        </Fragment>
      )
    }
  }

  export {Mercado}