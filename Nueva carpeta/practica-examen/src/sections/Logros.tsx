import dataLogros from "@/model/data/logros.json";
import { LogrosCard } from "@/components/Main/Logros/LogrosCard";
import type { ILogro } from "@/model/interfaces/iLogros";

const Logros = () => {
    const logros = dataLogros as ILogro[];

    return (
        <section id="logros" className="bg-slate-950 py-24 px-6">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-end justify-between mb-12 border-l-4 border-yellow-400 pl-6">
                    <div>
                        <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter">
                            Palmarés <span className="text-yellow-400 text-3xl">/ History</span>
                        </h2>
                        <p className="text-gray-500 mt-2 font-bold uppercase text-xs tracking-widest">
                            Nuestra vitrina de trofeos en la RLCS
                        </p>
                    </div>
                </div>

                <LogrosCard logros={logros} />
            </div>
        </section>
    );
};

export default Logros;