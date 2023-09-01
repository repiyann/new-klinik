import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <header className="w-full z-10 shadow-md fixed bg-white">
      <nav className="max-w-[1440px] flex justify-between items-center px-32 py-3">
        <Link href="" className="flex justify-center items-center">
          <p className="ml-2 text-2xl font-semibold"> <FontAwesomeIcon
            icon={faHeartPulse}
            size="xl"
            style={{ color: "#16a085" }}
          /> Klinik Sumber Sehat </p>
        </Link>
        <ul className="flex items-center space-x-6">
          <li className="block py-2 pl-3 pr-4">
            <a href="#home" className="text-lg text-[#16a085]">
              {" "}
              Home{" "}
            </a>
          </li>
          <li className="block py-2 pl-3 pr-4">
            <a href="" className="text-lg hover:text-[#16a085]">
              {" "}
              Layanan{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: "#16a085" }}
              />
            </a>
          </li>
          <li className="block py-2 pl-3 pr-4">
            <a href="#about" className="text-lg hover:text-[#16a085]">
              {" "}
              Tentang Kami{" "}
            </a>
          </li>
          <li className="block py-2 pl-3">
            <button className="bg-[#16a085] text-white text-lg border-white rounded-xl px-2 py-1 hover:bg-[#0c5a4a]">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
