import React from "react";

interface StackedCardProps {
  children: React.ReactNode;
  className?: string;
  cardBg?: string;
  shadowBg?: string;
}

export default function StackedCard({
  children,
  className = "w-48 h-48",
  cardBg = "bg-accent text-background",
  shadowBg = "bg-foreground",
}: StackedCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Offset shadow card layer */}
      <div
        className={`absolute inset-0 ${shadowBg} translate-x-4 -translate-y-4 shadow-[8px_8px_15px_rgba(0,0,0,0.15)]`}
        aria-hidden="true"
      />
      {/* Main slotted content card layer */}
      <div className={`absolute inset-0 ${cardBg} z-10 flex flex-col justify-end p-6`}>
        {children}
      </div>
    </div>
  );
}
