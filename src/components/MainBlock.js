import {SideBar} from "./SideBar";
import {Posts} from "./Posts";
import './MainBlock.css';


export const MainBlock=({setIsLoggedIn})=>{
    return(
        <>
            <SideBar setIsLoggedIn={setIsLoggedIn}/>
            <main className="main">
                <Posts/>
            </main>
        </>
    )
}