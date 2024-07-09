import {SideBar} from "./SideBar";
import {Posts} from "./Posts";


export const MainBlock=({setIsLoggedIn})=>{
    return(
        <>
            <SideBar setIsLoggedIn={setIsLoggedIn}/>
            <Posts/>
        </>
    )
}