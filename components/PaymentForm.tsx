import { CloseCircleIcon, UserBadgeIcon } from './Icons';

export default function PaymentForm() {
    return (
        <div className="w-full max-w-[500px] mt-8 md:mt-12">
            <h1 className="text-[28px] md:text-3xl font-medium text-gray-900 mb-1.5 text-center sm:text-left">
                Online Citation Payment
            </h1>
            <p className="text-gray-500 text-[13px] mb-5 leading-normal max-w-[420px] text-center sm:text-left">
                Please review your case details carefully before proceeding.
                Payment eligibility and requirements may vary
            </p>

            <div className="flex flex-col gap-3">
                {/* Citation Number */}
                <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-gray-800">Citation Number</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <span className="font-serif text-[16px] leading-none font-bold italic mr-1">99</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter 8-12 digit no."
                            className="flex-1 outline-none text-gray-800 text-[13px] placeholder-gray-400 bg-transparent"
                        />
                        <button className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-start text-gray-500 font-semibold text-[11px]">
                    OR
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-gray-800">Last Name</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2">
                            <UserBadgeIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Smith"
                            className="flex-1 outline-none text-gray-800 text-[13px] placeholder-gray-400 bg-transparent"
                        />
                        <button className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-gray-800">Date of Birth</label>
                    <div className="flex justify-between items-center gap-2.5">
                        <input
                            type="text"
                            placeholder="MM"
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none text-gray-800 text-[13px] placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                            maxLength={2}
                        />
                        <input
                            type="text"
                            placeholder="DD"
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none text-gray-800 text-[13px] placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                            maxLength={2}
                        />
                        <input
                            type="text"
                            placeholder="YYYY"
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none text-gray-800 text-[13px] placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                            maxLength={4}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-start text-gray-500 font-semibold text-[11px]">
                    OR
                </div>

                {/* Case Number */}
                <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-gray-800">Case Number</label>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white relative focus-within:border-gray-500 transition-colors">
                        <div className="text-gray-400 mr-2 flex items-center justify-center">
                            <span className="font-serif text-[16px] leading-none font-bold italic mr-1">99</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter"
                            className="flex-1 outline-none text-gray-800 text-[13px] placeholder-gray-400 bg-transparent"
                        />
                        <button className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                            <CloseCircleIcon />
                        </button>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-3">
                    <div className="flex-1 flex justify-center">
                        <button className="text-green-600 font-bold text-[13px] px-8 py-2 hover:bg-green-50 rounded-lg transition-colors">
                            Clear
                        </button>
                    </div>
                    <button disabled className="flex-1 bg-[#e2e2e8] text-[#9a9a9a] font-semibold text-[13px] py-2 rounded-lg cursor-not-allowed transition-colors text-center">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
