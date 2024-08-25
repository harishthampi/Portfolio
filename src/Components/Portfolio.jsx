import React from 'react'
import disney from '../Assest/project/disney+.png'
import netflix from '../Assest/project/netflix.jpg'
import bms from '../Assest/project/bms.jpg'
import foodDelivery from '../Assest/project/Food-Delivery.jpg'

export default function Portfolio() {
    const portfolio = [
        {
            id:1,
            src:disney,
            title:"Disney+",
            technologies:"JavaScript,React, Styled Components",
            code:'https://github.com/harishthampi/disneyplus-clone',
            demo:'https://disneyplusclone-v1.netlify.app/'

        },
        {
            id:2,
            src:netflix,
            title:"Netflix",
            technologies:"JavaScript,React",
            code:'https://github.com/harishthampi/Netflix-clone',
            demo:'https://netflexclone-v1.netlify.app/'
        },
        {
            id:3,
            src:bms,
            title:"Book My Show",
            technologies:"React,Tailwind CSS,Node JS,MongoDB",
        },
        {
            id:4,
            src:foodDelivery,
            title:"Food Delivery App",
            technologies:"MERN Stack, TailwindCSS, Auth0, Stripe, Cloudinary",
            code:'https://github.com/harishthampi/FoodDelivery-Frontend',
            demo:'https://fooddelivery-frontend-0hmd.onrender.com/'
        }

    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b
    from-black to-gray-800 w-full text-white
    md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
                    px-12 sm:px-0'>
                {
                    portfolio.map(({id,src,title,technologies,demo,code}) => (

                            <div key={id} className='shadow-sm shadow-gray-600 rounded-lg flex flex-col items-center'>
                            <img src={src} alt='' className='rounded-md hover:scale-105 duration-300 w-full h-full object-cover '/>
                            <h3 className="text-lg font-bold mb-1 items-center border-b-2 pt-1 ml-1">{title}</h3>
                            <p className="text-sm py-1 ml-5">{technologies}</p>
                                <div className='flex items-center justify-center'>
                                <a href={demo} target="_blank" rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200
                                    hover:scale-105'>Demo</button></a>
                                 < a href={code} target="_blank" rel="noreferrer"><button className='w-1/2 px-6 m-4 duration-200
                                    hover:scale-105'>Code</button></a>
                                </div>
                            </div>
                    ))
                }
             </div>
        </div>
    </div>
  )
}
