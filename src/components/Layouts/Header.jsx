import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Search } from "..";
import { DropdownLoggedOut } from "..";
import { DropdownLoggedIn } from "..";
import { useCart } from "../../context";

export const Header = () => {
  const { cartList } = useCart();
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    darkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [darkMode]);
  const [searchComp, setSearchComp] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const access_token = sessionStorage.getItem("access_token");


  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">eBooks</span>
          </Link>
          <div className="flex items-center relative">
            <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
            <span onClick={() => setSearchComp(!searchComp)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
              </span>
            </Link>
            <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
            {dropdown && (access_token ? <DropdownLoggedIn setDropdown={setDropdown} /> : <DropdownLoggedOut setDropdown={setDropdown} />)}
          </div>
        </div>
      </nav>
      {searchComp && <Search setSearchComp={setSearchComp} />}

    </header>
  )
}