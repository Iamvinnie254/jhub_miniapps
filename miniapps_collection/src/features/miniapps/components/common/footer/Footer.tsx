import Link from "next/link"

const Footer = () => {
  return (
    <div className="py-5 bg-gray-600 text-gray-100">
      <div className="w-full text-center py-5 ">
        <span className="font-semibold font-serif">
          &copy; {new Date().getFullYear()} |  All rights reserved by &nbsp; 
          <Link href={"/"} className="text-blue-400 hover:underline transition-all duration-100 ">JHUB Interns</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
