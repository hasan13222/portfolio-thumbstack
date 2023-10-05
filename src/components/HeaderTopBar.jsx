"use client";
import { useState } from "react";
import Header from "./Header";
import TopBar from "./TopBar";

const HeaderTopBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <TopBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Header showMenu={showMenu} />
    </>
  );
};

export default HeaderTopBar;
