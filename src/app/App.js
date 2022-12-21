import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      ci:'',
      nombre: '',
      gradoacademico: '',
      _id: '',
      estudiantes: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addTask(e) {
    e.preventDefault();
    if(this.state._id) {
      fetch(`/api/estudiantes/${this.state._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          ci: this.state.ci,
          nombre: this.state.nombre,
          gradoacemico: this.state.gradoacademico,
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({html: 'Estudiante Updated'});
          this.setState({_id: '', ci: '', nombre: '', gradoacademico: ''});
          this.fetchTasks();
        });
    } else {
      fetch('/api/estudiantes', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.M.toast({html: 'Estudiante Saved'});
          this.setState({ ci: '', nombre: '', gradoacademico: ''});
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }

  }

  deleteTask(id) {
    if(confirm('Are you sure you want to delete it?')) {
      fetch(`/api/estudiantes/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          M.toast({html: 'Estudiante deleted'});
          this.fetchTasks();
        });
    }
  }

  editTask(id) {
    fetch(`/api/estudiantes/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          ci: data.ci,
          nombre: data.nombre,
          gradoacademico: data.gradoacademico,
          _id: data._id
        });
      });
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    fetch('/api/estudiantes')
      .then(res => res.json())
      .then(data => {
        this.setState({estudiantes: data});
        console.log(this.state.estudiantes);
      });
  }

  render() {
    return (
      <div>
        {/* NAVIGATION */}
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">MERN Stack</a>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.addTask}>
                    <div className="row">
                    <div className="input-field col s12">
                        <input name="ci" onChange={this.handleChange} value={this.state.ci} type="text" placeholder="CI" autoFocus/>
                      </div>
                      <div className="input-field col s12">
                        <input name="nombre" onChange={this.handleChange} value={this.state.nombre} type="text" placeholder="Nombre" autoFocus/>
                      </div>
                      <div className="input-field col s12">
                        <textarea name="gradoacademico" onChange={this.handleChange} value={this.state.gradoacademico} cols="30" rows="10" placeholder="GradoAcademico" className="materialize-textarea"></textarea>
                      </div>
                    </div>
                   

                    <button type="submit" className="btn light-blue darken-4">
                      Send 
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
              <table>
                <thead>
                  <tr>
                    <th>Ci</th>
                    <th>Nombre</th>
                    <th>Grado Academico</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                    this.state.estudiantes.map(estudiante => {
                      return (
                        <tr key={estudiante._id}>
                          <td>{estudiante.ci}</td>
                          <td>{estudiante.nombre}</td>
                          <td>{estudiante.gradoacademico}</td>
                          <td>
                            <button onClick={() => this.deleteTask(estudiante._id)} className="btn light-blue darken-4">
                              <i className="material-icons">delete</i> 
                            </button>
                            <button onClick={() => this.editTask(estudiante._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                              <i className="material-icons">edit</i>
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
