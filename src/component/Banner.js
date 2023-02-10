import { useRouter } from "next/router"

export default function Banner({title}){
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push("/")
  }

  return(
    <div className="text-center py-4 px-5 flex flex-row justify-center content-center bg-light w-full rounded-t border-b">
      <button className="button" onClick={handleClick}>Home</button>
      <h1 className="text-xl font-semibold flex-1 self-center text-dark">{title}</h1>
    </div>
  )
}