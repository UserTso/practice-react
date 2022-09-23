import React from 'react';
import {FormInput} from './Form/FormInput';
// import Header from './Header/Header';
// import PostList from './PostList/PostList';
// import { data } from 'data/data';


export class App extends React.Component {

state = {

  name: '',


}

onChangeInput = (event) => {
console.log(event.target.value)
this.setState({name: event.target.value})
}

  render() {
     return (
    <div>
 <FormInput onChange={this.onChangeInput} name={this.state.name} />
    </div>
  );
  }
 
};
