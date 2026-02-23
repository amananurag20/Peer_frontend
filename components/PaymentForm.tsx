import { useState } from 'react';
import { CloseCircleIcon, UserBadgeIcon, CitationQuoteIcon } from './Icons';

interface PaymentFormProps {
    onNext: () => void;
}

export default function PaymentForm({ onNext }: PaymentFormProps) {
    const [citationNumber, setCitationNumber] = useState('');
    const [lastName, setLastName] = useState('');
    const [dobMM, setDobMM] = useState('');
    const [dobDD, setDobDD] = useState('');
    const [dobYYYY, setDobYYYY] = useState('');
    const [caseNumber, setCaseNumber] = useState('');

    const handleClear = () => {
        setCitationNumber('');
        setLastName('');
        setDobMM('');
        setDobDD('');
        setDobYYYY('');
        setCaseNumber('');
    };

    // Validation logic for unlocking "Next"
    // Option 1: Citation Number is filled (e.g. at least 8 digits since placeholder says 8-12)
    const isCitationValid = citationNumber.length >= 8;

    // Option 2: Last Name AND full Date of Birth are filled
    const isDobValid = dobMM.length === 2 && dobDD.length === 2 && dobYYYY.length === 4;
    const isNameDobValid = lastName.trim().length > 0 && isDobValid;

    // Option 3: Case Number is filled
    const isCaseValid = caseNumber.trim().length > 0;

    const isNextEnabled = isCitationValid || isNameDobValid || isCaseValid;

    return (
        <div className="w-full max-w-[500px] mb-4">
            <h1 className="text-[28px] md:text-[32px] tracking-tight font-medium text-gray-900 mb-2 text-center sm:text-left">
                Online Citation Payment
            </h1>
            <p className="text-gray-500 text-[13px] mb-5 leading-[1.6] max-w-[440px] text-center sm:text-left">
                Please review your case details carefully before proceeding.
                Payment eligibility and requirements may vary
            </p>

            <div className="flex flex-col gap-[14px]">
                {/* Citation Number */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[13.5px] font-semibold text-gray-800">Citation Number</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <CitationQuoteIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter 8-12 digit no."
                            maxLength={12}
                            value={citationNumber}
                            onChange={(e) => setCitationNumber(e.target.value.replace(/[^0-9a-zA-Z]/g, ''))}
                            className="flex-1 outline-none text-gray-800 text-[13.5px] placeholder-gray-400 bg-transparent"
                        />
                        {citationNumber && (
                            <button onClick={() => setCitationNumber('')} className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                                <CloseCircleIcon />
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-start text-gray-500 font-bold text-[12px] py-0.5">
                    OR
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[13.5px] font-semibold text-gray-800">Last Name</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <UserBadgeIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Smith"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="flex-1 outline-none text-gray-800 text-[13.5px] placeholder-gray-400 bg-transparent"
                        />
                        {lastName && (
                            <button onClick={() => setLastName('')} className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                                <CloseCircleIcon />
                            </button>
                        )}
                    </div>
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[13.5px] font-semibold text-gray-800">Date of Birth</label>
                    <div className="flex justify-between items-center gap-2.5">
                        <input
                            type="text"
                            placeholder="MM"
                            maxLength={2}
                            value={dobMM}
                            onChange={(e) => setDobMM(e.target.value.replace(/\D/g, ''))}
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 outline-none text-gray-800 text-[13.5px] placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                        />
                        <input
                            type="text"
                            placeholder="DD"
                            maxLength={2}
                            value={dobDD}
                            onChange={(e) => setDobDD(e.target.value.replace(/\D/g, ''))}
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 outline-none text-gray-800 text-[13.5px] placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                        />
                        <input
                            type="text"
                            placeholder="YYYY"
                            maxLength={4}
                            value={dobYYYY}
                            onChange={(e) => setDobYYYY(e.target.value.replace(/\D/g, ''))}
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 outline-none text-gray-800 text-[13.5px] placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-start text-gray-500 font-bold text-[12px] py-0.5">
                    OR
                </div>

                {/* Case Number */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[13.5px] font-semibold text-gray-800">Case Number</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2.5 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <CitationQuoteIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter"
                            value={caseNumber}
                            onChange={(e) => setCaseNumber(e.target.value)}
                            className="flex-1 outline-none text-gray-800 text-[13.5px] placeholder-gray-400 bg-transparent"
                        />
                        {caseNumber && (
                            <button onClick={() => setCaseNumber('')} className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                                <CloseCircleIcon />
                            </button>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-5">
                    <div className="flex-1 flex justify-center">
                        <button onClick={handleClear} className="text-green-600 font-bold text-[14px] px-8 py-2.5 hover:bg-green-50 rounded-lg transition-colors">
                            Clear
                        </button>
                    </div>
                    <button
                        disabled={!isNextEnabled}
                        onClick={onNext}
                        className={`flex-1 font-semibold text-[14px] py-2.5 rounded-lg transition-colors text-center ${isNextEnabled ? 'bg-[#0ca13e] text-white hover:bg-green-700 cursor-pointer' : 'bg-[#e2e2e8] text-[#9a9a9a] cursor-not-allowed'}`}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
