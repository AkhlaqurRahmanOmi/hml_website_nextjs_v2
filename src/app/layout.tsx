import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Global/navbar";
// import { Footer } from "@/components/Global/footer";
import clsx from "clsx";
import { fontDMSans, fontNightWindSent, fontOpenSans, fontRoboto, fontWorkSans } from "@/utils/fonts";
import RouteLoader from "@/utils/RouteLoader";

export const metadata: Metadata = {
  title: "HML",
  description: "Heavy Marine Logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(
        "min-h-screen bg-background font-[family-name:var(--font-opensans)] antialiased",
        fontOpenSans.variable, fontRoboto.variable, fontWorkSans.variable, fontDMSans.variable, fontNightWindSent.variable
      )}>
        <RouteLoader>
          <Navbar />
          {children}
        </RouteLoader>

        {/* Required for Portal to mount modals */}
        <div id="modal-root" />      </body>
    </html>
  );
}
