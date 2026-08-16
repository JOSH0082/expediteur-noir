import Image from "next/image";
import headLineArt from "@/public/images/head-lineart.png";
import daVinci from "@/public/images/da-vinci.png";
import goldenRatio from "@/public/images/golden-ratio.png";
import vitruvianMan from "@/public/images/vitruvian-man.png";
import Navbar from "@/components/Navbar";
import StackedCard from "@/components/StackedCard";

export default function Home() {
  return (
    <main className="px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-48 py-4 md:py-6 flex flex-col gap-14 md:gap-24">
      {/* Section 1: Hero (Includes Navbar within min-h-screen) */}
      <section className="w-full min-h-screen flex flex-col justify-between relative pb-4 md:pb-6">
        {/* Navigation Bar */}
        <Navbar activeItem="Home" />

        {/* Hero Content Wrapper */}
        <div className="flex-1 flex flex-col relative gap-6 pt-2">
          {/* Background Lineart */}
          <div className="absolute inset-0 z-[-1] flex justify-center items-center pointer-events-none opacity-80">
            <Image
              src={headLineArt}
              alt="Hero Line Art"
              className="h-auto w-auto max-w-[320px] sm:max-w-[450px] lg:max-w-[560px]"
              priority
            />
          </div>

          {/* Top Row: Intro Philosophy (closer to headline) + Author Card Slot (higher up) */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 pt-2">
            <div className="w-full md:w-1/2 flex flex-col justify-end md:self-end pt-4 md:pt-10">
              <p className="font-playfair text-foreground/70 text-sm md:text-base leading-relaxed">
                I believe that the boundaries between disciplines are merely illusions. Embracing a DaVincian philosophy, I navigate life as an explorer—refusing to be anchored to a single domain. My curiosity spans from the rigid logic of structural code to the fluid harmonies of musical improvisation and the precise strokes of visual realism. Art and engineering are not opposing forces; they are the twin lenses through which I decode, deconstruct, and reshape the world around me.
              </p>
            </div>
            <div className="self-end md:self-start pr-4 pt-2 md:pr-0">
              <StackedCard className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48">
                <span className="text-sm font-sans mb-1 opacity-90">By</span>
                <h2 className="font-playfair-display text-2xl sm:text-3xl font-bold leading-snug">
                  Joshua <br />
                  Siahaan
                </h2>
              </StackedCard>
            </div>
          </div>

          {/* Middle Row: Main Tagline */}
          <div className="py-2 md:py-4 text-center">
            <h1 className="font-playfair-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[96px] xl:text-[112px] leading-tight tracking-tight text-foreground">
              Limité, Lié, et <span className="text-accent">Deviént.</span>
            </h1>
          </div>

          {/* Bottom Row: Story (bottom left) & Secondary Philosophy Text (higher right, closer to tagline) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 pb-2">
            <div className="flex flex-col justify-end md:self-end">
              <p className="font-playfair text-foreground/70 text-sm md:text-base leading-relaxed">
                Every living creature has it’s own story, these are mine. Not that interesting, yet worth a shot. This whole page might seems pretentious, I always wonder how people could make such a beautiful but pretentious web page.
              </p>
            </div>
            <div className="flex flex-col justify-start md:self-start -mt-2 md:-mt-4">
              <p className="font-playfair text-accent/85 text-sm md:text-base text-left md:text-right leading-relaxed">
                I believe that the boundaries between disciplines are merely illusions. Embracing a DaVincian philosophy, I navigate life as an explorer—refusing to be anchored to a single domain. My curiosity spans from the rigid logic of structural code to the fluid harmonies of musical improvisation and the precise strokes of visual realism. Art and engineering are not opposing forces; they are the twin lenses through which I decode, deconstruct, and reshape the world around me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Da Vincian */}
      <section className="w-full relative min-h-screen flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen w-full items-stretch">
          {/* Left Column: Leonardo Da Vinci Portrait */}
          <div className="lg:col-span-5 relative w-full min-h-[450px] lg:min-h-full overflow-hidden">
            <Image
              src={daVinci}
              alt="Leonardo da Vinci portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Right Column: Content and Diagrams */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
            {/* Top Row: Title + Intro Text & Vitruvian Man */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              {/* Left side: Heading & Paragraph */}
              <div className="sm:col-span-7 flex flex-col justify-start">
                <h2 className="font-playfair-display font-semibold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[0.98] tracking-tight mb-5">
                  Da<br />Vincian
                </h2>
                <p className="font-playfair text-xs sm:text-sm lg:text-base text-foreground/90 leading-relaxed max-w-md">
                  Too many interests to choose from, but with little time or ability to master them all, modern humans usually settle for merely admiring the products of the Renaissance. Not a fan of idle daydreaming, I just happen to take a few shots at copying god's masterpiece.
                </p>
              </div>

              {/* Right side: Vitruvian Man Sketch */}
              <div className="sm:col-span-5 flex justify-center sm:justify-end items-start">
                <div className="w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[240px]">
                  <Image
                    src={vitruvianMan}
                    alt="Vitruvian Man line art"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row: Golden Ratio Nautilus Spiral Diagram */}
            <div className="w-full flex justify-end items-end mt-auto">
              <div className="w-full max-w-[620px]">
                <Image
                  src={goldenRatio}
                  alt="Golden Ratio Fibonacci diagram"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}