import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./containers/home/Home";
import Post from "./containers/post/Post";

function App() {
    return (
        <main>
            <section>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/:subject/:id" component={Post}/>
                            <Route path="/" component={Home}/>
                        </Switch>
                    </div>
                </Router>
            </section>
        </main>
    );
}

export default App;
