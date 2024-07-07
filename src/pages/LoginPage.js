export const LoginPage=()=>{
    return(
        <form className="loginform">
            <h1>
                Enter
            </h1>
            <div>
                <input type="text" placeholder="Login" name="login"/>
            </div>
            <div>
                <input type="password" placeholder="Password" name="password"/>
            </div>
            <div>
                <button>
                    Entered
                </button>
            </div>
        </form>
    )
}