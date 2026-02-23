import { useState } from 'react';
import { ChevronDownIcon, CloseCircleIcon, AtIcon, CreditCardOutlineIcon, CalendarIcon, PinIcon, GridIcon } from './Icons';

interface PaymentTypeProps {
    onBack: () => void;
}

export default function PaymentType({ onBack }: PaymentTypeProps) {
    const [isFull, setIsFull] = useState(false);
    const [partialAmount, setPartialAmount] = useState('');

    const maxAmount = 215.00;
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
        <div className="w-full max-w-[880px] mt-[40px] mb-[6vh]">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <h1 className="text-[32px] md:text-[36px] tracking-tight font-medium text-[#25282B]">
                    Payment Type
                </h1>
                <div className="flex bg-[#e9ecef] p-1.5 rounded-[8px] w-full md:w-[380px]">
                    <button
                        onClick={() => setIsFull(true)}
                        className={`flex-1 py-1.5 text-[14px] font-semibold rounded-[6px] transition-all ${isFull ? 'bg-white shadow-sm text-[#25282B]' : 'text-[#6c757d] hover:text-[#495057]'}`}
                    >
                        Pay in Full
                    </button>
                    <button
                        onClick={() => setIsFull(false)}
                        className={`flex-1 py-1.5 text-[14px] font-semibold rounded-[6px] transition-all ${!isFull ? 'bg-white shadow-sm text-[#25282B]' : 'text-[#6c757d] hover:text-[#495057]'}`}
                    >
                        Partial
                    </button>
                </div>
            </div>

            {isFull ? (
                // --- FULL PAYMENT LAYOUT ---
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

                    {/* Summary (Full) */}
                    <div className="col-span-1 md:row-span-2 md:pl-4">
                        <div className="border border-[#e9ecef] rounded-[16px] bg-[#f8f9fa] p-5 h-full flex flex-col justify-center">
                            <div className="flex justify-between items-start text-[13px] mb-[16px]">
                                <span className="text-[#6c757d] font-semibold mt-[2px] w-[140px] leading-tight flex-shrink-0">Selected payment type</span>
                                <span className="font-bold text-[#25282B] text-[13px] text-right leading-tight max-w-[100px]">
                                    Payment in full
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-[13px] mb-[16px]">
                                <span className="text-[#6c757d] font-semibold">Payment Amount</span>
                                {renderAmount(200.00)}
                            </div>
                            <div className="flex justify-between items-center text-[13px] mb-[20px]">
                                <span className="text-[#6c757d] font-semibold">Service Fee</span>
                                {renderAmount(15.00)}
                            </div>
                            <div className="h-px bg-[#dee2e6] w-full mb-[18px]"></div>
                            <div className="flex justify-between items-center text-[13.5px]">
                                <span className="text-[#6c757d] font-semibold">Total Amount</span>
                                {renderAmount(215.00)}
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
            ) : (
                // --- PARTIAL PAYMENT LAYOUT ---
                <div className="flex flex-col md:flex-row gap-6 items-stretch">

                    {/* LEFT COLUMN: Payment Type (Partial Input Box) */}
                    <div className="flex-1 border border-[#e9ecef] rounded-[16px] p-6 pb-5">
                        <h2 className="font-bold text-[#25282B] text-[16px] mb-6">Payment Type</h2>

                        <div className="flex flex-col gap-2 mb-6">
                            <label className="text-[12px] font-semibold text-[#868e96]">Partial Amount</label>
                            <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors">
                                <input
                                    type="text"
                                    placeholder={`Enter amount (max $${maxAmount.toFixed(2)})`}
                                    value={partialAmount}
                                    onChange={(e) => setPartialAmount(e.target.value.replace(/[^0-9.]/g, ''))}
                                    className="flex-1 outline-none text-[#25282B] text-[13px] placeholder-[#adb5bd] bg-transparent"
                                />
                                {partialAmount && (
                                    <button onClick={() => setPartialAmount('')} className="text-[#dee2e6] hover:text-[#adb5bd] ml-2 shrink-0">
                                        <CloseCircleIcon />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 bg-[#f8f9fa] rounded-[10px] p-5 mb-5">
                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#868e96] font-medium">Your Payment</span>
                                {renderAmount(Number(partialAmount) || 0)}
                            </div>
                            <div className="flex justify-between items-center text-[13px]">
                                <span className="text-[#868e96] font-medium">Remaining Balance</span>
                                {renderAmount(Math.max(0, maxAmount - (Number(partialAmount) || 0)))}
                            </div>
                        </div>

                        <div className="bg-[#e7f5ff] text-[#1c7ed6] text-[12.5px] font-medium py-3 px-4 rounded-[8px] w-full mb-6">
                            Any partial amount will be handled according to agency policy.
                        </div>

                        {/* Partial Summary Block */}
                        <div className="flex flex-col gap-4 bg-[#f8f9fa] rounded-[10px] p-5 border border-[#e9ecef]">
                            <div className="flex justify-between items-center text-[12.5px]">
                                <span className="text-[#868e96] font-medium">Selected payment type</span>
                                <span className="font-bold text-[#25282B] text-[13px]">Partial</span>
                            </div>
                            <div className="flex justify-between items-center text-[12.5px]">
                                <span className="text-[#868e96] font-medium">Amount charged now</span>
                                {renderAmount(Number(partialAmount) || 0)}
                            </div>
                            <div className="flex justify-between items-center text-[12.5px]">
                                <span className="text-[#868e96] font-medium">Service Fee</span>
                                {renderAmount(serviceFee)}
                            </div>

                            <div className="h-px bg-[#dee2e6] w-full my-1"></div>

                            <div className="flex justify-between items-center text-[12.5px]">
                                <span className="text-[#868e96] font-medium">Total Amount Charged</span>
                                {renderAmount((Number(partialAmount) || 0) + serviceFee)}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Contact Details */}
                    <div className="flex-[1.2] border border-[#e9ecef] rounded-[16px] p-6 overflow-hidden">
                        <h2 className="font-bold text-[#25282B] text-[14.5px] mb-5">Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
                            {/* Email */}
                            <div className="flex flex-col gap-1.5 min-w-0 overflow-hidden">
                                <label className="text-[12.5px] font-bold text-[#343a40]">Email</label>
                                <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white focus-within:border-gray-500 transition-colors overflow-hidden">
                                    <div className="text-gray-400 mr-2 shrink-0 flex items-center justify-center">
                                        <AtIcon />
                                    </div>
                                    <input type="text" className="flex-1 min-w-0 outline-none text-[#25282B] text-[13px] bg-transparent" />
                                    <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2 shrink-0">
                                        <CloseCircleIcon />
                                    </button>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col gap-1.5 min-w-0 overflow-hidden">
                                <label className="text-[12.5px] font-bold text-[#343a40]">Phone number</label>
                                <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white focus-within:border-gray-500 transition-colors overflow-hidden">
                                    <div className="text-gray-400 mr-2 shrink-0 flex items-center justify-center">
                                        <GridIcon />
                                    </div>
                                    <input type="text" placeholder="+1" className="flex-1 min-w-0 outline-none text-[#25282B] text-[13px] placeholder-[#868e96] bg-transparent" />
                                    <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2 shrink-0">
                                        <CloseCircleIcon />
                                    </button>
                                </div>
                            </div>

                            {/* Name on Card */}
                            <div className="flex flex-col gap-1.5 min-w-0 overflow-hidden">
                                <label className="text-[12.5px] font-bold text-[#343a40]">Name on Card</label>
                                <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white focus-within:border-gray-500 transition-colors overflow-hidden">
                                    <div className="text-gray-400 mr-2 shrink-0 flex items-center justify-center">
                                        <AtIcon />
                                    </div>
                                    <input type="text" className="flex-1 min-w-0 outline-none text-[#25282B] text-[13px] bg-transparent" />
                                    <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2 shrink-0">
                                        <CloseCircleIcon />
                                    </button>
                                </div>
                            </div>

                            {/* Card Type */}
                            <div className="flex flex-col gap-1.5 min-w-0 overflow-hidden">
                                <label className="text-[12.5px] font-bold text-[#343a40]">Card Type</label>
                                <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white focus-within:border-gray-500 transition-colors cursor-pointer overflow-hidden">
                                    <input type="text" placeholder="Select" className="flex-1 min-w-0 outline-none text-[#25282B] text-[13px] placeholder-[#adb5bd] bg-transparent cursor-pointer" readOnly />
                                    <div className="text-gray-400 ml-2 shrink-0">
                                        <ChevronDownIcon />
                                    </div>
                                </div>
                            </div>

                            {/* Card Number */}
                            <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2 min-w-0">
                                <label className="text-[12.5px] font-bold text-[#343a40]">Card Number</label>
                                <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white focus-within:border-gray-500 transition-colors overflow-hidden">
                                    <div className="text-gray-400 mr-2 shrink-0 flex items-center justify-center">
                                        <CreditCardOutlineIcon />
                                    </div>
                                    <input type="text" placeholder="1234 1234 1234 1234" className="flex-1 min-w-0 outline-none text-[#25282B] text-[13px] placeholder-[#868e96] bg-transparent" />
                                    <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2 shrink-0">
                                        <CloseCircleIcon />
                                    </button>
                                </div>
                            </div>

                            {/* Expiration date */}
                            <div className="flex flex-col gap-1.5 min-w-0 overflow-hidden">
                                <label className="text-[12.5px] font-bold text-[#343a40]">Expiration date</label>
                                <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white focus-within:border-gray-500 transition-colors overflow-hidden">
                                    <div className="text-gray-400 mr-2 shrink-0 flex items-center justify-center">
                                        <CalendarIcon />
                                    </div>
                                    <input type="text" placeholder="MM/YY" className="flex-1 min-w-0 outline-none text-[#25282B] text-[13px] placeholder-[#868e96] bg-transparent" />
                                    <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2 shrink-0">
                                        <CloseCircleIcon />
                                    </button>
                                </div>
                            </div>

                            {/* CVV */}
                            <div className="flex flex-col gap-1.5 min-w-0 overflow-hidden">
                                <label className="text-[12.5px] font-bold text-[#343a40]">CVV</label>
                                <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white focus-within:border-gray-500 transition-colors overflow-hidden">
                                    <div className="text-gray-400 mr-2 shrink-0 flex items-center justify-center">
                                        <CreditCardOutlineIcon />
                                    </div>
                                    <input type="text" placeholder="CVV" className="flex-1 min-w-0 outline-none text-[#25282B] text-[13px] placeholder-[#868e96] bg-transparent" />
                                    <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2 shrink-0">
                                        <CloseCircleIcon />
                                    </button>
                                </div>
                            </div>

                            {/* Billing ZIP */}
                            <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2 min-w-0 overflow-hidden">
                                <label className="text-[12.5px] font-bold text-[#343a40]">Billing ZIP</label>
                                <div className="flex items-center border border-gray-300 rounded-[8px] px-3 py-2 bg-white focus-within:border-gray-500 transition-colors overflow-hidden">
                                    <div className="text-gray-400 mr-2 shrink-0 flex items-center justify-center">
                                        <PinIcon />
                                    </div>
                                    <input type="text" className="flex-1 min-w-0 outline-none text-[#25282B] text-[13px] bg-transparent" />
                                    <button className="text-[#dee2e6] hover:text-[#adb5bd] ml-2 shrink-0">
                                        <CloseCircleIcon />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
            <div className="flex gap-4 w-full mt-4">
                <button
                    onClick={onBack}
                    className="flex-1 border border-[#ced4da] bg-white text-[#25282B] font-bold text-[14px] py-3 rounded-[8px] hover:bg-gray-50 transition-colors"
                >
                    Back
                </button>
                <button className="flex-1 bg-[#1aa240] hover:bg-green-700 text-white font-bold text-[14px] py-3 rounded-[8px] transition-colors">
                    Pay Now
                </button>
            </div>

            {/* Divider line before footer logic if needed */}
            <div className="h-px bg-[#e9ecef] w-full mt-7 hidden md:block"></div>
        </div>
    );
}
