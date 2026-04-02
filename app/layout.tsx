import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition">

        <Navbar />

        <div className="pt-24">
          {children}
        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/923177153250"
          className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
        >
          Chat
        </a>

      </body>
    </html>
  );
}