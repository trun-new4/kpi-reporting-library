import './globals.css';
import type { Metadata } from 'next';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { Roboto } from 'next/font/google';

const roboto: NextFontWithVariable = Roboto({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--roboto-regular',
});

import Scene from '@ux/scene';
import Header from '@ux/header';

export const metadata: Metadata = {
  title: 'KPI Library',
  description: `Manage Presentations for your KPI's`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <div id="modals"></div>
        <Scene>
          <Header
            title="Library"
            subtitle="Browse for assets needed to report and present analysis"
          />
          {children}
        </Scene>
      </body>
    </html>
  );
}
