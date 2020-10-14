import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Post from './component/post'
import Profile from './component/profile'

class App extends Component{
    constructor(props){
        super(props)
    }
    
    // render
    render()
    {
        return(
            <div>
                <h1>Home page</h1>
            </div>
        )
    }
}

ReactDOM.render(<BrowserRouter>
                    <div>
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>                        
                            </button>
                            <a class="navbar-brand" href="#">Router React</a>
                            </div>
                            <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                                <li><Link to='/'> HOME </Link></li>
                                <li><Link to='/post'> Post Pe click </Link></li>
                                <li><Link to='/profile'> Profile pe </Link></li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                    </div>
                <div>
                    <Route path='/' component={App} exact></Route>
                    <Route path='/post' component={Post}></Route>
                    <Route path='/profile' component={Profile}></Route>
                </div>
                </BrowserRouter>,document.getElementById('root'))