import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog page",
  description: "Blog page with slug",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col max-w-[1440px] m-auto py-6">{children}</div>
  );
}
