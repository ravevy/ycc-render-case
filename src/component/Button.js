import Link from "next/link";

const Button = ({ href, label }) => (
  <Link
    className=" bg-white border border-gray-300 hover:bg-offwhite hover:text-dark text-medium py-1.5 px-3 rounded shadow"
    href={href}
  >
    {label}
  </Link>
);

export default Button;
