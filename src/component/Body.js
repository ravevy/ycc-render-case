export default function Body({post}){
let date = new Date(post.createdAt).toDateString()

  return(
    <div className="bg-light px-5 py-6 rounded-b flex flex-col text-dark">
      <img src={post.image.url} className="max-w-sm self-center justify-center"></img>
      <h1 className="text-2xl text-center font-bold mt-6">{post.title}</h1>
      <h5 className="text-sm text-center mb-6">{post.author} - {date}</h5>
      <hr className="w-44 self-center"></hr>
      <p className="px-2 mt-6 text-justify">{post.content}</p>
    </div>
  )
}