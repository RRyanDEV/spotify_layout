import Image from "next/image";

export default function CardArtist({ nome, key, src, ...props }) {
  return (
    <div key={key}>
      <div className="flex cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 flex-col justify-center p-3 rounded-lg bg-stone-900">
        <Image className="flex shadow-black shadow-md" width={128} height={128} src={src} />
        <div className="flex flex-col text-white mt-2">
          <h3>{nome}</h3>
          <p className="text-thin text-gray-500 opacity-60">By Ryan Gomes</p>
        </div>
      </div>
    </div>
  );
}
