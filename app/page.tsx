import ClientEnhancements from "./components/ClientEnhancements";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Keshava game",
      url: "https://www.keshavagame.com/",
      logo: "https://www.keshavagame.com/logo.png",
      description: "Premium Wooden Puzzles & Brain Games for Sharp Minds",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      sameAs: [
        "https://instagram.com/keshavagame",
        "https://facebook.com/keshavagame",
        "https://youtube.com/@keshavagame",
      ],
    },
    {
      "@type": "Product",
      name: "Keshava Premium Puzzle Games Collection",
      description:
        "Keshava offers premium wooden puzzles, 3D puzzles for adults, puzzle board challenges India, and connect the dot games for brain training.",
      brand: {
        "@type": "Brand",
        name: "Keshava game",
      },
      category: "Brain training puzzle games",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: "1499",
        availability: "https://schema.org/InStock",
        url: "https://www.keshavagame.com/#shop",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are Keshava puzzles suitable for adults?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Keshava designs adult puzzle games with progressive challenge levels to improve focus, memory, and problem-solving skills.",
          },
        },
        {
          "@type": "Question",
          name: "Do you ship puzzle board challenges across India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Keshava game ships premium wooden puzzles and puzzle board challenges India-wide from Surat, Gujarat.",
          },
        },
        {
          "@type": "Question",
          name: "Can I try connect the dot games before buying?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Use the Play Free Demo section to try connect the dot games and gameplay previews online.",
          },
        },
      ],
    },
  ],
};

const cards = [
  ["wood-1", "Interlocking premium wooden puzzle tiles", "Royal Grain Wooden Puzzle", "Elegant handcrafted premium wooden puzzles to improve focus and memory games practice daily.", "Medium • Focus"],
  ["3d-2", "Complex 3D puzzle structure for adults", "Neon Cube 3D Challenge", "One of the best puzzle games for problem solving with layered 3D puzzles for adults.", "Hard • Problem-Solving"],
  ["board-3", "Puzzle board challenge with strategic moves", "Strategic Puzzle Board Arena", "Tactical puzzle board challenges India professionals enjoy for stress-free logic training.", "Medium-Hard • Strategy"],
  ["dot-4", "Connect the dot games with glowing lines", "Pulse Connect-the-Dot Quest", "Fast, rewarding connect the dot games that build attention and pattern recognition.", "Easy-Medium • Memory"],
  ["wood-5", "Premium handcrafted wooden maze puzzle", "Heritage Maze Craft", "Artisan adult puzzle games with tactile quality and progressive levels for daily brain training puzzle games.", "Medium • Patience"],
  ["3d-6", "Geometric 3D adult puzzle game", "Vertex Tower Build", "Layered 3D puzzles for adults designed to strengthen visualization and precision.", "Hard • Spatial IQ"],
  ["board-7", "Advanced puzzle board challenge setup", "Logic Board Elite", "Competitive puzzle board challenges India communities choose for weekly tournaments.", "Medium-Hard • Logic"],
  ["dot-8", "Colorful connect the dot challenge board", "Infinity Dot Trails", "Quick connect the dot games to refresh your mind in short breaks without screens overload.", "Easy • Relaxation"],
] as const;

export default function Home() {
  return (
    <>
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] rounded bg-neon px-3 py-2 text-black">Skip to content</a>
      <header id="siteHeader" className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="text-2xl font-bold tracking-wide text-white" aria-label="Keshava home">Keshava</a>
          <button id="menuBtn" type="button" className="inline-flex items-center rounded-md border border-white/20 p-2 text-white md:hidden" aria-expanded="false" aria-controls="mobileMenu" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
            {[
              ["#home", "Home"],
              ["#shop", "Shop Puzzles"],
              ["#games", "Our Games"],
              ["#benefits", "Benefits"],
              ["#insights", "Insights"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}><a className="hover:text-neon" href={href}>{label}</a></li>
            ))}
          </ul>
          <div className="hidden items-center gap-3 md:flex">
            <a href="#shop" className="rounded-full border border-neon/60 px-4 py-2 text-sm text-neon hover:bg-neon/10">Browse Collection</a>
            <a href="#games" className="rounded-full bg-violet px-4 py-2 text-sm font-semibold text-white shadow-glow hover:bg-violet/90">Play Free Demo</a>
          </div>
        </nav>
        <div id="mobileMenu" className="mx-4 hidden rounded-xl border border-white/10 bg-base/95 p-4 backdrop-blur md:hidden">
          <ul className="space-y-3 text-sm">
            {[
              ["#home", "Home"],
              ["#shop", "Shop Puzzles"],
              ["#games", "Our Games"],
              ["#benefits", "Benefits"],
              ["#insights", "Insights"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <li key={`${href}-mobile`}><a className="block rounded px-2 py-1 hover:bg-white/5" href={href}>{label}</a></li>
            ))}
          </ul>
        </div>
      </header>

      <main id="home" className="relative overflow-hidden">
        <section className="particle relative isolate min-h-screen border-b border-white/10 bg-grain">
          <div className="absolute inset-0 bg-grid bg-[size:22px_22px] opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-base" />
          <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="fade-in">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-neon">Keshava puzzles Surat</p>
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Sharpen Your Mind with Premium Puzzle Games</h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Keshava offers a premium collection of wooden puzzles, 3D puzzles, puzzle board challenges, and connect the dot games. Perfect for adults who want to improve focus, memory, and problem-solving skills while having fun.</p>
              </div>
              <div className="fade-in relative">
                <img src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=900&q=80" alt="Premium wooden puzzle game pieces on dark table" className="h-[460px] w-full rounded-2xl border border-white/10 object-cover shadow-wood" fetchPriority="high" />
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="fade-in mb-10">
            <h2 className="text-3xl font-bold">Featured Puzzle Collection</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map(([seed, alt, title, desc, detail]) => (
              <article key={seed} className="fade-in group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-neon/60 hover:shadow-glow">
                <img loading="lazy" src={`https://picsum.photos/seed/${seed}/600/420`} alt={alt} className="h-40 w-full rounded-xl object-cover" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
                <p className="mt-3 text-xs text-neon">Difficulty: {detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="benefits" className="border-y border-white/10 bg-black/30"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="fade-in text-center"><h2 className="text-3xl font-bold">Benefits of Brain Training Puzzle Games</h2></div></div></section>
        <section id="games" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="fade-in mb-10"><h2 className="text-3xl font-bold">How Our Games Work</h2></div></section>
        <section id="insights" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="fade-in mb-8"><h2 className="text-3xl font-bold">Insights for Smarter Play</h2></div></section>
        <section id="contact" className="border-t border-white/10 bg-black/30"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="fade-in"><h2 className="text-3xl font-bold">Contact & Newsletter</h2></div></div></section>
        <section id="terms" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="fade-in rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-bold">Terms and Conditions</h2></div></section>
        <section id="privacy" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"><div className="fade-in rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-bold">Privacy Policy</h2></div></section>
      </main>

      <footer className="border-t border-white/10 bg-black/60"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"><p>© <span id="year" /> Keshava game. Premium Wooden Puzzles & Brain Games for Sharp Minds.</p></div></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ClientEnhancements />
    </>
  );
}
