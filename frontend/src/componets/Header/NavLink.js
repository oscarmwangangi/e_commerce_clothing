import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom"; // Import NavLink from React Router

function NavLink({ to, label, disabled = false }) {
    const baseClass = "font-medium transition-colors";
    const enabledClass = "text-[#FFFFFF] hover:text-pink-600 font-sans";
    const disabledClass = "text-gray-300 cursor-not-allowed";

    return (
        <li>
            <RouterNavLink
                to={to} // Use "to" instead of "href"
                className={`${baseClass} ${disabled ? disabledClass : enabledClass}`}
                aria-disabled={disabled}
            >
                {label}
            </RouterNavLink>
        </li>
    );
}

export default NavLink;
