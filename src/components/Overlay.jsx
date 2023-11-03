import Header from "./Header";
import Navbar from "./Navbar";

export default function Overlay() {
  return (
    <>
    <div className="flex flex-col w-screen space-y-3">
      <Navbar/>
      <Header/>
      </div>
    </>
  );
}
