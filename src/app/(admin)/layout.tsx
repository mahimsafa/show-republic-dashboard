
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div style={{overflowY: 'auto', height: '100vh'}}>
        {children}
      </div>

  );
}
