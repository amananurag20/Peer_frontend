import { CloseCircleIcon, UserBadgeIcon, CitationQuoteIcon } from './Icons';

export default function PaymentForm() {
    return (
        <div className="w-full max-w-[500px] mt-10 md:mt-[6vh] mb-[4vh]">
            <h1 className="text-[32px] md:text-[36px] tracking-tight font-medium text-gray-900 mb-2.5 text-center sm:text-left">
                Online Citation Payment
            </h1>
            <p className="text-gray-500 text-[14px] mb-6 leading-[1.6] max-w-[440px] text-center sm:text-left">
                Please review your case details carefully before proceeding.
                Payment eligibility and requirements may vary
            </p>

            <div className="flex flex-col gap-4">
                {/* Citation Number */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-semibold text-gray-800">Citation Number</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-3 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2.5 flex items-center justify-center">
                            <CitationQuoteIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter 8-12 digit no."
                            className="flex-1 outline-none text-gray-800 text-[14px] placeholder-gray-400 bg-transparent"
                        />
                        <button className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-start text-gray-500 font-bold text-[12px]">
                    OR
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-semibold text-gray-800">Last Name</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-3 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2.5 flex items-center justify-center">
                            <UserBadgeIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Smith"
                            className="flex-1 outline-none text-gray-800 text-[14px] placeholder-gray-400 bg-transparent"
                        />
                        <button className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-semibold text-gray-800">Date of Birth</label>
                    <div className="flex justify-between items-center gap-3">
                        <input
                            type="text"
                            placeholder="MM"
                            className="flex-1 border border-gray-300 rounded-lg px-3.5 py-3 outline-none text-gray-800 text-[14px] placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                            maxLength={2}
                        />
                        <input
                            type="text"
                            placeholder="DD"
                            className="flex-1 border border-gray-300 rounded-lg px-3.5 py-3 outline-none text-gray-800 text-[14px] placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                            maxLength={2}
                        />
                        <input
                            type="text"
                            placeholder="YYYY"
                            className="flex-1 border border-gray-300 rounded-lg px-3.5 py-3 outline-none text-gray-800 text-[14px] placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                            maxLength={4}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-start text-gray-500 font-bold text-[12px]">
                    OR
                </div>

                {/* Case Number */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-semibold text-gray-800">Case Number</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-3 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2.5 flex items-center justify-center">
                            <CitationQuoteIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter"
                            className="flex-1 outline-none text-gray-800 text-[14px] placeholder-gray-400 bg-transparent"
                        />
                        <button className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-6">
                    <div className="flex-1 flex justify-center">
                        <button className="text-green-600 font-bold text-[15px] px-8 py-3 hover:bg-green-50 rounded-lg transition-colors">
                            Clear
                        </button>
                    </div>
                    <button disabled className="flex-1 bg-[#e2e2e8] text-[#9a9a9a] font-semibold text-[15px] py-3 rounded-lg cursor-not-allowed transition-colors text-center">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
