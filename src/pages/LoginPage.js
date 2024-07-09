import './LoginPage.css';


export const LoginPage=({setIsLoggedIn})=>{
    const logIn=()=> setIsLoggedIn(true)
    return(
        <form onSubmit={logIn} className="loginForm">
            <h1>
                Enter
            </h1>
            <div>
                <input type="text" placeholder="Login" name="login" required/>
            </div>
            <div>
                <input type="password" placeholder="Password" name="password" required/>
            </div>
            <div>
                <button type='submit'>Entered</button>
            </div>
        </form>
    )
}