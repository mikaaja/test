export const metadata = {
  title: "Next.js + HTML + Tailwind",
  description: "Contoh deploy ke Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
