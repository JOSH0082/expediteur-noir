import Image from "next/image";
import headLineArt from "@/public/images/head-lineart.png";
import daVinci from "@/public/images/da-vinci.png";
import goldenRatio from "@/public/images/golden-ratio.png";
import vitruvianMan from "@/public/images/vitruvian-man.png";
import middleSelfPict from "@/public/images/middle-self-pict.png";
import namePattern from "@/public/images/name-pattern.png";
import sextantLogo from "@/public/images/sextant-logo.png";
import Navbar from "@/components/Navbar";
import StackedCard from "@/components/StackedCard";
import ActionLinks from "@/components/ActionLinks";
import AccordionGallery from '@/components/AccordionGallery'

export default function Home() {

  const items = [
    { image: middleSelfPict.src, label: 'Personal Portofolio', subLabel: 'Visit Link', link: '#' },
    { image: daVinci.src, label: 'Point Of Sales', subLabel: 'Visit Link', link: '#' },
    { image: goldenRatio.src, label: 'El Kontoldon', subLabel: 'Visit Link', link: '#' },
    { image: vitruvianMan.src, label: 'Koprasi Merah Putih', subLabel: 'Visit Link', link: '#' },
    { image: headLineArt.src, label: 'L\'Expedition', subLabel: 'Visit Link', link: '#' },
    { image: middleSelfPict.src, label: 'L\'Expedition', subLabel: 'Visit Link', link: '#' }
  ];

  return (
    <main className="py-4 md:py-6 flex flex-col gap-14 md:gap-24">
      {/* Section 1: Hero (Includes Navbar within min-h-screen) */}
      <section className="w-full min-h-screen flex flex-col justify-between relative pb-4 md:pb-6 px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
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
              <ActionLinks />
            </div>
            <div className="flex flex-col justify-start md:self-start -mt-2 md:-mt-4">
              <p className="font-playfair text-accent/85 text-sm md:text-base text-left md:text-right leading-relaxed">
                I believe that the boundaries between disciplines are merely illusions. Embracing a DaVincian philosophy, I navigate life as an explorer—refusing to be anchored to a single domain. My curiosity spans from the rigid logic of structural code to the fluid harmonies of musical improvisation and the precise strokes of visual realism. Art and engineering are not opposing forces; they are the twin lenses through which I decode, deconstruct, and reshape the world around me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Joshua Siahaan */}
      <section className="w-full relative min-h-screen flex items-center justify-center py-12 md:py-24 overflow-hidden px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 relative flex flex-col md:flex-row justify-between items-center md:items-stretch min-h-[700px]">
          
          {/* Left Area */}
          <div className="w-full md:w-1/3 flex flex-col justify-between pt-12 md:pt-24 z-10 relative">
            <div>
              <h2 className="font-playfair-display font-bold text-5xl lg:text-6xl text-foreground mb-4">
                L'Architecte
              </h2>
              <p className="font-playfair text-sm lg:text-base text-foreground/90 leading-relaxed max-w-[320px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            <div className="mt-20 md:mt-auto pb-10">
              <Image
                src={sextantLogo}
                alt="Sextant Logo"
                className="w-32 lg:w-48 h-auto object-contain"
              />
            </div>
          </div>

          {/* Center Area */}
          <div className="w-full md:w-1/3 flex justify-center items-center relative my-16 md:my-0">
            {/* Name Pattern Background */}
            <div className="absolute top-0 md:top-10 left-1/2 md:left-24 w-[280px] md:w-[380px] z-0 opacity-90 transform -translate-x-1/2 md:translate-x-0">
              <Image
                src={namePattern}
                alt="Joshua Siahaan Pattern"
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Middle Self Portrait */}
            <div className="relative z-10 w-[260px] md:w-[300px] lg:w-[320px] h-[400px] md:h-[480px] lg:h-[550px] rounded-[200px] overflow-hidden shadow-xl">
              <Image
                src={middleSelfPict}
                alt="Joshua Siahaan Portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 260px, 320px"
              />
            </div>
          </div>

          {/* Right Area */}
          <div className="w-full md:w-1/3 flex flex-col justify-end pb-12 md:pb-32 z-10 relative">
            <div className="md:ml-auto flex flex-col items-start md:items-end">
              <h2 className="font-playfair-display font-bold text-5xl lg:text-6xl text-foreground mb-4">
                L'Executeur
              </h2>
              <p className="font-playfair text-sm lg:text-base text-foreground/90 leading-relaxed max-w-[320px] text-left md:text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Da Vincian */}
      <section className="w-full relative min-h-screen flex flex-col justify-between px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
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

      {/* Section 4: L'expediton */}
      <section className="w-full relative min-h-screen">

        <div className="flex flex-col justify-center gap-20 w-full min-h-screen">
          
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-playfair-display font-semibold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[0.98] tracking-tight mb-5">L'Expedition</h2>
            <p className="font-playfair text-xs sm:text-sm lg:text-base text-foreground/90 leading-relaxed max-w-md text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          </div>

          <div className="w-full items-stretch">
            

            <AccordionGallery
              items={items}
              defaultIndex={2}
              expandRatio={0.52}
              trigger="hover"
              accentColor="#ffffff"
              overlayColor="#060010"
              textColor="#ffffff"
              grayscale
              showLabels
              duration={0.6}
              ease="power3.out"
              parallax={0.5}
              tilt={0}
              stagger={0.06}
              height={460}
              gap={1}
              radius={0}
              orientation="horizontal"
            />
          </div>
        </div>
      </section>
    </main>
  );
}