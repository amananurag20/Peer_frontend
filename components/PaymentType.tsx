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
            <span className="font-bold text-[#25282B] text-[13px]">
                ${parts[0]}<span className="font-semibold text-[#868e96]">.{parts[1]}</span>
            </span>
        );
    };

    return (
        <div className="w-full max-w-[780px] mt-[48px] md:mt-[6vh] mb-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h1 className="text-[26px] md:text-[30px] tracking-tight font-medium text-[#25282B]">
                    Payment Type
                </h1>
                <div className="flex bg-[#f1f3f5] p-1 rounded-[8px] w-full md:w-[320px]">
                    <button
                        onClick={() => setIsFull(true)}
                        className={`flex-1 py-1.5 text-[13px] font-semibold rounded-[6px] transition-all ${isFull ? 'bg-white shadow-sm relative text-[#25282B]' : 'text-[#868e96]'}`}
                    >
                        Pay in Full
                    </button>
                    <button
                        onClick={() => setIsFull(false)}
                        className={`flex-1 py-1.5 text-[13px] font-semibold rounded-[6px] transition-all ${!isFull ? 'bg-white shadow-sm relative text-[#25282B]' : 'text-[#868e96]'}`}
                    >
                        Partial
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-4">
                {/* Email */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[12.5px] font-bold text-[#343a40]">Email</label>
                    <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <AtIcon />
                        </div>
                        <input type="text" className="flex-1 outline-none text-[#25282B] text-[13px] bg-transparent" />
                        <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[12.5px] font-bold text-[#343a40]">Phone Number</label>
                    <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors cursor-pointer">
                        <input type="text" placeholder="Select" className="flex-1 outline-none text-[#25282B] text-[13px] placeholder-[#adb5bd] bg-transparent cursor-pointer" readOnly />
                        <div className="text-gray-400 ml-2">
                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 hidden md:block"></div>

                {/* Name on Card */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[12.5px] font-bold text-[#343a40]">Name on Card</label>
                    <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <AtIcon />
                        </div>
                        <input type="text" className="flex-1 outline-none text-[#25282B] text-[13px] bg-transparent" />
                        <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Card Type */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[12.5px] font-bold text-[#343a40]">Card Type</label>
                    <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors cursor-pointer">
                        <input type="text" placeholder="Select" className="flex-1 outline-none text-[#25282B] text-[13px] placeholder-[#adb5bd] bg-transparent cursor-pointer" readOnly />
                        <div className="text-gray-400 ml-2">
                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 hidden md:block"></div>

                {/* Card Number */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[12.5px] font-bold text-[#343a40]">Card Number</label>
                    <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <CreditCardOutlineIcon />
                        </div>
                        <input type="text" placeholder="1234 1234 1234 1234" className="flex-1 outline-none text-[#25282B] text-[13px] placeholder-[#868e96] bg-transparent" />
                        <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* CVV */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[12.5px] font-bold text-[#343a40]">CVV</label>
                    <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <CreditCardOutlineIcon />
                        </div>
                        <input type="text" placeholder="CVV" className="flex-1 outline-none text-[#25282B] text-[13px] placeholder-[#868e96] bg-transparent" />
                        <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Summary */}
                <div className="col-span-1 md:row-span-2">
                    <div className="border border-[#e9ecef] rounded-[12px] bg-[#f8f9fa] p-[18px] h-full flex flex-col justify-center">
                        <h2 className="font-bold text-[#25282B] text-[13px] mb-4 tracking-tight">Payment Summary</h2>
                        <div className="flex justify-between items-start text-[12.5px] mb-[10px]">
                            <span className="text-[#6c757d] font-semibold mt-[2px] w-[100px] leading-tight">Selected payment type</span>
                            <span className="font-bold text-[#25282B] text-[12.5px] text-right leading-tight max-w-[80px]">
                                {isFull ? "Payment in full" : "Partial"}
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-[12.5px] mb-[10px]">
                            <span className="text-[#6c757d] font-semibold">Payment Amount</span>
                            {renderAmount(baseAmount)}
                        </div>
                        <div className="flex justify-between items-center text-[12.5px] mb-[15px]">
                            <span className="text-[#6c757d] font-semibold">Service Fee</span>
                            {renderAmount(serviceFee)}
                        </div>
                        <div className="h-px bg-[#dee2e6] w-full mb-[14px]"></div>
                        <div className="flex justify-between items-center text-[13px]">
                            <span className="text-[#6c757d] font-semibold">Total Amount</span>
                            {renderAmount(finalTotal)}
                        </div>
                    </div>
                </div>

                {/* Expiration date */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[12.5px] font-bold text-[#343a40]">Expiration date</label>
                    <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <CalendarIcon />
                        </div>
                        <input type="text" placeholder="MM/YY" className="flex-1 outline-none text-[#25282B] text-[13px] placeholder-[#868e96] bg-transparent" />
                        <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Billing ZIP */}
                <div className="flex flex-col gap-1.5 col-span-1">
                    <label className="text-[12.5px] font-bold text-[#343a40]">Billing ZIP</label>
                    <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <PinIcon />
                        </div>
                        <input type="text" className="flex-1 outline-none text-[#25282B] text-[13px] bg-transparent" />
                        <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-[10px] mt-6 mb-8">
                <label className="flex items-start gap-2.5 cursor-pointer group w-fit">
                    <div className="pt-[3px]">
                        <input type="checkbox" className="w-[14px] h-[14px] border-gray-300 rounded focus:ring-green-500 accent-[#0ca13e] cursor-pointer" />
                    </div>
                    <span className="text-[#6c757d] font-semibold text-[12.5px] group-hover:text-gray-600 transition-colors leading-[1.6]">
                        I confirm that I have read and agree to the Terms and Conditions of this payment.
                    </span>
                </label>
                <label className="flex items-start gap-2.5 cursor-pointer group w-fit">
                    <div className="pt-[3px]">
                        <input type="checkbox" className="w-[14px] h-[14px] border-gray-300 rounded focus:ring-green-500 accent-[#0ca13e] cursor-pointer" />
                    </div>
                    <span className="text-[#6c757d] font-semibold text-[12.5px] group-hover:text-gray-600 transition-colors leading-[1.6]">
                        I understand that a non-refundable service fee will be charged in addition to the payment amount, and I agree to proceed.
                    </span>
                </label>
            </div>

            {/* Actions */}
            <div className="flex gap-4 w-full">
                <button
                    onClick={onBack}
                    className="flex-1 border border-[#ced4da] bg-white text-[#25282B] font-bold text-[13.5px] py-2.5 rounded-[8px] hover:bg-gray-50 transition-colors"
                >
                    Back
                </button>
                <button className="flex-1 bg-[#0ca13e] hover:bg-green-700 text-white font-bold text-[13.5px] py-2.5 rounded-[8px] transition-colors">
                    Pay Now
                </button>
            </div>

            {/* Divider line before footer logic if needed */}
            <div className="h-px bg-[#e9ecef] w-full mt-7 hidden md:block"></div>
        </div>
    );
}
