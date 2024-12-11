import React from "react";
import Moon from "../Svgs/Moon";
import Sun from "../Svgs/Sun";

export default function DarkMode(props) {
  const isDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="inline-block  cursor-pointer" onClick={isDarkMode}>
      <div className="flex items-center  gap-x-2 dark:hidden">
        <Moon class={` ${props.size} `} />
        {props.textM && <span>{props.textM}</span>}
      </div>
      <div className="hidden dark:flex items-center gap-x-2">
        <Sun class={`${props.size}  `} />
        {props.textS && <span>{props.textS}</span>}
      </div>
    </div>
  );
}
