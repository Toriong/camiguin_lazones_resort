import Image from "next/image"
import Button from 'react-bootstrap/Button';


function NavBar() {
    return (
        <div className="unfixed-wrapper">
            <nav className="navbar navbarStyles navbar-expand-lg navbar-light bg-light position-fixed w-100 pt-5 pb-5 border-bottom">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}

{/* <ul className="navbar-nav position-absolute bottom-0 end-0 pb-2 pe-4">
                            <li className="nav-item active">
                                <button className="button noBtnStyles me-3 underlineHover">Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="button noBtnStyles me-3 underlineHover">About</button>
                            </li>
                            <li className="nav-item">
                                <button className="button noBtnStyles me-3 underlineHover">Rooms</button>
                            </li>
                            <li className="nav-item">
                                <button className="button noBtnStyles me-3 underlineHover">Reservations</button>
                            </li>
                            <li className="nav-item">
                                <button className="button noBtnStyles me-3 underlineHover">Gallery</button>
                            </li>
                            <li className="nav-item">
                                <button className="button noBtnStyles me-3 underlineHover">Contact</button>
                            </li>
                        </ul> */}
                <div className="collapse navbar-collapse h-100 position-absolute w-100" id="navbarNav">
                    <div className="position-relative w-100 h-100 pt-1 d-flex justify-content-between">
                        <section className="logoSec w-25 d-flex justify-content-center align-items-center h-100 pb-2">
                            <Image src="/imgs/logo.png" alt="camiguin_lazones_resort_logo" width={100} height={100} layout="fixed" className="rounded-circle border" />
                        </section>
                        {/* <section className="w-25 border">
                            <div className="bg-secondary position-relative rounded sideBarNavBtn w-25">
                                <div className="line bg-light w-75 position-absolute rounded"/>
                                <div className="line bg-light w-75 position-absolute rounded mt-2"/>
                            </div>
                        </section> */}
                        <ul className="navbar-nav position-absolute bottom-0 end-0 pb-2 pe-4">
                            <li className="nav-item active">
                                <button className="button noBtnStyles me-3 underlineHover">Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="button noBtnStyles me-3 underlineHover">About</button>
                            </li>
                            <li className="nav-item">
                                <button className="button noBtnStyles me-3 underlineHover">Rooms</button>
                            </li>
                            <li className="nav-item">
                                <button className="button noBtnStyles me-3 underlineHover">Reservations</button>
                            </li>
                            <li className="nav-item">
                                <button className="button noBtnStyles me-3 underlineHover">Gallery</button>
                            </li>
                            <li className="nav-item">
                                <button className="button noBtnStyles me-3 underlineHover">Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar