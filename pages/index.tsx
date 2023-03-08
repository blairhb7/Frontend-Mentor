import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const info = [
  {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      info: "Will hydrogen-fueled cars ever catch up to EVs?"
  },
  {
      id: 2,
      title: "The Downsides of AI Artistry",
      info: "What are the possible adverse effects of on-demand AI image generation?"
  },
  {
      id: 3,
      title: "Is VC Funding Drying Up?",
      info: "Private funding by VC firms is down 50% YOY. We take a look at what that means. "
  },

]


const articles = [
  {
    id: '01',
    title: 'Reviving Retro PCs',
    info: 'What happens when old PCs are given modern upgrades?',
    img: '/image-retro-pcs.jpg'

  },
  {
    id: '02',
    title: 'Top 10 Laptops of 2022',
    info: 'Our best picks for various needs and budgets.',
    img: '/image-top-laptops.jpg'

  },
  {
    id: '03',
    title: 'The Growth of Gaming',
    info: 'How the pandemic has sparked fresh opportunities.',
    img: '/image-gaming-growth.jpg'

  }
]


const Home: NextPage = () => {

  return (
    <main className='justify-center xl:mx-40 xl:my-10 mx-6 my-4'>
      <nav className="flex w-full py-12">
        <img src="logo.svg" alt="" className="w-16 h-10 flex" />
        <ul className=" xl:flex xl:flex-1 justify-end text-xl text-neutral-500  gap-10 hidden list-none">
        <li className="hover:text-yellow-500 duration-[400ms,700ms] hover:scale-105">Home</li>
        <li className="hover:text-red-500 duration-[400ms,700ms] hover:scale-105">New</li>
        <li className="hover:text-blue-500 duration-[400ms,700ms] hover:scale-105">Popular</li>
        <li className="hover:text-green-500 duration-[400ms,700ms] hover:scale-105">Trending</li>
        <li className="hover:text-orange-500 duration-[400ms,700ms] hover:scale-105">Catergories</li>
        </ul>
        <img src="/icon-menu.svg" alt="" className="lg:hidden flex items-center justify-center h-6 w-12 ml-80" />
      </nav>
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 col-span-2 ">
          <img src="/image-web-3-desktop.jpg" alt="" className=" col-span-2" />
          <section className=" flex-col xl:grid grid-cols-2 col-span-2 pt-8">
            <div className="">
              <h2 className=" text-7xl text-[#00001a]  font-bold">The Bright Future of Web 3.0?</h2>
            </div>
            <div className="">
              <p className="text-lg font-normal xl:p-0 pt-6 text-neutral-500">We dive into the next evolution of the web that claims
              to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?</p>
              <button className=" bg-[#f15e50] px-10 py-4 mt-6 text-white text-2xl tracking-wide uppercase hover:shadow-[inset_15rem_0_0_0] hover:shadow-yellow-500 duration-[400ms,700ms] transition-[color,box-shadow]">Read More</button>
            </div>
          </section>
        </div>
        <div className=" bg-[#00001a] ">
          <h2 className="text-yellow-600 px-6 py-8 text-5xl">New</h2>
            {info.map((info) =>{
              return (
            <div className='p-6 hover:scale-105 duration-[400ms,700ms]'>
                <h2 className=" text-white text-2xl font-semibold">{info.title}</h2>
                <p className="text-neutral-300 text-lg font-light ">{info.info}</p>
                <div className=" border-b opacity-80 p-4 border-white"></div>
            </div>
        )})}
        </div>
      </section>
      <section className="xl:flex ">
       {articles.map((article) => {
        return (
        <div className=" flex mt-10 pr-5 hover:scale-95 duration-[400ms,700ms]">
          <img src={article.img} alt="" className=' h-36  w-32' />
          <div className=" pl-6 xl:mr-32 ">
              <h2 className=" text-neutral-300  text-4xl font-semibold pb-3 ">{article.id}</h2>
              <h2 className=" text-[#00001a] text-lg font-bold pb-4">{article.title}</h2>
              <p className=" text-neutral-500 text-lg w-60">{article.info}</p>
          </div>
        </div>)
       } )}
      </section>
    </main>  
  )
}

export default Home
