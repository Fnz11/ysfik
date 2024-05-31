import SolanaProvider from "@/components/Projects/Solana/SolanaProvider";
import "./solana.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SolanaProvider>
        {children}
      </SolanaProvider>
    </>
  );
}
