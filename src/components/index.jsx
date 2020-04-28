import React, { Component } from 'react'
import {robots} from '../data';



export class App extends Component {

    state = {
        robots:[],
        searchField:''
    }

    onSearchChange=(event)=>{
    
        this.setState({
            searchField:event.target.value
        })
    }
 
  render() {

    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(user => this.setState({
 robots:user
  }))

    const filterRobots = this.state.robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })
    return (
 
      <div className='tc'>
          <h1 style={{tc:'center', color:'white'}}>Search Robots</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList robots={filterRobots}/>
        
      </div>
    )
  }
}



export default App