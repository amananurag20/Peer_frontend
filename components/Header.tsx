import Image from 'next/image';
import { ChevronDownIcon } from './Icons';
import Stepper from './Stepper';

const Header = () => {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto bg-white z-50">
            <div className="flex items-center min-w-[80px]">
                {/* Logo */}
                <Image src="/Vector.svg" alt="Logo" width={40} height={40} className="w-auto h-auto" priority />
            </div>

            {/* Stepper */}
            <Stepper />

            <div className="flex items-center min-w-[80px] justify-end">
                <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors text-gray-700">
                    English <ChevronDownIcon />
                </button>
            </div>
        </header>
    );
};

export default Header;
