import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t border-gray-200 max-w-[1400px] mx-auto gap-4 md:gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                Powered by
                <Image src="/logo.png" alt="GROgov" width={80} height={25} className="h-6 w-auto object-contain" />
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-1 text-[12px] md:text-[13px] text-gray-400 font-bold">
                <span>3630 Camp Circle Decatur, GA 30032</span>
                <span>404-294-2099</span>
                <a href="mailto:311CCC@dekalbcountyga.gov" className="hover:text-gray-600 transition-colors">
                    311CCC@dekalbcountyga.gov
                </a>
            </div>
        </footer>
    );
}
