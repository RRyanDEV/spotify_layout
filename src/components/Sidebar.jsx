import { GoHome } from "react-icons/go";
import { BsSearch } from "react-icons/bs";

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col space-y-3 mt-3 ml-3">
        <div className="pb-6 bg-zinc-900 h-fit text-zinc-500 rounded-r-lg flex flex-col w-60">
          <div
            id="itens-bar"
            className="hover:text-white cursor-pointer flex flex-wrap items-center gap-3 font-medium py-6 px-8"
          >
            <GoHome className="active:text-white w-7 h-7" /> Home
          </div>
          <div
            id="itens-bar"
            className="hover:text-white cursor-pointer flex flex-wrap items-center gap-3 font-medium justify-start px-8"
          >
            <BsSearch className="w-7 h-7" /> Search
          </div>
        </div>

        <div id="Library" className="pb-6 bg-zinc-900 h-3/4 rounded-r-lg flex flex-col w-60">
          <div id="Titles" className="flex pt-3 flex-wrap text-white cursor-pointer font-extralight items-center justify-center">
            <ul className="flex space-x-3">
              <li className="bg-gray-600 cursor-pointer hover:text-black rounded-3xl px-2">Playlist</li>
              <li className="bg-gray-600 cursor-pointer hover:text-black rounded-3xl px-2">Albums</li>
              <li className="bg-gray-600 cursor-pointer hover:text-black rounded-3xl px-2">Artist</li>
            </ul>
          </div>
          
          <div
            id="itens-bar"
            className="text-zinc-700 flex flex-col cursor-pointer font-normal flex-wrap items-start gap-3 py-6 px-8"
          >
            <a href="https://open.spotify.com/playlist/1hL8j95whj4vkB8bsBvBuw?si=6b6dd65c78c741f5"><h6 className="hover:text-white">AYA NAKAMURA</h6></a>
            <a href="https://open.spotify.com/playlist/1PtRswAF7Hg4tXDMH2yBgz?si=5bf9dfe486834216"><h6 className="hover:text-white">SummerHits</h6></a>
            <a href="https://open.spotify.com/playlist/0NVHHul1WDhxAQXG9FskYi?si=8a925ba2029f47ef"><h6 className="hover:text-white">Kamaitachi</h6></a>
            <a href="https://open.spotify.com/playlist/3DHCIJPyGed7y6ms0mhX62?si=27289bb3b419473c"><h6 className="hover:text-white">Imagine Dragons</h6></a>
            <a href="https://open.spotify.com/playlist/7Dvkw0v54AJf05TlFpcvKV?si=0522e26de8b2415f"><h6 className="hover:text-white">GAMING</h6></a>
            <a href="https://open.spotify.com/playlist/6U3g0ETh3j3Tuo6Kq3XL2b?si=544c41885fca4e4b"><h6 className="hover:text-white">Travelling 🛫</h6></a>
          </div>
        </div>
      </div>
    </>
  );
}
