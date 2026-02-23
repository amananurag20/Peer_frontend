import { useState } from 'react';
import { ChevronDownIcon, CloseCircleIcon, AtIcon, CreditCardOutlineIcon, CalendarIcon, PinIcon } from './Icons';

interface PaymentTypeProps {
    onBack: () => void;
}

export default function PaymentType({ onBack }: PaymentTypeProps) {
    const [isFull, setIsFull] = useState(true);

    const baseAmount = 200.00;
    const serviceFee = 15.00;
    const finalTotal = baseAmount + serviceFee;

    const renderAmount = (amt: number) => {
        const parts = amt.toFixed(2).split('.');
        return (
            <span className="font-semibold text-[#25282B] text-[15px]">
                ${parts[0]}<span className="font-medium text-[#6c757d]">.{parts[1]}</span>
            </span>
        );
    };

    return (
        <div className="w-full max-w-[850px] mt-6 md:mt-[4vh] mb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h1 className="text-[32px] md:text-[36px] tracking-tight font-medium text-[#25282B]">
                    Payment Type
                </h1>
                <div className="flex bg-[#f1f3f5] p-1 rounded-lg">
                    <button
                        onClick={() => setIsFull(true)}
                        className={`px-8 py-2 text-[14px] font-semibold rounded-md transition-all ${isFull ? 'bg-white shadow relative text-[#25282B]' : 'text-[#6c757d]'}`}
                    >
                        Pay in Full
                    </button>
                    <button
                        onClick={() => setIsFull(false)}
                        className={`px-8 py-2 text-[14px] font-semibold rounded-md transition-all ${!isFull ? 'bg-white shadow relative text-[#25282B]' : 'text-[#6c757d]'}`}
                    >
                        Partial
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
                {/* Email */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[14px] font-semibold text-gray-800">Email</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2.5 flex items-center justify-center">
                            <AtIcon />
                        </div>
                        <input type="text" className="flex-1 outline-none text-gray-800 text-[14px] bg-transparent" />
                        <button className="text-gray-300 hover:text-gray-500 ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[14px] font-semibold text-gray-800">Phone Number</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors cursor-pointer">
                        <input type="text" placeholder="Select" className="flex-1 outline-none text-gray-800 text-[14px] placeholder-[#adb5bd] bg-transparent cursor-pointer" readOnly />
                        <div className="text-gray-400 ml-2">
                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 hidden md:block"></div>

                {/* Name on Card */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[14px] font-semibold text-gray-800">Name on Card</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2.5 flex items-center justify-center">
                            <AtIcon />
                        </div>
                        <input type="text" className="flex-1 outline-none text-gray-800 text-[14px] bg-transparent" />
                        <button className="text-gray-300 hover:text-gray-500 ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Card Type */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[14px] font-semibold text-gray-800">Card Type</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors cursor-pointer">
                        <input type="text" placeholder="Select" className="flex-1 outline-none text-gray-800 text-[14px] placeholder-[#adb5bd] bg-transparent cursor-pointer" readOnly />
                        <div className="text-gray-400 ml-2">
                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 hidden md:block"></div>

                {/* Card Number */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[14px] font-semibold text-gray-800">Card Number</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2.5 flex items-center justify-center">
                            <CreditCardOutlineIcon />
                        </div>
                        <input type="text" placeholder="1234 1234 1234 1234" className="flex-1 outline-none text-gray-800 text-[14px] placeholder-[#6c757d] bg-transparent" />
                        <button className="text-gray-300 hover:text-gray-500 ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* CVV */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[14px] font-semibold text-gray-800">CVV</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2.5 flex items-center justify-center">
                            <CreditCardOutlineIcon />
                        </div>
                        <input type="text" placeholder="CVV" className="flex-1 outline-none text-gray-800 text-[14px] placeholder-[#adb5bd] bg-transparent" />
                        <button className="text-gray-300 hover:text-gray-500 ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Summary */}
                <div className="col-span-1 md:row-span-2">
                    <div className="border border-[#e9ecef] rounded-[14px] bg-[#f8f9fa] p-[22px] h-full">
                        <h2 className="font-semibold text-[#25282B] text-[15.5px] mb-5 tracking-tight">Payment Summary</h2>
                        <div className="flex justify-between items-center text-[14px] mb-[14px]">
                            <span className="text-[#6c757d] font-semibold">Selected payment type</span>
                            <span className="font-bold text-[#25282B] text-[14px]">{isFull ? "Payment in full" : "Partial"}</span>
                        </div>
                        <div className="flex justify-between items-center text-[14px] mb-[14px]">
                            <span className="text-[#6c757d] font-semibold">Payment Amount</span>
                            {renderAmount(baseAmount)}
                        </div>
                        <div className="flex justify-between items-center text-[14px] mb-[20px]">
                            <span className="text-[#6c757d] font-semibold">Service Fee</span>
                            {renderAmount(serviceFee)}
                        </div>
                        <div className="h-px bg-[#dee2e6] w-full mb-[18px]"></div>
                        <div className="flex justify-between items-center text-[14.5px] mt-1">
                            <span className="text-[#6c757d] font-semibold">Total Amount</span>
                            {renderAmount(finalTotal)}
                        </div>
                    </div>
                </div>

                {/* Expiration date */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[14px] font-semibold text-gray-800">Expiration date</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2.5 flex items-center justify-center">
                            <CalendarIcon />
                        </div>
                        <input type="text" placeholder="MM/YY" className="flex-1 outline-none text-gray-800 text-[14px] placeholder-[#adb5bd] bg-transparent" />
                        <button className="text-gray-300 hover:text-gray-500 ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Billing ZIP */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[14px] font-semibold text-gray-800">Billing ZIP</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2.5 flex items-center justify-center">
                            <PinIcon />
                        </div>
                        <input type="text" className="flex-1 outline-none text-gray-800 text-[14px] bg-transparent" />
                        <button className="text-gray-300 hover:text-gray-500 ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-[14px] mt-8 mb-8">
                <label className="flex items-start gap-3 cursor-pointer group w-fit">
                    <div className="pt-0.5">
                        <input type="checkbox" className="w-[16px] h-[16px] border-gray-300 rounded focus:ring-green-500 accent-[#0ca13e] cursor-pointer" />
                    </div>
                    <span className="text-[#6c757d] font-medium text-[14.5px] group-hover:text-gray-600 transition-colors leading-[1.6]">
                        I confirm that I have read and agree to the Terms and Conditions of this payment.
                    </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group w-fit">
                    <div className="pt-0.5">
                        <input type="checkbox" className="w-[16px] h-[16px] border-gray-300 rounded focus:ring-green-500 accent-[#0ca13e] cursor-pointer" />
                    </div>
                    <span className="text-[#6c757d] font-medium text-[14.5px] group-hover:text-gray-600 transition-colors leading-[1.6]">
                        I understand that a non-refundable service fee will be charged in addition to the payment amount, and I agree to proceed.
                    </span>
                </label>
            </div>

            {/* Actions */}
            <div className="flex gap-4 w-full">
                <button
                    onClick={onBack}
                    className="flex-1 border border-[#ced4da] bg-white text-[#25282B] font-semibold text-[14.5px] py-3.5 rounded-[10px] hover:bg-gray-50 transition-colors"
                >
                    Back
                </button>
                <button className="flex-1 bg-[#12a142] hover:bg-green-700 text-white font-semibold text-[14.5px] py-3.5 rounded-[10px] transition-colors">
                    Pay Now
                </button>
            </div>

            {/* Divider line before footer logic if needed */}
            <div className="h-px bg-[#e9ecef] w-full mt-10 mb-2"></div>
        </div>
    );
}
