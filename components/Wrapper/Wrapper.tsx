export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className='h-screen w-full flex items-center justify-center'>
      {children}
    </main>
  );
}
