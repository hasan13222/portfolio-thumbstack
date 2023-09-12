import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Web Developer- Jamil",
  description: "React/Next Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="full_container portfolio">
          <Header />
          <main className="main">
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
