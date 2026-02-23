import React from 'react';

interface StepperProps {
    currentStep?: number;
}

const Stepper = ({ currentStep = 1 }: StepperProps) => {
    return (
        <div className="hidden md:flex items-center justify-center flex-1 max-w-[650px] px-8 lg:px-12 relative h-[80px]">

            {/* Background Line */}
            <div className="absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-[#b1e1bd] -z-10"></div>

            <div className="flex w-full justify-between relative z-10 px-4">
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-2 relative">
                    {currentStep > 1 ? (
                        <div className="w-[34px] h-[34px] bg-[#c3e6cb] text-[#0ca13e] rounded-full flex items-center justify-center font-semibold text-[15px]">
                            1
                        </div>
                    ) : (
                        <div className="w-[34px] h-[34px] bg-white text-[#0ca13e] rounded-full border-[1.5px] border-[#0ca13e] flex items-center justify-center">
                            <div className="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#0ca13e]"></div>
                        </div>
                    )}
                    <span className={`absolute top-[42px] font-bold text-[13px] whitespace-nowrap ${currentStep >= 1 ? 'text-[#0ca13e]' : 'text-[#6c757d]'}`}>
                        Look Up
                    </span>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-2 relative">
                    {currentStep > 2 ? (
                        <div className="w-[34px] h-[34px] bg-[#c3e6cb] text-[#0ca13e] rounded-full flex items-center justify-center font-semibold text-[15px]">
                            2
                        </div>
                    ) : currentStep === 2 ? (
                        <div className="w-[34px] h-[34px] bg-white text-[#0ca13e] rounded-full border-[1.5px] border-[#0ca13e] flex items-center justify-center">
                            <div className="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#0ca13e]"></div>
                        </div>
                    ) : (
                        <div className="w-[34px] h-[34px] bg-white rounded-full border border-[#adb5bd] flex items-center justify-center text-[#adb5bd] text-[15px]">
                            2
                        </div>
                    )}
                    <span className={`absolute top-[42px] font-medium text-[13px] whitespace-nowrap ${currentStep >= 2 ? 'text-[#0ca13e] font-bold' : 'text-[#6c757d]'}`}>
                        Payment Info.
                    </span>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-2 relative">
                    {currentStep > 3 ? (
                        <div className="w-[34px] h-[34px] bg-[#c3e6cb] text-[#0ca13e] rounded-full flex items-center justify-center font-semibold text-[15px]">
                            3
                        </div>
                    ) : currentStep === 3 ? (
                        <div className="w-[34px] h-[34px] bg-white text-[#0ca13e] rounded-full border-[1.5px] border-[#0ca13e] flex items-center justify-center">
                            <div className="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#0ca13e]"></div>
                        </div>
                    ) : (
                        <div className="w-[34px] h-[34px] bg-white rounded-full border border-[#adb5bd] flex items-center justify-center text-[#adb5bd] text-[15px]">
                            3
                        </div>
                    )}
                    <span className={`absolute top-[42px] font-medium text-[13px] whitespace-nowrap ${currentStep >= 3 ? 'text-[#0ca13e] font-bold' : 'text-[#6c757d]'}`}>
                        Pay
                    </span>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center gap-2 relative">
                    {currentStep > 4 ? (
                        <div className="w-[34px] h-[34px] bg-[#c3e6cb] text-[#0ca13e] rounded-full flex items-center justify-center font-semibold text-[15px]">
                            4
                        </div>
                    ) : currentStep === 4 ? (
                        <div className="w-[34px] h-[34px] bg-white text-[#0ca13e] rounded-full border-[1.5px] border-[#0ca13e] flex items-center justify-center">
                            <div className="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#0ca13e]"></div>
                        </div>
                    ) : (
                        <div className="w-[34px] h-[34px] bg-white rounded-full border border-[#adb5bd] flex items-center justify-center text-[#adb5bd] text-[15px]">
                            4
                        </div>
                    )}
                    <span className={`absolute top-[42px] font-medium text-[13px] whitespace-nowrap ${currentStep >= 4 ? 'text-[#0ca13e] font-bold' : 'text-[#6c757d]'}`}>
                        Receipt
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Stepper;
