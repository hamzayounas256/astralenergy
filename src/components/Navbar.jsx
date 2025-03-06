import { Link, NavLink } from "react-router";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "About Us", path: "/about" },
		{ name: "Consulting Services", path: "/consultingservices" },
		{ name: "Research & Insight", path: "/researchinsight" },
		{ name: "Contact Us", path: "/contact" },
	];

	return (
		<nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
			<div className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto">
				<Link to="/" className="flex items-center">
					<img src={logo} className="w-16 h-auto" alt="Logo" />
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-8 text-sm text-gray-700">
					{navItems.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) => {
								return `relative group py-2 flex flex-col items-center hover:text-blue-700 transition-colors duration-200 ${
									isActive ? "text-blue-700 font-semibold" : ""
								}`;
							}}
						>
							{({ isActive }) => (
								<>
									<span>{item.name.toUpperCase()}</span>
									<span
										className={`w-2/3 h-0.5 bg-blue-700 mt-1 transition-all duration-200 ${
											isActive
												? "opacity-100"
												: "opacity-0 group-hover:opacity-100"
										}`}
									/>
								</>
							)}
						</NavLink>
					))}
				</ul>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2 rounded-md hover:bg-gray-100"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label={menuOpen ? "Close menu" : "Open menu"}
				>
					{menuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<ul className="flex flex-col md:hidden bg-white shadow-md py-2 absolute w-full left-0 top-full z-50">
					{navItems.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) =>
								`py-3 px-6 text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors ${
									isActive
										? "text-blue-700 font-semibold border-l-4 border-blue-700"
										: ""
								}`
							}
							onClick={() => setMenuOpen(false)}
						>
							{item.name.toUpperCase()}
						</NavLink>
					))}
				</ul>
			)}
		</nav>
	);
}
