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

// Define the googleTranslateElementInit function first
const googleTranslateElementInit = () => {
  console.log("googleTranslateElementInit");
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "hi,en,bn,id,fr,mr",
      layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
    },
    "google_translate_element",
  );
};

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

  const navLinks = (
    // ... (rest of your code remains the same)
  );

  return (
    // ... (rest of your code remains the same)
  );
}
