"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentForm from '@/components/PaymentForm';
import ConfirmInfo from '@/components/ConfirmInfo';
import PaymentType from '@/components/PaymentType';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-white text-[#212529] font-sans antialiased">
      <Header currentStep={currentStep} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start w-full px-4 overflow-y-auto pt-[5vh]">
        <div className="w-full flex flex-col items-center pb-[8vh] justify-start">
          <div className={currentStep === 1 ? 'flex w-full justify-center' : 'hidden'}>
            <PaymentForm onNext={nextStep} />
          </div>
          <div className={currentStep === 2 ? 'flex w-full justify-center' : 'hidden'}>
            <ConfirmInfo onBack={prevStep} onNext={nextStep} />
          </div>
          {currentStep === 3 && <PaymentType onBack={prevStep} />}
        </div>
      </main>

      {/* Footer pinned to bottom */}
      <div className="w-full mt-auto bg-white z-50">
        <Footer />
      </div>
    </div>
  );
}
