import type { ILogro } from "@/model/interfaces/iLogros";

export const LogroCard = ({ logro }: { logro: ILogro }) => {
    return (
        <div className="bg-slate-900 border border-white/5 p-6 rounded-2xl hover:bg-yellow-400 group transition-all duration-300 shadow-xl">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {logro.icon}
            </div>
            <span className="text-yellow-400 group-hover:text-black font-black text-xs uppercase tracking-widest">
                {logro.year} — {logro.category}
            </span>
            <h3 className="text-2xl font-black italic uppercase text-white group-hover:text-black mt-2 tracking-tighter">
                {logro.title}
            </h3>
            <p className="text-gray-400 group-hover:text-black/80 text-sm mt-3 leading-relaxed">
                {logro.description}
            </p>
        </div>
    );
};