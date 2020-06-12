// View Config

import React , {Component} from 'react';

import {BrowserRouter,Route ,Switch , Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './header';
import Landing from  './landing';
// Dummy components 
const Dashboard = () => <h2>Dashboard</h2>
const Survey = () => <h2>Survey New</h2>



class App extends Component  {

    componentDidMount() {
      this.props.fetchUser();
    } 

    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact  path='/surveys' component={Dashboard}/> 
                        <Route path='/surveys/new' component={Survey}/>
                        <Redirect to='/'/>
                    </Switch>          
                </div>
            </BrowserRouter>
        )
    }     
}


export default connect(null,actions)(App);