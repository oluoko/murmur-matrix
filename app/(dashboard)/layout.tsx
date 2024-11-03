"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, HomeIcon } from "@heroicons/react/24/outline";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const links = [{ href: "/", label: "Home", icon: HomeIcon }];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // always close sidebar on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-[calc(100vh-50px)] w-screen relative flex mt-[50px] pt-[5px]">
      <aside
        className={`${
          isSidebarOpen ? "w-[27%] md:w-[170px]" : "w-[10%] md:w-[5%]"
        } transition-all duration-500 h-full border-r border-slate-400/30 overflow-hidden`}
      >
        <ul>
          {links.map((link) => (
            <li
              key={link.href}
              className="px-2 md:px-4 py-3 md:py-6 text-sm md:text-xl"
            >
              <Link
                href={link.href}
                className="flex justify-between items-center "
              >
                <link.icon className="w-4 md:w-8 h-4 md:h-8" />

                {isSidebarOpen && (
                  <span className="pr-3 md:pr-6"> {link.label} </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex-1 flex flex-col h-full">
        <header className="p-2 md:p-4 h-[60px] border-b border-slate-400/30 flex items-center justify-between">
          <div
            className="h-full flex items-center justify-end"
            onClick={toggleSidebar}
          >
            <Bars3Icon className="w-6 md:w-8 h-6 md:h-8 cursor-pointer" />
          </div>
          <div className="px-0 md:px-6 h-full flex items-center justify-end"></div>
        </header>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 md:p-4 h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
