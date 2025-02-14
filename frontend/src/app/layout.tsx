// src/app/layout.tsx
import { ReactNode } from 'react';
import '../styles/global.css';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr"> 
      <body>
        <header>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
