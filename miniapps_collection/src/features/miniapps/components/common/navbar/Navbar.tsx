import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-5  bg-gray-600 font-semibold font-serif  text-lg top-0 sticky z-50">
      <div className="flex justify-between max-w-7xl mx-auto items-center">
        <div className="text-gray-200">
          <span>
            <Link href={"/"}>MiniApps</Link>
          </span>
        </div>
        <div>
          <ul className="flex gap-5 list-none text-gray-100">
            <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 px-4 py-2 rounded-xl transition-all duration-100 ">
              <Link href={"/calculator"}>Calculator</Link>
            </li>
            <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 px-4 py-2 rounded-xl transition-all duration-100">
              <Link href={"/counter"}>Counter</Link>
            </li>
            <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 px-4 py-2 rounded-xl transition-all duration-100">
              <Link href={"/rainbow-wrapper"}>Rainbow Wrapper</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span>JHUB</span>
          <span>|</span>
          <p>A collection of miniapps by JHUB</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
