import Link from "next/link";
import { GithubSolid } from "./icon/github";
import { LinkedinSolid } from "./icon/linkedin";
import { EmailSolid } from "./icon/email";

const navItems = {
  "/": {
    name: "Home",
  },
  "/work": {
    name: "Work",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative justify-between"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-row space-x-0 pl-10 items-center">
            <Link
              href="mailto:max@koonindustries.com"
              target="_blank"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              <EmailSolid width={22} height={22} />
            </Link>
            <Link
              href="https://linkedin.com/in/maxkoon"
              target="_blank"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              <LinkedinSolid width={18} height={18} />
            </Link>
            <Link
              href="https://github.com/k2on"
              target="_blank"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              <GithubSolid width={22} height={22} />
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
