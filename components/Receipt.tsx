import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { DownloadIcon, EmailOutlineIcon, PrinterIcon } from './Icons';

export default function Receipt() {
    const receiptRef = useRef<HTMLDivElement>(null);

    const handleDownloadPDF = async () => {
        if (!receiptRef.current) return;

        try {
            const canvas = await html2canvas(receiptRef.current, {
                scale: 2,
                useCORS: true,
                ignoreElements: (element) => element.classList.contains('hide-on-print')
            });
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('Payment_Receipt.pdf');
        } catch (error) {
            console.error('Error generating PDF', error);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div ref={receiptRef} className="w-full max-w-[500px] mb-4 bg-white p-2">
            <h1 className="text-[32px] md:text-[36px] tracking-tight font-medium text-[#25282B] mb-8 text-center sm:text-left">
                Receipt
            </h1>

            {/* Transaction Details */}
            <div className="mb-8">
                <h2 className="text-[#868e96] font-bold text-[14px] md:text-[14.5px] mb-4">
                    Transaction Details
                </h2>
                <div className="flex flex-col gap-3.5">
                    <div className="flex justify-between items-start text-[13.5px]">
                        <span className="font-semibold text-[#25282B]">Name</span>
                        <span className="text-[#6c757d] font-medium">Sarah Smith</span>
                    </div>
                    <div className="flex justify-between items-start text-[13.5px]">
                        <span className="font-semibold text-[#25282B]">Card No.</span>
                        <span className="text-[#6c757d] font-medium">XXXX XXXX XXXX 2355</span>
                    </div>
                    <div className="flex justify-between items-start text-[13.5px]">
                        <span className="font-semibold text-[#25282B]">Transaction ID</span>
                        <span className="text-[#6c757d] font-medium">446546546</span>
                    </div>
                    <div className="flex justify-between items-start text-[13.5px]">
                        <span className="font-semibold text-[#25282B]">Service Fee ID</span>
                        <span className="text-[#6c757d] font-medium">446546545</span>
                    </div>
                    <div className="flex justify-between items-start text-[13.5px]">
                        <span className="font-semibold text-[#25282B]">Payment Date</span>
                        <span className="text-[#6c757d] font-medium">28-07-2025, 6:20 PM</span>
                    </div>
                    <div className="flex justify-between items-start text-[13.5px]">
                        <span className="font-semibold text-[#25282B]">Payment Method</span>
                        <span className="text-[#6c757d] font-medium">Credit Card</span>
                    </div>
                </div>
            </div>

            {/* Citation Information */}
            <div className="mb-8">
                <h2 className="text-[#868e96] font-bold text-[14px] md:text-[14.5px] mb-4">
                    Citation Information
                </h2>
                <div className="flex flex-col gap-3.5">
                    <div className="flex justify-between items-start text-[13.5px]">
                        <span className="font-semibold text-[#25282B]">Citation Number</span>
                        <span className="text-[#6c757d] font-medium">764546546</span>
                    </div>
                    <div className="flex justify-between items-start text-[13.5px]">
                        <span className="font-semibold text-[#25282B]">Location</span>
                        <span className="text-[#6c757d] font-medium">1234 Main Street, LA</span>
                    </div>
                </div>
            </div>

            {/* Payment Breakdown */}
            <div className="mb-6">
                <h2 className="text-[#868e96] font-bold text-[14px] md:text-[14.5px] mb-4">
                    Payment Breakdown
                </h2>
                <div className="flex flex-col gap-3.5 mb-5">
                    <div className="flex justify-between items-start text-[13.5px]">
                        <span className="font-semibold text-[#25282B]">Citation Fine</span>
                        <span className="text-[#6c757d] font-medium">$101.25</span>
                    </div>
                    <div className="flex justify-between items-start text-[13.5px]">
                        <span className="font-semibold text-[#25282B]">Service Fee</span>
                        <span className="text-[#6c757d] font-medium">$15.00</span>
                    </div>
                </div>

                <div className="h-px bg-[#f1f3f5] w-full mb-5"></div>

                <div className="flex justify-between items-center">
                    <span className="font-bold text-[#25282B] text-[14px]">Total Amount Paid</span>
                    <span className="font-bold text-[#25282B] text-[15px]">$116.25</span>
                </div>
            </div>

            {/* Actions */}
            <div className="hide-on-print print:hidden flex flex-col sm:flex-row gap-3 mt-10">
                <button onClick={handleDownloadPDF} className="flex-1 flex items-center justify-center gap-2 border border-[#ced4da] bg-white text-[#25282B] font-bold text-[13.5px] py-2.5 rounded-[8px] hover:bg-gray-50 transition-colors">
                    <DownloadIcon />
                    <span>Download PDF</span>
                </button>
                <button className="flex-1 max-w-[120px] flex items-center justify-center gap-2 border border-[#ced4da] bg-white text-[#25282B] font-bold text-[13.5px] py-2.5 rounded-[8px] hover:bg-gray-50 transition-colors">
                    <EmailOutlineIcon />
                    <span>Email</span>
                </button>
                <button onClick={handlePrint} className="flex-1 max-w-[120px] flex items-center justify-center gap-2 bg-[#1aa240] hover:bg-green-700 text-white font-bold text-[13.5px] py-2.5 rounded-[8px] transition-colors">
                    <PrinterIcon />
                    <span>Print</span>
                </button>
            </div>
        </div>
    );
}
