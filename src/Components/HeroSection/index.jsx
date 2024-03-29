import React from 'react'
import logo from "../../assets/yummy.jpg"

const index = () => {
    return (
        <section className="px-4 md:px-24 pt-[10rem] pb-12 gap-20 flex flex-col md:flex-row md:gap-4 items-center relative w-full overflow-x-hidden">
            <div className="absolute rounded-full w-32 h-32 md:w-[15rem] md:h-[15rem] bg-primary -top-10 right-0 md:-right-20"></div>

            <div className="text-white md:w-1/2 ">
                <h1 className="text-5xl font-bold md:text-7xl ">GET DELICIOUS FOOD AT YOUR DOORSTEPS</h1>

                <p className="text-xl mt-2 md:text-3xl md:mt-6 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Libero provident est excepturi saepe ab blanditiis aliquam, quisquam minima, 
                    vero veritatis necessitatibus unde reiciendis recusandae laudantium eveniet vitae. Laboriosam, fuga ab.
                </p>

                <button className="bg-primary mt-6 md:mt-12 rounded-full py-2 md:py-4 px-4 md:px-12 text-xl md:text-3xl font-semibold ">Order Now</button>
            </div>

            <div className="relative w-full h-[25rem] md:h-[40rem] md:w-1/2 p-6 ">
                <div className="absolute backdrop-blur bg-gradient-to-b rounded-3xl w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] right-10 -top-10 md:top-10 md:right-[5rem] -z-30 "></div>
                <div className="absolute rounded-full w-32 h-32 md:w-[10rem] md:h-[10rem] bg-primary bottom-0 left-20 md:left-60 -z-50 "></div>
                

                <div className=""><img src={logo} alt="" className="w-[18rem] h-[18rem] md:w-[30rem] md:h-[30rem] rounded-3xl mx-auto " /></div>
            </div>
        </section>
    )
}

export default index