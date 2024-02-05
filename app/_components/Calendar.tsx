'use client'
import React, { useState, useEffect } from 'react';
import { CalendarInfo } from '@/data/calendarData';
import { newsReader } from '@/utils/fonts';

const Calendar = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Handler to go to the next item
  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % CalendarInfo.length);
      setFade(true);
    }, 300); // The timeout duration should match your CSS transition duration
  };

  // Handler to go to the previous item
  const handlePrevious = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + CalendarInfo.length) % CalendarInfo.length);
      setFade(true);
    }, 300); // The timeout duration should match your CSS transition duration
  };

  return (
    <section className='w-full bg-gray-100'>
      <div className='p-4 max-width min-width pb-12'>
        <h4 className={`${newsReader.className} text-2xl font-bold text-center my-6 uppercase`}>
          Calendar
        </h4>

        <div className="flex justify-center items-center max-w-[400px] md:max-w-none md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
            <div className="p-6 flex flex-col md:w-[60%] min-h-[200px]">
              <h2 className="text-2xl font-bold text-gray-700 mb-3 capitalize">{CalendarInfo[index].header}</h2>
              <p className="text-gray-600" style={{ transition: 'opacity 0.3s', opacity: fade ? 1 : 0 }}>
                {CalendarInfo[index].comment}
              </p>
            </div>

            <div className=" md:min-w-[230px] bg-blue-800 text-white p-6 flex flex-col items-center justify-center md:w-[40%]">
              <div className="flex items-center justify-between w-full">
                <button onClick={handlePrevious}>&#9650;</button>
                <button onClick={handleNext}>&#9660;</button>
              </div>
              <div className="my-4 flex-col justify-center" style={{ transition: 'opacity 0.3s', opacity: fade ? 1 : 0 }}>
                <p className="text-4xl font-bold text-center mb-3">{CalendarInfo[index].day}</p>
                <p className="uppercase text-center text-2xl mb-2 font-semibold">{CalendarInfo[index].month}</p>
                <p className="text-xl text-center font-semibold">{CalendarInfo[index].year}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
};

export default Calendar;


