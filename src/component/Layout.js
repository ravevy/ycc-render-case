import Banner from "./Banner"
import Body from "./Body"
import React from "react"
import Header from "./Header"

export default function Layout({post, title}){

  return(
    <React.Fragment>
      <Header title={title}/>
      <div className="drop-shadow overflow-hidden min-w-md max-w-xl my-5 mx-auto flex flex-col justify-center content-center rounded border border-gray-100">
      <Banner title={title}/>
      <Body post={post}/>
      </div>
    </React.Fragment>
  )
}