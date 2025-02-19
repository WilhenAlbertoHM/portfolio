import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav id="navbar" className="fixed top-0 w-full flex justify-evenly align-center bg-[var(--black)] text-[var(--white)] p-2 z-40">
            <a href="/" className="text-4xl md:text-3xl font-bold text-[var(--orange)]">
                W A H M
            </a>

            <ul className={
                    `${isOpen ? "flex items-center" : "hidden"} 
                    md:flex flex-col md:flex-row absolute md:relative top-full md:top-0 left-0 right-0 md:space-x-12
                    text-2xl text-[var(--lightgray)] p-4 md:p-0`
                }
            >
                <li className="py-2 md:py-0">
                    <Link className="hover:underline hover:underline-offset-12 hover:text-[var(--orange)] cursor-pointer" to="intro" smooth={true} duration={600}>Home</Link>
                </li>
                <li className="py-2 md:py-0">
                    <Link className="hover:underline hover:underline-offset-12 hover:text-[var(--orange)] cursor-pointer" to="about" offset={-100} smooth={true} duration={600}>About</Link>
                </li>
                <li className="py-2 md:py-0">
                    <Link className="hover:underline hover:underline-offset-12 hover:text-[var(--orange)] cursor-pointer" to="work" offset={-100} smooth={true} duration={600}>Work</Link>
                </li>
                <li className="py-2 md:py-0">
                    <Link className="hover:underline hover:underline-offset-12 hover:text-[var(--orange)] cursor-pointer" to="project" offset={-100} smooth={true} duration={600}>Projects</Link>
                </li>
                <li className="py-2 md:py-0">
                    <Link className="hover:underline hover:underline-offset-12 hover:text-[var(--orange)] cursor-pointer" to="gallery" offset={-100} smooth={true} duration={600}>Gallery</Link>
                </li>
            </ul>

            <div className="flex space-x-8">
                <a href="https://github.com/WilhenAlbertoHM">
                    <img src="Social/github.svg" alt="GitHub Icon" className="md:w-8 w-10" />
                </a>
                <a href="https://www.linkedin.com/in/wilhenalbertohm/">
                    <img src="Social/linkedin.svg" alt="LinkedIn Icon" className="md:w-8 w-10" />
                </a>
            </div>

            {/* Burger menu button */}
            <button onClick={ toggleMenu } className="md:hidden">
                <svg className="w-6 h-6 transform transition-transform duration-500 ease-in-out" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24">
                    <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d={ isOpen 
                                ? "M6 18L18 6M6 6l12 12" 
                                : "M4 6h16M4 12h16M4 18h16"
                            } 
                    />
                </svg>
            </button>
        </nav>
    );
};
