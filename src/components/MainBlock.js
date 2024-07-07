import avatar from '../images/avatar.jpg';


export const MainBlock=()=>{
    return(
        <main>
            <aside className="nav">
                <section className="sidebarTop">
                    <div className="user">
                        <div className="avatar">
                            <img src={avatar} alt="avatar" />
                            <h3>Gelya</h3>
                        </div>
                    </div>
                </section>
                <div>

                </div>
            </aside>
        </main>
    )
}