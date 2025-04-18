import './global.css';

export const metadata = {
  title: 'Welcome to Weather app!',
  description: 'Real-time weather information',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
