import React from "react";
import { getTimeOfDay } from "../functions/common";
import { DOMAIN } from "../functions/constants";
import { Props } from "../interfaces";
import { NavMenu } from "./common";
import TitleHead from "./TitleHead";

const Layout = ({ children, title, token }: Props) => (
  <div>
    <TitleHead title={title}>
      <meta
        name="description"
        content="The Reddit Alternative With Medium Layout. "
      />
      <meta property="og:url" content={DOMAIN} />
      <meta
        property="og:description"
        content="The Reddit Alternative With Medium Layout. "
      />
      <meta property="og:image" content={`${DOMAIN}/remedium.png`} />
    </TitleHead>
    <header>
      <nav className="flex items-center justify-center max-width-main mx-auto z-50 h-16 my-6 lg:mx-12 sm:mx-6">
        <div className="flex-grow flex items-center">
          <a href="/">
            <div className="pr-4 nav-img h-8 flex flex-row items-center cursor-pointer sm:border-0">
              <img className="h-full sm:h-6" src="reddium_symbol.svg" />
              <h1 className="ml-4 site-name text-3xl tracking-tighter sm:hidden text-black">
                Remedium
              </h1>
            </div>
          </a>
          <div className="pl-4">
            <h1 className="font-bold text-lg leading-6 nav-greeting sm:hidden">
              {getTimeOfDay()}
            </h1>
          </div>
        </div>
        <NavMenu token={token} />
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
