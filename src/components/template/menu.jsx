import React, {Component} from 'react';

export default class Menu extends Component {
    render() {
      return(
        <nav className="navbar navbar-inverse bg-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#/">
                        <i className="fa fa-calendar"></i> Home
                    </a>
                </div>

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#/todo">Tarefas</a></li>
                        <li><a href="#/about">About</a></li>
                        <li><a href="#/lol">404</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
    }
}
