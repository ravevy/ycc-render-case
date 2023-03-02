import Link from "next/link";

export default function Banner({ title }) {
  return (
    <div className="text-center py-4 px-5 flex flex-row justify-center content-center bg-light w-full rounded-t border-b">
      <Link
        className=" bg-white border border-gray-300 hover:bg-offwhite hover:text-dark text-medium py-1.5 px-3 rounded shadow"
        href="/"
      >
        Home
      </Link>
      <h1 className="text-xl font-semibold flex-1 self-center text-dark">
        {title}
      </h1>
    </div>
  );
}
