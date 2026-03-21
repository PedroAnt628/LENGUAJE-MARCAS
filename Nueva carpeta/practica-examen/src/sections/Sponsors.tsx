import sponsors from '@/model/data/sponsors.json';

export default function Sponsors() {
  const logos = sponsors as string[];

  return (
    <section id="sponsors" className="py-16 bg-slate-900 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 hover:opacity-100 transition-opacity">
          {logos.map(logo => (
            <span key={logo} className="text-2xl font-black italic tracking-tighter text-white">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}