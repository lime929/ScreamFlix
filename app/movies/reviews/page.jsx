import App from '../../../App';
export const metadata = {
  title: 'Reviews | ScreamFlix',
  description: 'Learn how ScreamFlix helps horror fans discover, discuss, and recommend great movies.',
};
export default function ReviewsPage() {
    return (
        <>
         <main className="min-h-screen bg-[#0f0e0e]/80 px-4 pb-24 text-[#eeeeee] md:px-8">
         <App />
        </main>
        </>
    );
}
