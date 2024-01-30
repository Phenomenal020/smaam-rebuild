import React from 'react';

const Calendar = () => {
  return (
    <div className="bg-gray-100 p-6 flex justify-center items-center max-width min-w-[360px]">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-700 mb-3">Resumption</h2>
          <p className="text-gray-600">
            Students are required to resume for the 2023/2034 Academic session
          </p>
          {/* <div className="mt-4">
            <button className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded">
              More Info
            </button>
          </div> */}
        </div>

        <div className="md:w-72 bg-blue-800 text-white p-6 flex flex-col items-center justify-center">
          <div className="flex items-center justify-between w-full">
            <span>&#9650;</span> {/* This is an upward arrow */}
            <span>&#9660;</span> {/* This is a downward arrow */}
          </div>
          <div className="my-4 flex-col justify-center">
            <p className="text-4xl font-bold text-center mb-3">11</p>
            <p className="uppercase text-center text-2xl mb-2">Sept</p>
            <p className="text-xl text-center">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
