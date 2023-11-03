import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { PiUsersThreeFill } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import localImage from "@/images/usericon.jpeg";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div
        id="principal"
        className="flex flex-wrap justify-between w-full mt-3"
      >
        <div
          id="navegation"
          className="flex cursor-pointer items-center justify-center flex-wrap p-3 gap-3"
        >
          <div id="LeftNav" className="flex items-center justify-center">
            <BiChevronLeft
              className={`w-7 h-7 ${styles.colorIcon} bg-stone-900 rounded-full`}
            />
          </div>

          <div
            id="RightNav"
            className="flex items-center cursor-not-allowed justify-center opacity-70"
          >
            <BiChevronRight
              className={`w-7 h-7 ${styles.colorIcon} bg-stone-900 rounded-full`}
            />
          </div>
        </div>

        <div
          id="UserNav"
          className="flex cursor-pointer items-center justify-center flex-wrap p-3 gap-3"
        >
          <CiBellOn
            className={`w-7 h-7 ${styles.colorIcon} bg-stone-900 p-1 rounded-full`}
          />
          <PiUsersThreeFill
            className={`w-7 h-7 ${styles.colorIcon} bg-stone-900 p-1 rounded-full`}
          />
          <a href="https://open.spotify.com/user/12184959699?si=95ccf3e13d8a4271">
            <div className={`flex w-7 h-7 bg-stone-900 p-1 rounded-full`}>
              <Image
                className="flex justify-center items-center h-auto rounded-lg"
                src={localImage}
                alt="Picture of the author"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
