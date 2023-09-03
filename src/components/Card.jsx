import { React, useState } from 'react'

function Card({ name, info, price, image,func,id }) {
    const [readMore, setreadMore] = useState(false);
    let subStr = info.substring(0, 400) + ". . .";

    function toggel() {
        setreadMore(!readMore);
    }

    return (
        <div className='md:w-[400px] w-11/12 px-2 my-4 flex flex-col justify-between shadow-lg shadow-gray-500'>
            <div className="image">
                <img src={image} alt="" className='h-[200px] w-full object-cover border-2 border-solid border-black'/>
            </div>
            <div className=''>
                <p className='font-bold text-green-500 text-2xl tracking-wide '>&#8377;{price}</p>
            </div>
            <div className="font-bold text-3xl text-black tracking-widest font-['Rubik_Iso'] py-4">{name}</div>
            <div className="">
                <p className="break-all font-[Merriweather] tracking-wide">
                    {readMore ? info : subStr}
                    <button onClick={toggel} className='text-blue-700 font-bold '>
                        {readMore ? "Show less" : "Read more"}
                    </button>
                </p>
            </div>
            <button
                onClick={()=>func(id)}
                className='my-4 px-4 py-2 border-2 border-solid border-red-600 text-lg font-[Tektur] font-bold hover:bg-red-200 hover:text-white'>
                Not Intrested
            </button>
        </div>
    )
}

export default Card;