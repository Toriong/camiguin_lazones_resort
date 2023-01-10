import Image from "next/image"
import Button from 'react-bootstrap/Button';
import NavMenu from "./NavMenu";
import { GoThreeBars, GoX } from 'react-icons/go'
import { useState } from "react";


function NavBar() {
    const [isNavMenuOn, setIsNavMenuOn] = useState(false);

    function toggleNavMenu() {
        setIsNavMenuOn(isNavMenuOn => !isNavMenuOn);
    }

    return (
        <div className="unfixed-wrapper">
            <nav className="navbar navbarStyles navbar-expand basis navbar-light bg-light position-fixed w-100 pt-5 pb-5 border-bottom">
                <div className="collapse navbar-collapse h-100 position-absolute w-100" id="navbarNav">
                    <div className="position-relative w-100 h-100 pt-1 d-flex flex-row-reverse flex-sm-row justify-content-sm-between">
                        <section className="logoSec ms-5 ps-lg-2 d-none d-md-flex justify-content-center align-items-center h-100 pb-2">
                            <Image src="/imgs/logo.png" alt="camiguin_lazones_resort_logo" width={100} height={100} layout="fixed" className="rounded-circle border" />
                        </section>
                        <section className="d-flex flex-column flex-sm-column logoContainerNav justify-content-center align-items-center d-md-none ms-md-3 pt-sm-0 pb-sm-0 pb-5 pt-1">
                            <section className="titleNav justify-content-center align-items-center">
                                <h1 className="text-dark display-6 text-center titleNavHeader d-none d-sm-flex d-md-none text-nowrap">
                                    <i>
                                        Camiguin Lazones Resort
                                    </i>
                                </h1>
                                <section className="d-flex d-sm-none d-md-none flex-column">
                                    <h1 className="text-dark display-6 text-center text-nowrap titleNavHeaderSmall">
                                        <i>Camiguin Lazones</i>
                                    </h1>
                                    <h1 className="text-dark display-6 text-center text-nowrap titleNavHeaderSmall">
                                        <i>
                                            Resort
                                        </i>
                                    </h1>
                                </section>
                            </section>
                            <Image src="/imgs/logo.png" alt="camiguin_lazones_resort_logo" width={100} height={100} layout="fixed" className="rounded-circle border" />
                        </section>
                        <section className="d-none d-md-flex">
                            <NavMenu />
                        </section>
                        <section className="d-none justify-content-center align-items-center d-md-none">
                            <h1 className="text-dark display-6 text-center">
                                <i>
                                    Camiguin Lazones Resort
                                </i>
                            </h1>
                        </section>
                        <section className="navMenuBtnContainer">
                            <section>
                                <Button
                                    className="bg-secondary border-0 d-flex justify-content-center align-items-center"
                                    onClick={toggleNavMenu}
                                >
                                    <GoThreeBars />
                                </Button>
                                <section className="position-relative">
                                    {isNavMenuOn &&
                                        (
                                            <div className="position-fixed bottom-0 bg-light navSideMenu h-100 border-start">
                                                <Button
                                                    className="bg-secondary border-0 d-flex justify-content-center align-items-center position-absolute ms-2"
                                                    onClick={toggleNavMenu}
                                                >
                                                    <GoX />
                                                </Button>
                                                <div className="position-relative">
                                                    <NavMenu />
                                                </div>
                                            </div>
                                        )
                                    }
                                </section>
                            </section>
                        </section>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar