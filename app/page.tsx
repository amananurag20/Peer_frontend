"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentForm from '@/components/PaymentForm';
import ConfirmInfo from '@/components/ConfirmInfo';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-white text-[#212529] font-sans antialiased">
      <Header currentStep={currentStep} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4 overflow-y-auto">
        <div className="w-full flex flex-col items-center pb-[8vh]">
          <div className={currentStep === 1 ? 'flex w-full justify-center' : 'hidden'}>
            <PaymentForm onNext={nextStep} />
          </div>
          {currentStep === 2 && <ConfirmInfo onBack={prevStep} />}
        </div>
      </main>

      {/* Footer pinned to bottom */}
      <div className="w-full mt-auto bg-white z-50">
        <Footer />
      </div>
    </div>
  );
}
