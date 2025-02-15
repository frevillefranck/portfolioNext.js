export const metadata = {
  title: "Développeur Web Freelance | Fréville Franck",
  description: "Je crée des sites modernes et performants avec React, Next.js et Tailwind CSS.",
  keywords: "développement web, freelance, Next.js, React, Tailwind CSS",
  openGraph: {
    title: "Fréville Franck - Développeur Web Freelance",
    description: "Je crée des sites modernes et performants avec React, Next.js et Tailwind CSS.",
    url: "https://frevillefranck.fr",
    type: "website",
    images: [
      {
        url: "/images/logo.ico", // Image affichée sur les réseaux sociaux
        width: 500,
        height: 500,
        alt: "Fréville Franck - Développeur Web Freelance",
      },
    ],
  },
};

import { ReactNode } from 'react';
import '../styles/global.css';
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

