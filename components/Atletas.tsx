import React, {Component, Fragment} from 'react'

interface Atletas {
  id: string,
  title: string,
  completed: boolean
}

class Mercado extends Component{
  state={
    atletas:[],
    loading: true,
    error: false
  }

/*   componentDidMount() {
    fetch("/api/cartola/atletas/mercado")
      .then(response => response.json())
      .then(response => this.setState({atletas: response.atletas}));
  } */
  componentDidMount() {
    fetch("/api/cartola/atletas/mercado")
      .then(response => response.json())
      .then(response => this.setState({
        atletas: response.atletas,
        loading:false
      }));
  }
  render(){
    const {atletas, loading, error} = this.state;
    return(
      <Fragment>
        {loading && <div>Loading...</div>}
        {!loading && atletas.map((atleta:any)=>
          <li>{atleta.apelido}</li>
        )}
      </Fragment>
    )
  }
}

  export {Mercado}