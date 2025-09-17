import { FiHome, FiInfo, FiAward, FiMessageSquare, FiHeart, FiStar } from 'react-icons/fi';

const navLinks = [
    { href: "#home", label: "Home", icon: FiHome },
    { href: "#about", label: "About", icon: FiInfo },
    { href: "#achievements", label: "Achievements", icon: FiAward },
    { href: "#updates", label: "Updates", icon: FiMessageSquare },
    { href: "#sponsors", label: "Sponsors", icon: FiHeart },
];

const NavLink = ({ href, label, icon: Icon }) => (
    <a href={href} className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-slate-800/50 hover:bg-cyan-500/50 transition-colors">
        <Icon className="h-6 w-6 text-slate-300 group-hover:text-white" />
        <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 text-slate-200 text-sm rounded-md whitespace-nowrap opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all origin-left">
            {label}
        </div>
    </a>
);

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 h-screen w-20 flex flex-col items-center gap-y-8 py-8 bg-black/20 backdrop-blur-md border-r border-white/10 z-[100]">
            <a href="#home" aria-label="Back to top">
                <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
            </a>
            
            <div className="flex flex-col gap-y-5">
                {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} />
                ))}
            </div>
        </nav>
    );
};

export default Navbar;