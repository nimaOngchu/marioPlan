import React, { Component } from 'react'

export class CreateProject extends Component {
    statre = {
        title :'',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

    }
  render() {
    return (
        <div className="container">
            <form className="white" onSubmit = {this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Create a New Project</h5>
                <div className="input-field">
                    <label htmlFor="title"> Title</label>
                    <input type="text" id="title" onChange = {this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content"> Content</label>
                    <textarea className="materialize-textarea"  id="content" onChange = {this.handleChange}></textarea>
                </div>
                <button className="btn pink lighten-1 z-depth-0">Create</button>
            </form>
      </div>
    )
  }
}

export default CreateProject
