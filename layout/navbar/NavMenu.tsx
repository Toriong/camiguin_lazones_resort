/* eslint-disable @next/next/no-html-link-for-pages */


function NavMenu() {

    return (
        <ul className="navbar-nav mt-4 navMenuList bottom-0 end-0 pb-2 pe-4 d-flex flex-column flex-md-row">
            <li className="nav-item active">
                <button className="button noBtnStyles mt-3 me-lg-3 underlineHover">
                    <a className="text-decoration-none text-black" href="/">
                        Home
                    </a>
                </button>
            </li>
            <li className="nav-item">
                <button className="button noBtnStyles mt-3 me-lg-3 underlineHover">About</button>
            </li>
            <li className="nav-item">
                <button className="button noBtnStyles mt-3 me-lg-3 underlineHover">
                    <a className="text-decoration-none text-black" href="/rooms">
                        Rooms
                    </a>
                </button>
            </li>
            <li className="nav-item">
                <button className="button noBtnStyles mt-3 me-lg-3 underlineHover">
                    <a className="text-decoration-none text-black" href="/reservations/reserve">
                        Reservations
                    </a>
                </button>
            </li>
            <li className="nav-item">
                <button className="button noBtnStyles mt-3 me-lg-3 underlineHover">Gallery</button>
            </li>
            <li className="nav-item">
                <button className="button noBtnStyles mt-3 me-lg-3 underlineHover">Contact</button>
            </li>
        </ul>
    )
}

export default NavMenu;