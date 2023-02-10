import Header from '@/component/Header.js'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(e.target.id)
  }

  return (
    <>
    <Header title={"Web Rendering"} />
      <div className='min-w-md max-w-xl my-5 mx-auto flex flex-col justify-center rounded drop-shadow bg-light  overflow-hidden border border-gray-100'>
        <div className="text-center p-8 border-b ">
          <h1 className='text-dark text-xl font-semibold'>CSR, SSG & SSR Case Study</h1>
          <p className='text-medium px-6 mt-8 text-justify'>Client-side rendering (CSR), hızlı ve interaktif arayüzlere sahip projeler için ideal bir seçenek. Single-page siteler, portfolyo siteleri ve to-do list gibi uygulamalarda CSR metodu tercih edilebilir.<br/><br/>Server-side rendering (SSR), daha iyi SEO performansı sunması ve hızlı bir yüklenme deneyimi sağlaması nedeniyle ticari amaçlı projeler için uygun bir seçenek. Haber siteleri ve sosyal medya platformları gibi projeler için de SSR uygun olur.<br/><br/>Static site generation (SSG), statik içeriğe sahip projeler için en uygun yöntem. Bloglar, bilgilendirici içerik bulunan siteler (Wikipedia, MDN gibi), markaların pazarlama siteleri SSG ile hazırlanabilir.</p>
        </div>
        
        <div className='flex flex-row justify-center content-center gap-5 my-8'>
          <button className='button' id={"/csr"} onClick={handleClick}>CSR</button>
          <button className='button' id={"/ssg"} onClick={handleClick}>SSG</button>
          <button className='button' id={"/ssr"} onClick={handleClick}>SSR</button>
        </div>
        
      </div>
    </>
  )
}