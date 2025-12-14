import styles from '../../../styles/home.module.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
export default function Home() {
    const [sideBar, setSideBar] = useState(true);
    function sidebarClick() {
        setSideBar(!(sideBar))
    }
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.showSpaceBetcol}>
                    <div>My header</div>
                    <div className={styles.mobile}>
                        <IoMenu />
                    </div>
                    <div className={styles.desktop}>
                        <div className={styles.showSpaceAroundcol}>
                            <div>Home</div>
                            <div>Contact</div>
                            <div>Services</div>
                            <div>Logout</div>
                        </div>
                    </div>

                </div>
            </header>
            <aside className={styles.sidebar}>
                <div className={styles.desktop} style={{ width: true ? "auto" : "50px" }}>
                    <div className={styles.showFlexRow}>
                        {sideBar ? <div className={styles.showSpaceBetcol}>
                            <div>Sidebar</div>
                            <div ><span style={{ cursor: "pointer" }} onClick={() => { sidebarClick() }}> <FaChevronLeft /></span></div>
                        </div> : <div ><span style={{ cursor: "pointer" }} onClick={() => { sidebarClick() }}><FaChevronRight /></span></div>}
                    </div>
                </div>
                <div className={styles.mobile}>
                    <div className={styles.showFlexRow}>
                        <div className={styles.showSpaceBetcol}>
                            <div>Sidebar</div>
                            <div><IoMenu /></div>
                        </div>
                    </div>
                </div>
            </aside >
            <article className={styles.content} >
                <h1>2 column, header and footer</h1>
                <p>This example uses line-based positioning, to position the header and footer, stretching them across the grid.</p>
                <p>This example uses line-based positioning, to position the header and footer, stretching them across the grid.</p>
                <p>This example uses line-based positioning, to position the header and footer, stretching them across the grid.</p>
            </article>
            <footer className={styles.footer}>My footer</footer>
        </div >
    )
}
