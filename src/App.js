import './App.css';
import {LoginPage} from "./pages/LoginPage";
import {MainBlock} from "./components/MainBlock";
import {User} from "./components/User";
import {useState} from "react";


function App(){
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    return (
        <div className="App">
            {
                isLoggedIn ? (
                    <MainBlock setIsLoggedIn={setIsLoggedIn}/>
                ):(
                    <LoginPage setIsLoggedIn={setIsLoggedIn}/>
                )
            }
        </div>
    );
}

export default App;
















