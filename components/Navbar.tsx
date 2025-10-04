"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Awards", href: "/awards" },
  { name: "Events", href: "/events" },
  { name: "Conferences", href: "/conferences" },
  { name: "Team", href: "/team" },
  { name: "Join Us", href: "/join" },
  { name: "SDG", href: "https://sdgs.un.org/goals" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logo = "https://res.cloudinary.com/anurag256k/image/upload/v1735503028/IEEE/ieee-logo_ufoyaw.png"; // Light theme logo

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg font-oswald">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Automatically updates based on theme */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image className="h-12 w-auto" src={logo} width={480} height={480} alt="IEEE Logo" priority />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-black font-bold hover:bg-gray-100 px-3 py-2 rounded-md text-sm transition-colors duration-300">
                {item.name}
              </Link>
            ))}

            {/* Dropdown Menu for Societies */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6 py-2 rounded-lg">
                  Societies
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-white border border-gray-200 shadow-2xl rounded-xl p-2">
                <DropdownMenuLabel className="text-gray-600 font-bold text-xs uppercase tracking-wider px-3 py-2">
                  OUR SOCIETIES
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-200 my-2" />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild className="group">
                    <Link href="/cs" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 cursor-pointer">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-800 font-medium group-hover:text-yellow-700">IEEE Computer Society</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="group">
                    <Link href="/wie" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 cursor-pointer">
                      <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-800 font-medium group-hover:text-purple-700">IEEE Women in Engineering</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="group">
                    <Link href="/ias" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 cursor-pointer">
                      <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-800 font-medium group-hover:text-green-700">IEEE Industry Applications Society</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="group">
                    <Link href="/tems" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer">
                      <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-800 font-medium group-hover:text-blue-700">IEEE Technology & Engineering Management Society</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="group">
                    <Link href="/cis" className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 transition-all duration-300 cursor-pointer">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-800 font-medium group-hover:text-cyan-700">IEEE Computational Intelligence Society</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {/* Mobile Societies Dropdown */}
            <div className="mb-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold py-3 rounded-lg">
                    Societies
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 bg-white border border-gray-200 shadow-2xl rounded-xl p-2" align="start">
                  <DropdownMenuLabel className="text-gray-600 font-bold text-xs uppercase tracking-wider px-3 py-2">
                    OUR SOCIETIES
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-200 my-2" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild className="group">
                      <Link href="/cs" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-800 font-medium group-hover:text-yellow-700">IEEE Computer Society</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="group">
                      <Link href="/wie" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-800 font-medium group-hover:text-purple-700">IEEE Women in Engineering</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="group">
                      <Link href="/ias" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-800 font-medium group-hover:text-green-700">IEEE Industry Applications Society</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="group">
                      <Link href="/tems" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-800 font-medium group-hover:text-blue-700">IEEE Technology & Engineering Management Society</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="group">
                      <Link href="/cis" onClick={closeMobileMenu} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 transition-all duration-300 cursor-pointer">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-800 font-medium group-hover:text-cyan-700">IEEE Computational Intelligence Society</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-gray-800 hover:bg-gray-100 hover:text-blue-600 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 border border-transparent hover:border-gray-200" 
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
