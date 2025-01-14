import { Link } from "react-router-dom";
import { useTheme } from "./context/theme-provider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  // console.log(isDark);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <p
            className={`${
              isDark
                ? "from-green-300 to-blue-300"
                : "from-slate-400 to-slate-900"
            } text-xl md:text-2xl uppercase font-semibold bg-gradient-to-r text-transparent bg-clip-text`}
          >
            Abhawa
          </p>
        </Link>
        <div>
          {/* search */}
          {/* theme toggle */}
          <div
            className={`flex items-center transition-transform duration-500 cursor-pointer ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <Sun className="size-6 text-yellow-500 rotate-0 transition-all" />
            ) : (
              <Moon className="size-6 text-slate-900 rotate-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
