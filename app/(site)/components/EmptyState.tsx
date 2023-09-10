import Image from "next/image";
import travoltaGif from "@/public/travolta.gif";

type stateType = {
  value: string;
  icon?: React.ReactNode;
};

export default function EmptyState({ value, icon }: stateType) {
  return (
    <div className="w-full flex flex-col items-center text-center dark:bg-dark dark:border-light dark:text-light/75 bg-zinc-100 border border-dashed dark:border-zinc-700 border-zinc-200 rounded-md px-6 py-8">
      <div className="mb-6 text-4xl text-zinc-500 mt-20 lg:mt-0">
        {icon || (
          <Image
            width={200}
            src={travoltaGif}
            alt="Travolta confused searching gif"
            priority
          />
        )}
      </div>
      <h3 className="   font-bold tracking-tight text-xl mb-3">
        Nada por aquí
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 ml-4 max-w-xs">
        Aún no hay {value.toLowerCase()} publicados. Vuelve en otro momento.
      </p>
    </div>
  );
}
