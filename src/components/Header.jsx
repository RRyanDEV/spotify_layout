import PaperStripCard from "@/components/PaperStripCard";
import { timeUtils } from "@/utils/timeUtils";
import Navbar from "./Navbar";
import CardArtist from "./CardArtist";
import ayaImage from "@/images/aya.jpeg";
import kmaiImage from "@/images/kmai.jpeg";
import idragonImage from "@/images/id.jpeg";
import lizzoImage from "@/images/lizzo.jpeg";

export default function Header() {
  const message = timeUtils();
  const urls = [
    {
      name: "aya",
      url: "https://open.spotify.com/embed/playlist/1hL8j95whj4vkB8bsBvBuw?utm_source=generator",
    },
    {
      name: "summer",
      url: "https://open.spotify.com/embed/playlist/1PtRswAF7Hg4tXDMH2yBgz?utm_source=generator",
    },
    {
      name: "kmai",
      url: "https://open.spotify.com/embed/playlist/0NVHHul1WDhxAQXG9FskYi?utm_source=generator",
    },
    {
      name: "imgDrag",
      url: "https://open.spotify.com/embed/playlist/3DHCIJPyGed7y6ms0mhX62?utm_source=generator",
    },
    {
      name: "game",
      url: "https://open.spotify.com/embed/playlist/7Dvkw0v54AJf05TlFpcvKV?utm_source=generator",
    },
    {
      name: "travel",
      url: "https://open.spotify.com/embed/playlist/6U3g0ETh3j3Tuo6Kq3XL2b?utm_source=generator",
    },
  ];

  const artists = [
    {
      nome: "Aya Nakamura",
      foto: ayaImage.src,
    },
    {
      nome: "Kamaitachi",
      foto: kmaiImage.src,
    },
    {
      nome: "Imagine Dragons",
      foto: idragonImage.src,
    },
    {
      nome: "Lizzo",
      foto: lizzoImage.src,
    },
  ];
  return (
    <>
      <div id="Playlist" className="flex flex-col">
        <Navbar />
        <h1 className="text-white font-extrabold text-4xl">{message}</h1>
        <div class="grid grid-rows-2 grid-flow-col w-full p-3 gap-2">
          {urls.map((card, i) => (
            <PaperStripCard key={i} src={card.url} />
          ))}
        </div>

        {/* Artistas */}
        <div id="Artists" className="flex flex-col pt-8">
          <h5 className="text-white font-extrabold text-3xl">Artist</h5>

          <div className="flex flex-wrap pt-8 justify-around">
            {artists.map((artist, i) => (
              <CardArtist nome={artist.nome} key={i} src={artist.foto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
