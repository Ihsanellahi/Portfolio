import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black text-white transition-colors">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="pt-24">
          {children}
        </main>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/923177153250"
          target="_blank"
          className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 transition text-white px-4 py-3 rounded-full shadow-lg z-50"
        >
          Chat
        </a>

      </body>
    </html>
  );
}