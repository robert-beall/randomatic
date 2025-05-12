import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import getConfig from 'next/config';

const Navbar = () => {
    const { publicRuntimeConfig } = getConfig();
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white">
            <div className="font-bold text-xl">Randomatic</div>
            
            <div className="flex gap-6 items-center">
                <span className="text-sm text-gray-600">v{ publicRuntimeConfig?.version }</span>
                
                <Link target="#" href="https://github.com/robert-beall/randomatic">
                <FaGithub className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;