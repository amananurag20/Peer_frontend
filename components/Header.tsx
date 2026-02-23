import Image from 'next/image';
import { ChevronDownIcon } from './Icons';
import Stepper from './Stepper';

interface HeaderProps {
    currentStep?: number;
}

const Header = ({ currentStep }: HeaderProps) => {
    return (
        <header className="w-full flex items-center justify-between px-6 py-6 max-w-[1400px] mx-auto bg-white z-50">
            <div className="flex items-center min-w-[100px]">
                {/* Logo */}
                <div className="transform scale-[1.25] origin-left ml-2">
                    <Image src="/Vector.svg" alt="Logo" width={40} height={40} className="w-auto h-auto" priority />
                </div>
            </div>

            {/* Stepper */}
            <Stepper currentStep={currentStep} />

            <div className="flex items-center min-w-[100px] justify-end">
                <button className="flex items-center gap-1.5 border border-[#ced4da] rounded-xl px-4 py-2 text-[14px] font-semibold hover:bg-gray-50 transition-colors text-[#495057]">
                    English <ChevronDownIcon />
                </button>
            </div>
        </header>
    );
};

export default Header;
