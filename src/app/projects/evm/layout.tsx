import EVMProvider from "@/components/Projects/EVM/EVMProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <EVMProvider>{children}</EVMProvider>
    </>
  );
}
