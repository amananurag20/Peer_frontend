import Image from "next/image";

// SVG Icons
const ReceiptIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
    <path d="M16 14h.01" />
    <path d="M8 10h8" />
    <path d="M8 14h4" />
  </svg>
);

const UserBadgeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="8" cy="12" r="2" />
    <path d="M13 10h6" />
    <path d="M13 14h6" />
  </svg>
);

const CloseCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-5 max-w-[1400px] mx-auto bg-white sticky top-0 z-50">
        <div className="flex items-center min-w-[80px]">
          {/* Logo */}
          <Image src="/Vector.svg" alt="Logo" width={40} height={40} className="w-auto h-auto" priority />
        </div>

        {/* Stepper */}
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

        <div className="flex items-center min-w-[80px] justify-end">
          <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors text-gray-700">
            English <ChevronDownIcon />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full px-4 pt-12 pb-24">
        <div className="max-w-[500px] w-full mt-4">
          <h1 className="text-4xl font-normal text-gray-900 mb-3 text-center sm:text-left">Online Citation Payment</h1>
          <p className="text-gray-500 text-sm mb-10 leading-[1.6] max-w-[420px] text-center sm:text-left">
            Please review your case details carefully before proceeding.
            Payment eligibility and requirements may vary
          </p>

          <div className="flex flex-col gap-6">
            {/* Citation Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-800">Citation Number</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 bg-white relative focus-within:border-gray-500 transition-colors">
                <div className="text-gray-400 mr-3 flex items-center justify-center">
                  <span className="font-serif text-xl leading-none font-bold italic mr-1">99</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter 8-12 digit no."
                  className="flex-1 outline-none text-gray-800 text-sm placeholder-gray-400 bg-transparent"
                />
                <button className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                  <CloseCircleIcon />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-start text-gray-500 font-semibold text-sm">
              OR
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-800">Last Name</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 bg-white relative focus-within:border-gray-500 transition-colors">
                <div className="text-gray-400 mr-3">
                  <UserBadgeIcon />
                </div>
                <input
                  type="text"
                  placeholder="Smith"
                  className="flex-1 outline-none text-gray-800 text-sm placeholder-gray-400 bg-transparent"
                />
                <button className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                  <CloseCircleIcon />
                </button>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-800">Date of Birth</label>
              <div className="flex justify-between items-center gap-3">
                <input
                  type="text"
                  placeholder="MM"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none text-gray-800 text-sm placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                  maxLength={2}
                />
                <input
                  type="text"
                  placeholder="DD"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none text-gray-800 text-sm placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                  maxLength={2}
                />
                <input
                  type="text"
                  placeholder="YYYY"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none text-gray-800 text-sm placeholder-gray-400 bg-white focus:border-gray-500 transition-colors text-center"
                  maxLength={4}
                />
              </div>
            </div>

            <div className="flex items-center justify-start text-gray-500 font-semibold text-sm pt-1">
              OR
            </div>

            {/* Case Number */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-800">Case Number</label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 bg-white relative focus-within:border-gray-500 transition-colors">
                <div className="text-gray-400 mr-3 flex items-center justify-center">
                  <span className="font-serif text-xl leading-none font-bold italic mr-1">99</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter"
                  className="flex-1 outline-none text-gray-800 text-sm placeholder-gray-400 bg-transparent"
                />
                <button className="text-gray-300 hover:text-gray-500 ml-2 transition-colors">
                  <CloseCircleIcon />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex-1 flex justify-center">
                <button className="text-green-600 font-bold text-sm px-8 py-3 hover:bg-green-50 rounded-lg transition-colors">
                  Clear
                </button>
              </div>
              <button disabled className="flex-1 bg-[#e2e2e8] text-[#9a9a9a] font-semibold text-sm py-3 rounded-lg cursor-not-allowed transition-colors text-center">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-8 mt-auto border-t border-gray-100 max-w-[1400px] mx-auto gap-6 sm:gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-500 font-medium">
          Powered by
          <Image src="/logo.png" alt="GROgov" width={90} height={28} className="h-7 w-auto object-contain" />
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-2 text-[13px] text-gray-400 font-bold">
          <span>3630 Camp Circle Decatur, GA 30032</span>
          <span>404-294-2099</span>
          <a href="mailto:311CCC@dekalbcountyga.gov" className="hover:text-gray-600 transition-colors">311CCC@dekalbcountyga.gov</a>
        </div>
      </footer>
    </div>
  );
}
