import { React, useState } from 'react'
import Datas from './data'
import Card from './Card';

function Tours() {

    const [tourData, settourData] = useState(Datas);
    const [reset, setreset] = useState(true);

    function removerTour(id) {
        const newTour = tourData.filter((tour) => tour.id != id);
        settourData(newTour);
        // console.log(tourData.length);
    }


    function resetData() {
        settourData(Datas);
    }

    return (
        <div className='flex items-center flex-col justify-center'>
            <div className="font-bold md:text-8xl text-3xl font-['Rubik_Iso'] text-center py-8 border-3 md:border-8 border-dashed border-black rounded-lg px-4">
                <h1>Tour Guide</h1>
            </div>
            <div className='md:w-10/12 w-full item-center md:justify-around justify-center flex flex-wrap'>
                {
                    tourData.length === 0 ? (
                        <div className='h-screen flex justify-center items-center'>
                            <button onClick={() => resetData()} className='py-2 px-8 border-2 border-solid border-red-600 text-black hover:bg-red-600 hover:text-white font-bold text-2xl transition-all tracking-wider  '>Reset</button>
                        </div>
                    ) : (
                        tourData.map((data) => (
                            <Card {...data} key={data.id} func={removerTour} />
                        )))
                }
            </div>
        </div>
    )
}

export default Tours;