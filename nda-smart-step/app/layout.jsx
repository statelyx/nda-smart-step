export const metadata = {
  title: "NDA Smart Step",
  description: "Smart educational access portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background-light dark:bg-background-dark antialiased">
        {children}
      </body>
    </html>
  );
}
