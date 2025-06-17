export default function ConsoleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <main className="flex flex-col w-full h-full min-h-screen px-4 py-3 gap-5 items-start justify-start">
        <div className="w-full h-[90vh] flex items-center justify-center rounded-md">
          {children}
        </div>
      </main>
    </div>
  );
}
