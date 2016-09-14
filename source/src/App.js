import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to ReactJS NJ!</h2>
                </div>

                <div className="container" id="mc_embed_signup">
                    <h3>About Us</h3>
                <p className="App-intro flow-text">
                    ReactJS NJ is a meetup group for javascript developers looking to learn more about ReactJS, the Facebook backed framework for making real time web and mobile apps with JavaScript. We will try to meet up once a month in either Newark, NJ or Jersey City for a hack night, and we welcome suggestions from anyone in the community. All skill levels are welcome and our goal is to network and help grow the NJ developer community together!
                </p>

                </div>

                <div className="container" id="mc_embed_signup">


                    <h3>Get Updates</h3>
                    <p className="App-intro flow-text">
                        This website is still a work in progress but in the mean time you can sign up for our newsletter!
                    </p>
                    <div className="row">
                        <form className="col s12" action="//github.us14.list-manage.com/subscribe/post?u=65dcb0ea5794679bfab70a5f1&amp;id=9785b34d91" method="post"  >
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" />
                                        <label for="email" data-error="That doesnt look like an email address." data-success="Looks good!">What is your email address?</label>
                                </div>

                                <input className="hide" type="text" name="b_65dcb0ea5794679bfab70a5f1_9785b34d91" value="" />
                                <input className="cyan waves-effect waves-light btn" type="submit" value="Join Us" name="subscribe" id="mc-embedded-subscribe" />
                            </div>
                        </form>
                    </div>


                </div>
            </div>
    );
    }
    }

    export default App;
