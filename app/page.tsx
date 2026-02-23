import Header from '../components/Header';
import PaymentForm from '../components/PaymentForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh] overflow-hidden bg-white text-gray-900 font-sans">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full px-4 pt-4 md:pt-[2vh] overflow-y-auto">
        <PaymentForm />
      </main>

      {/* Footer pinned to bottom */}
      <div className="w-full mt-auto bg-white z-50">
        <Footer />
      </div>
    </div>
  );
}
