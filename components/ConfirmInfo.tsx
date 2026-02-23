import { useState } from 'react';

interface ConfirmInfoProps {
    onBack: () => void;
    onNext: () => void;
}

export default function ConfirmInfo({ onBack, onNext }: ConfirmInfoProps) {
    const defaultCases = [
        { id: 1, name: 'City Water Authority', amount: 100 },
        { id: 2, name: 'City Water Authority', amount: 100 },
        { id: 3, name: 'City Water Authority', amount: 100 },
        { id: 4, name: 'City Water Authority', amount: 100 },
        { id: 5, name: 'City Water Authority', amount: 100 }
    ];

    const [selectedCases, setSelectedCases] = useState<number[]>([]);
    const [view, setView] = useState<'selection' | 'summary'>('selection');

    const toggleCase = (id: number) => {
        if (selectedCases.includes(id)) {
            setSelectedCases(selectedCases.filter(cId => cId !== id));
        } else {
            setSelectedCases([...selectedCases, id]);
        }
    };

    const totalAmount = selectedCases.length > 0
        ? selectedCases.reduce((sum, id) => {
            const caseItem = defaultCases.find(c => c.id === id);
            return sum + (caseItem ? caseItem.amount : 0);
        }, 0)
        : defaultCases.reduce((sum, item) => sum + item.amount, 0); // show $500.00 when none selected as a "mock" feature based on design image

    if (view === 'summary') {
        const baseAmount = totalAmount || 200.00; // Mock placeholder fallback
        const serviceFee = 15.00;
        const finalTotal = baseAmount + serviceFee;

        // Helper to format dollars and cents specifically
        const renderAmount = (amt: number) => {
            const parts = amt.toFixed(2).split('.');
            return (
                <span className="font-semibold text-[#25282B]">
                    ${parts[0]}<span className="font-medium text-[#6c757d]">.{parts[1]}</span>
                </span>
            );
        };

        return (
            <div className="w-full max-w-[500px] mb-4">
                <h1 className="text-[28px] md:text-[32px] tracking-tight font-medium text-[#25282B] mb-8 text-center sm:text-left">
                    Confirm your Information
                </h1>

                {/* Key-Value Details */}
                <div className="flex flex-col gap-[22px] mb-10 px-1 border border-transparent">
                    <div className="flex items-start text-[14px]">
                        <span className="font-semibold text-[#25282B] w-[130px] shrink-0">Case Number</span>
                        <span className="text-[#6c757d] w-full text-right font-medium">Base 28-07-2025, 6:20 PM</span>
                    </div>
                    <div className="flex items-start text-[14px]">
                        <span className="font-semibold text-[#25282B] w-[130px] shrink-0">Date of Birth</span>
                        <span className="text-[#6c757d] w-full text-right font-medium">28-07-2025, 6:20 PM</span>
                    </div>
                    <div className="flex items-start text-[14px]">
                        <span className="font-semibold text-[#25282B] w-[130px] shrink-0">Name</span>
                        <span className="text-[#6c757d] w-full text-right font-medium">Sarah Smith</span>
                    </div>
                    <div className="flex items-start text-[14px]">
                        <span className="font-semibold text-[#25282B] w-[130px] shrink-0">Address</span>
                        <span className="text-[#6c757d] w-full flex-1 text-right font-medium leading-[1.6]">
                            1-B block 3212A, City Hospital,<br />Delhi
                        </span>
                    </div>
                </div>

                {/* Payment Summary Card */}
                <div className="border border-[#e9ecef] rounded-[14px] bg-[#f8f9fa] p-[22px] mb-8">
                    <h2 className="font-semibold text-[#25282B] text-[15.5px] mb-5 tracking-tight">Payment Summary</h2>
                    <div className="flex justify-between items-center text-[14px] mb-[14px]">
                        <span className="text-[#6c757d] font-semibold">Base Amount</span>
                        {renderAmount(baseAmount)}
                    </div>
                    <div className="flex justify-between items-center text-[14px] mb-[20px]">
                        <span className="text-[#6c757d] font-semibold">Service Fee</span>
                        {renderAmount(serviceFee)}
                    </div>

                    <div className="h-px bg-[#e9ecef] w-full mb-[18px]"></div>

                    <div className="flex justify-between items-center text-[14px] mt-1">
                        <span className="text-[#6c757d] font-semibold">Total Amount</span>
                        {renderAmount(finalTotal)}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                    <button
                        onClick={() => setView('selection')}
                        className="flex-1 border border-[#ced4da] bg-white text-[#25282B] font-semibold text-[14.5px] py-3.5 rounded-[10px] hover:bg-gray-50 transition-colors"
                    >
                        Back
                    </button>
                    <button
                        onClick={onNext}
                        className="flex-1 bg-[#12a142] hover:bg-green-700 text-white font-semibold text-[14.5px] py-3.5 rounded-[10px] transition-colors"
                    >
                        Pay Now
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-[500px] mb-4">
            <h1 className="text-[28px] md:text-[32px] tracking-tight font-medium text-[#25282B] mb-3 text-center sm:text-left">
                Confirm your Information
            </h1>
            <p className="text-[#6c757d] text-[12.5px] md:text-[13px] mb-6 leading-[1.6] text-center sm:text-left">
                Please confirm any case in the following in order to make a payment.
            </p>

            {/* Table Container */}
            <div className="border border-[#e9ecef] rounded-[10px] overflow-hidden mb-3">
                {/* Header */}
                <div className="flex justify-between bg-[#f8f9fa] border-b border-[#e9ecef] px-5 py-2.5 text-[#6c757d] font-semibold text-[12.5px]">
                    <div className="pl-6">Name</div>
                    <div>Amount</div>
                </div>

                {/* Rows */}
                <div className="bg-white">
                    {defaultCases.slice(0, 4).map((caseItem, idx) => (
                        <div
                            key={caseItem.id}
                            className={`flex items-center justify-between px-5 py-[14px] ${idx !== 3 ? 'border-b border-[#e9ecef]' : ''}`}
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    checked={selectedCases.includes(caseItem.id)}
                                    onChange={() => toggleCase(caseItem.id)}
                                    className="w-[15px] h-[15px] border-gray-300 rounded focus:ring-green-500 accent-[#0ca13e] cursor-pointer"
                                />
                                <span className="text-[#25282B] font-medium text-[13.5px]">{caseItem.name}</span>
                            </div>
                            <div className="text-[#25282B] font-bold text-[13.5px]">
                                ${caseItem.amount.toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Total */}
            <div className="text-right font-medium text-[13.5px] text-[#adb5bd] mb-5 mr-1 flex justify-end gap-1.5">
                Total Amount: <span className="text-[#25282B] font-bold">${totalAmount.toFixed(2)}</span>
            </div>

            {/* User Info Card */}
            <div className="bg-[#f8f9fa] border border-[#e9ecef] rounded-[10px] px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2 sm:gap-0">
                <div className="text-[13px]">
                    <span className="font-bold text-[#25282B] mr-2">Name</span>
                    <span className="text-[#6c757d] font-medium">Sarah Smith</span>
                </div>
                <div className="text-[13px]">
                    <span className="font-bold text-[#25282B] mr-2">Date of birth</span>
                    <span className="text-[#6c757d] font-medium">06-24-1990</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
                <button
                    onClick={onBack}
                    className="flex-1 border border-[#ced4da] bg-white text-[#25282B] font-semibold text-[14.5px] py-3.5 rounded-[10px] hover:bg-gray-50 transition-colors"
                >
                    Back
                </button>
                <button
                    onClick={() => setView('summary')}
                    className="flex-1 bg-[#12a142] hover:bg-green-700 text-white font-semibold text-[14.5px] py-3.5 rounded-[10px] transition-colors"
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
}
