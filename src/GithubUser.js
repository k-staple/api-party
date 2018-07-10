import React, { Component } from 'react'


class GithubUser extends Component {
  fetchData = () => {
      const { pokemon } = this.props.match.params;
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(response => response.json())
        .then(data)
  }
  render() {
    return (
      <div className="GithubUser">
        Hi, {this.props.match.params.username}  
      </div>
    )
  }
}

export default GithubUser