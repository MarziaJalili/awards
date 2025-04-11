import React from "react";
import { FaDiscord, FaTwitter, FaGithub, FaTwitch } from "react-icons/fa";

const links = [
  {
    href: "https://discord.com",
    icon: <FaDiscord />,
  },
  {
    href: "https://x.com",
    icon: <FaTwitter />,
  },
  {
    href: "https://github.com",
    icon: <FaGithub />,
  },
  {
    href: "https://twitch.com",
    icon: <FaTwitch />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-Violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left md:text-lg">
          &copy; Nova 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Social Media Icon"
              className="text-black hover:text-white transition-colors duration-400 ease-in-out md:scale-150 md:mr-2"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm hover:text-white transition-colors duration-500 ease-in-out md:text-right md:text-lg"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
