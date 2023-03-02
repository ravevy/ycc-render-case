import Button from "./Button";

export default function Banner({ title }) {
  return (
    <div className="text-center py-4 px-5 flex flex-row justify-center content-center bg-light w-full rounded-t border-b">
      <Button href="/" label="Home" />
      <h1 className="text-xl font-semibold flex-1 self-center text-dark">
        {title}
      </h1>
    </div>
  );
}
