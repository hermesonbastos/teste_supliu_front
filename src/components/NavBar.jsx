import React from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <button className="btn btn-ghost text-xl hover:bg-inherit pl-0 ml-0">
          <Link to="/">Tião Carreiro e Pardinho</Link>
        </button>
      </div>
      <div className="flex gap-1">
        <div className="flex">
          <p className="hidden lg:block">
            Dev.by{"  "}
            <a
              href="https://github.com/hermesonbastos"
              className="link"
              target="_blank"
            >
              hermesonbastos
            </a>
          </p>
        </div>
        <a
          href="https://github.com/hermesonbastos"
          className="link"
          target="_blank"
        >
          <Github />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
