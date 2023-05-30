"use client";

import { SefeUser } from "@/app/types";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Categories from "./Categories";

type Props = {
  currentUser?: SefeUser | null;
};

const Navbar = ({ currentUser }: Props) => {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
        <Categories />
      </div>
    </div>
  );
};

export default Navbar;
