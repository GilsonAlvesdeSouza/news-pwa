import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./containers/home/Home";

function App() {
    return (
        <main>
            <section>
                <Router>
                    <Switch>
                        <Route>
                            <div>
                                <Home/>
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </section>
        </main>
    );
}

export default App;
