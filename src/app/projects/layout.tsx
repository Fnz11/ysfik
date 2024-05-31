import FloatContact from "@/components/FloatContact/FloatContact";
import Navbar from "@/components/Projects/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`min-h-screen bg-[#060606] bg-grid-white/[0.03] overflow-hiddenw-screen flex flex-col items-center justify-center text-white text-base md:text-lg relative pt-20 overflow-hidden`}
    >
      <Navbar />
      {children}
    </div>
  );
}
