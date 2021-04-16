import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/products" component={ Products } />
                <Route exact path="/contact" component={ Contact } />
            </Switch>
        </div>
    )
}

export default App;