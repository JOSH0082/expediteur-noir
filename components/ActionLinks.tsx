"use client";
import React, { useState } from 'react';

const icons = {
  download: (
    <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" x2="12" y1="15" y2="3"/>
    </svg>
  ),
  whatsapp: (
    <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
};

export default function ActionLinks() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const links = [
    { id: 'resume', icon: icons.download, text: 'Download Resume', url: '#' },
    { id: 'wa', icon: icons.whatsapp, text: 'WhatsApp', url: '#' },
    { id: 'linkedin', icon: icons.linkedin, text: 'LinkedIn', url: '#' },
  ];

  return (
    // Tombol menumpuk ke bawah (flex-col). Gunakan items-start agar sejajar kiri.
    // Di desktop (sm) kembali ke deretan horizontal (flex-row).
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:h-16">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          onMouseEnter={() => setActiveId(link.id)}
          onMouseLeave={() => setActiveId(null)}
          onClick={(e) => {
            if (activeId !== link.id) {
               e.preventDefault();
               setActiveId(link.id);
            }
          }}
          // flex-col-reverse (mobile): Teks di atas, ikon di bawah.
          // Saat aktif (mobile): Lebar tetap w-14, tinggi membesar ke atas menjadi h-36.
          // Saat aktif (desktop): Tinggi tetap, lebar memanjang ke samping sm:w-48.
          className={`group flex items-center text-background transition-all duration-300 overflow-hidden cursor-pointer flex-col-reverse sm:flex-row ${
            activeId === link.id 
              ? 'w-14 h-36 bg-accent pb-4 sm:pb-0 sm:w-48 md:w-56 sm:h-14 md:h-16 px-0 sm:px-4 md:px-5 justify-start' 
              : 'w-14 h-14 bg-foreground justify-center sm:w-16 sm:h-14 md:h-16 px-0'
          }`}
        >
          {/* Wadah Ikon */}
          <div className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
            activeId === link.id ? 'h-10 sm:h-auto sm:w-auto' : 'w-full h-full'
          }`}>
            {link.icon}
          </div>
          
          {/* Wadah Teks (Muncul di atas ikon saat vertikal karena flex-col-reverse) */}
          <span 
            className={`font-sans font-medium whitespace-nowrap overflow-hidden transition-all duration-300 text-xs sm:text-sm md:text-base ${
              activeId === link.id 
                ? 'mb-2 sm:mb-0 sm:ml-3 opacity-100 max-w-full max-h-full' 
                : 'mb-0 sm:ml-0 opacity-0 max-w-0 max-h-0'
            }`}
          >
            {/* Teks diputar vertikal agar muat di dalam kotak sempit w-14 */}
            <span className="block sm:inline [writing-mode:vertical-lr] sm:[writing-mode:horizontal-tb] rotate-180 sm:rotate-0">
              {link.text}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
