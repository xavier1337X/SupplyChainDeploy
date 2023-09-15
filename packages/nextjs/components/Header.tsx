import React, { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaucetButton } from "~~/components/scaffold-eth";
import RainbowKitCustomConnectButton from "~~/components/scaffold-eth/RainbowKitCustomConnectButton";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { ArrowUpOnSquareIcon, BanknotesIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import SmartChain from "../public/assets/SmartChain.png";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      passHref
      className={`${
        isActive ? "bg-secondary shadow-md" : ""
      } hover:bg-secondary hover:shadow-md focus:bg-secondary py-1.5 px-3 text-sm rounded-full gap-2`}
    >
      {children}
    </Link>
  );
};

/**
 * Site header
 */
export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );
  useEffect(() => {
    if (counter === 1) {
      console.log("counter", counter);
      var addScript = document.createElement("script");
      addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
      setCounter(2);
    }
    setCounter(1);
  }, [counter]);

  const googleTranslateElementInit = () => {
    // if (counter === 1) {
    console.log("googleTranslateElementInit");
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "hi,en,bn,id,fr,mr",
        layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
      },
      "google_translate_element",
    );
    // setCounter(2);
    // }
  };

  const navLinks = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/products">
          <BanknotesIcon className="h-4 w-4" />
          Product
        </NavLink>
      </li>
      <li>
        <NavLink href="/addUser">
          <UserPlusIcon className="h-4 w-4" />
          Add User
        </NavLink>
      </li>
      <li>
        <NavLink href="/addProduct">
          <ArrowUpOnSquareIcon className="h-4 w-4" />
          Add Product
        </NavLink>
      </li>
      <li>
        {/* <div> */}
        {/* <ArrowUpOnSquareIcon className="h-2 w-2" /> */}
        {/* <p>Select Language</p> */}
        <div className="mtx-3 focus:outline-none text-center " id="google_translate_element"></div>
        {/* </div> */}
      </li>
    </>
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <button
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </button>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              {navLinks}
            </ul>
          )}
        </div>
        <div className="hidden lg:flex items-center gap-2 ml-4 mr-6">
          <Link href="/" passHref className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="logo.svg" />
          </Link>
          <div className="flex flex-col">
            <span className="font-bold text-md leading-tight">Smart-chain</span>
          </div>
        </div>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
}
