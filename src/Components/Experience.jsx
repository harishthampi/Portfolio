import React from 'react'
import github from '../Assest/icon/github-mark-white.png'
import Tailwind from '../Assest/icon/Tailwind CSS.png'
import html from '../Assest/icon/html.png'
import js from '../Assest/icon/js.png'
import reactImage from '../Assest/icon/science.png'
import javaImage from '../Assest/icon/java.png'
import css from '../Assest/icon/css.png'
import node from '../Assest/icon/nodejs.png'
import mongo from '../Assest/icon/mongo.png'

export default function Experience() {
    const skills = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:js,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:Tailwind,
            title:'Tailwind',
            style:'shadow-sky-500'
        },
        {
            id:6,
            src:javaImage,
            title:'Java',
            style:'shadow-orange-500'
        },
        {
            id:7,
            src:github,
            title:'GitHub',
            style:'shadow-white'
        },
        {
            id:8,
            src:node,
            title:'Node JS',
            style:'shadow-green-500'
        },
        {
            id:9,
            src:mongo,
            title:'Mongo DB',
            style:'shadow-white'
        },

    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black
    w-full h-screen pt-20'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
        justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4
                 border-gray-400 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8
            text-center py-8 px-12 sm:px-0'>
                {
                    skills.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-200
                        py-2 rounded-lg ${style}`}>
                            <img src={src} className='w-20 mx-auto' alt='icons' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
