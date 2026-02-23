import React from 'react';

const Stepper = () => {
    return (
        <div className="hidden md:flex items-center justify-center flex-1 max-w-2xl px-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center relative z-10">
                <div className="w-7 h-7 rounded-full border-2 border-green-600 bg-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                <span className="absolute top-9 text-green-700 font-bold text-sm whitespace-nowrap">Look Up</span>
            </div>
            <div className="flex-1 h-[1.5px] bg-green-600 -mx-1 z-0"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center relative z-10">
                <div className="w-7 h-7 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-400 text-xs font-semibold">
                    2
                </div>
                <span className="absolute top-9 text-gray-500 font-medium text-sm whitespace-nowrap">Payment Info.</span>
            </div>
            <div className="flex-1 h-[1.5px] bg-gray-300 -mx-1 z-0"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center relative z-10">
                <div className="w-7 h-7 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-400 text-xs font-semibold">
                    3
                </div>
                <span className="absolute top-9 text-gray-500 font-medium text-sm whitespace-nowrap">Pay</span>
            </div>
            <div className="flex-1 h-[1.5px] bg-gray-300 -mx-1 z-0"></div>

            {/* Step 4 */}
            <div className="flex flex-col items-center relative z-10">
                <div className="w-7 h-7 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-gray-400 text-xs font-semibold">
                    4
                </div>
                <span className="absolute top-9 text-gray-500 font-medium text-sm whitespace-nowrap">Receipt</span>
            </div>
        </div>
    );
};

export default Stepper;
