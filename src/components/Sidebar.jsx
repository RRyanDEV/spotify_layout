import { GoHomeFill } from "react-icons/Go";
import { BsSearch } from "react-icons/Bs";

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col space-y-3 mt-3 ml-3">
        <div className="pb-6 bg-zinc-900 h-fit text-zinc-500 cursor-pointer rounded-r-lg flex flex-col w-60">
          <div
            id="itens-bar"
            className="hover:text-white flex flex-wrap items-center gap-3 font-semibold py-6 px-8"
          >
            <GoHomeFill className="active:text-white w-8 h-8" /> Home
          </div>
          <div
            id="itens-bar"
            className="hover:text-white flex flex-wrap items-center gap-3 font-semibold justify-start px-8"
          >
            <BsSearch className="w-8 h-8" /> Search
          </div>
        </div>

        <div id="Library" className="pb-6 cursor-pointer bg-zinc-900 h-3/4 rounded-r-lg flex flex-col w-60">
          <div id="Titles" className="flex pt-3 flex-wrap text-white items-center justify-center">
            <ul className="flex space-x-3">
              <li className="bg-gray-600 cursor-pointer hover:text-black rounded-3xl px-2">Playlist</li>
              <li className="bg-gray-600 cursor-pointer hover:text-black rounded-3xl px-2">Albuns</li>
              <li className="bg-gray-600 cursor-pointer hover:text-black rounded-3xl px-2">Artist</li>
            </ul>
          </div>
          
          <div
            id="itens-bar"
            className="text-zinc-700 flex cursor-pointer flex-wrap items-center gap-3 font-semibold py-6 px-8"
          >
            <a href="https://open.spotify.com/playlist/1hL8j95whj4vkB8bsBvBuw?si=6b6dd65c78c741f5"><h6 className="hover:text-white">AYA NAKAMURA</h6></a>
            <a href="https://open.spotify.com/playlist/1PtRswAF7Hg4tXDMH2yBgz?si=5bf9dfe486834216"><h6 className="hover:text-white">SummerHits</h6></a>
            <a href="https://open.spotify.com/playlist/0NVHHul1WDhxAQXG9FskYi?si=8a925ba2029f47ef"><h6 className="hover:text-white">Kamaitachi</h6></a>
            <a href="https://open.spotify.com/playlist/3DHCIJPyGed7y6ms0mhX62?si=27289bb3b419473c"><h6 className="hover:text-white">Imagine Dragons</h6></a>
            <a href="https://open.spotify.com/playlist/7Dvkw0v54AJf05TlFpcvKV?si=0522e26de8b2415f"><h6 className="hover:text-white">GAMING</h6></a>
          </div>
        </div>
      </div>
    </>
  );
}
