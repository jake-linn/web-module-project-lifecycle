import React from 'react';
import axios from 'axios';

import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";
import Followers from "./components/Followers"


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      username: 'jake-linn',
      user: [],
      followers: []
    };
  };
componentDidMount(){
  this.searchFunc(this.state.username)
};

searchFunc = search => {

axios.get(`https://api.github.com/users/${search}`)
.then(res => this.setState({
  ...this.state,
  username: search,
  user: res.data
})
)
.catch(err => console.log(err))

axios.get(`https://api.github.com/users/${search}/followers`)
.then(res => this.setState({
  ...this.state,
  followers: res.data
})
)
.catch(err => console.log(err))
};

render(){
return(

<div classname = 'App'>

<Header/>
<Search searchFunc = {this.searchFunc} />
<User user = {this.state.user}/>
<Followers followers = {this.state.followers} />
</div>


);



};

};

export default App;
