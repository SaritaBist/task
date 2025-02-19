import type { Metadata } from "next";


import {ColorSchemeScript, MantineProvider} from "@mantine/core";
import '@mantine/core/styles.css';
import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">

      <body>

      <MantineProvider>
          {children}
      </MantineProvider>
      </body>
      </html>
  );
}
