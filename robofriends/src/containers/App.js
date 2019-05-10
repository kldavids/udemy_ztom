import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state ={
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({robots: users})
      });
  }
  
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
   // console.log(filteredRobots);
  }

  render() {
    const {robots, searchfield} = this.state;   // add this to destruture 3 spots can have this.state removed
    const filteredRobots = robots.filter(robot => {  // removed this.state
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()); // removed this.state
    }) 

    if(robots.length === 0) {  //removed this.state
      return <h1>Loading</h1>
    } else {
      return ( 
        <div className='tc'>
          <h1 className='f1' >RoboFriends</h1>
          <SearchBox searchChange = {this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
 
export default App;
