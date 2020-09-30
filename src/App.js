import React,{Component} from 'react';
import CardList from './CardList';
//import {robots} from './robot';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll'

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(reponse=>reponse.json())
        .then(users=>this.setState({robots:users}));
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
    }
    render(){
        const filteredRobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0){
            return<h1>Loading</h1>
        }else{
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                        {/* {console.log('Robots',{robots})}//to check difference between them
                        {console.log('FilteredRobots',{filteredRobots})} */}
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;