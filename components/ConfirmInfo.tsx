import { useState } from 'react';

interface ConfirmInfoProps {
    onBack: () => void;
}

export default function ConfirmInfo({ onBack }: ConfirmInfoProps) {
    const defaultCases = [
        { id: 1, name: 'City Water Authority', amount: 100 },
        { id: 2, name: 'City Water Authority', amount: 100 },
        { id: 3, name: 'City Water Authority', amount: 100 },
        { id: 4, name: 'City Water Authority', amount: 100 },
        { id: 5, name: 'City Water Authority', amount: 100 }
    ];

    const [selectedCases, setSelectedCases] = useState<number[]>([]);

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

    return (
        <div className="w-full max-w-[500px] mt-6 md:mt-[4vh] mb-4">
            <h1 className="text-[32px] md:text-[36px] tracking-tight font-medium text-[#25282B] mb-2 text-center sm:text-left">
                Confirm your Information
            </h1>
            <p className="text-[#6c757d] text-[14px] mb-6 leading-[1.6] text-center sm:text-left">
                Please confirm any case in the following in order to make a payment.
            </p>

            {/* Table Container */}
            <div className="border border-[#e9ecef] rounded-[10px] overflow-hidden mb-4">
                {/* Header */}
                <div className="flex justify-between bg-[#f8f9fa] border-b border-[#e9ecef] px-6 py-3.5 text-[#6c757d] font-semibold text-[13.5px]">
                    <div className="pl-6">Name</div>
                    <div>Amount</div>
                </div>

                {/* Rows */}
                <div className="bg-white">
                    {defaultCases.slice(0, 4).map((caseItem, idx) => (
                        <div
                            key={caseItem.id}
                            className={`flex items-center justify-between px-6 py-[22px] ${idx !== 3 ? 'border-b border-[#e9ecef]' : ''}`}
                        >
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    checked={selectedCases.includes(caseItem.id)}
                                    onChange={() => toggleCase(caseItem.id)}
                                    className="w-4 h-4 border-gray-300 rounded focus:ring-green-500 accent-[#0ca13e] cursor-pointer"
                                />
                                <span className="text-[#25282B] font-semibold text-[14px]">{caseItem.name}</span>
                            </div>
                            <div className="text-[#25282B] font-bold text-[14px]">
                                ${caseItem.amount.toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Total */}
            <div className="text-right font-medium text-[15px] text-[#adb5bd] mb-6 mr-1 flex justify-end gap-1.5">
                Total Amount: <span className="text-[#25282B] font-bold">${totalAmount.toFixed(2)}</span>
            </div>

            {/* User Info Card */}
            <div className="bg-[#f8f9fa] border border-[#e9ecef] rounded-[10px] px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3 sm:gap-0">
                <div className="text-[14px]">
                    <span className="font-bold text-[#25282B] mr-3">Name</span>
                    <span className="text-[#6c757d] font-medium">Sarah Smith</span>
                </div>
                <div className="text-[14px]">
                    <span className="font-bold text-[#25282B] mr-3">Date of birth</span>
                    <span className="text-[#6c757d] font-medium">06-24-1990</span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
                <button
                    onClick={onBack}
                    className="flex-1 border border-[#ced4da] bg-white text-[#25282B] font-bold text-[15px] py-3.5 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    Back
                </button>
                <button className="flex-1 bg-[#0ca13e] hover:bg-green-700 text-white font-semibold text-[15px] py-3.5 rounded-lg transition-colors">
                    Pay Now
                </button>
            </div>
        </div>
    );
}
