"use client";
import React, { useState } from 'react';

const icons = {
  download: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" x2="12" y1="15" y2="3"/>
    </svg>
  ),
  whatsapp: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <div className="flex flex-row gap-4 items-center h-16">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          onMouseEnter={() => setActiveId(link.id)}
          onMouseLeave={() => setActiveId(null)}
          onClick={(e) => {
            // For mobile tap: if not active, prevent default link navigation and expand instead
            if (activeId !== link.id) {
               e.preventDefault();
               setActiveId(link.id);
            }
          }}
          className={`group flex items-center justify-start text-background rounded-full h-14 md:h-16 transition-all duration-300 overflow-hidden cursor-pointer ${
            activeId === link.id 
              ? 'w-48 md:w-56 bg-accent px-4 md:px-5' 
              : 'w-14 md:w-16 bg-foreground px-0 justify-center'
          }`}
        >
          <div className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 ${activeId === link.id ? '' : 'w-full'}`}>
            {link.icon}
          </div>
          <span 
            className={`font-sans font-medium whitespace-nowrap overflow-hidden transition-all duration-300 text-sm md:text-base ${
              activeId === link.id ? 'ml-3 opacity-100 max-w-full' : 'ml-0 opacity-0 max-w-0'
            }`}
          >
            {link.text}
          </span>
        </a>
      ))}
    </div>
  );
}
