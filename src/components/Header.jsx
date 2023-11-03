import PaperStripCard from "@/components/PaperStripCard";
import { timeUtils } from "@/utils/timeUtils";

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
  return (
    <>
      <div id="Principal" className="flex flex-col">
        <h1 className="text-white font-extrabold text-4xl">{message}</h1>
        <div class="grid grid-rows-2 grid-flow-col w-full p-3 gap-2">
          <PaperStripCard cards={urls} />
        </div>
      </div>
    </>
  );
}