import React, {Component, Fragment} from 'react'

class Mercado extends Component{
  state={
    atletas:[],
    loading: true
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
    const {atletas, loading} = this.state;
    return(
      <Fragment>
        Mercado
        {loading && <div>Loading...</div>}
        {!loading && atletas.map((atleta:any)=>
          <li>{atleta.apelido}</li>
        )}
      </Fragment>
    )
  }
}

  export {Mercado}