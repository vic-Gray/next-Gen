import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Next Gen | Empowering Campus Development",
  description:
    "A modern platform for students to develop skills, access mentorship, attend events, and earn certifications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
