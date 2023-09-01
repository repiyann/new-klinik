import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { faHeartPulse, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-start-1 col-end-1">
          <p className="text-xl font-semibold">
            <FontAwesomeIcon
              icon={faHeartPulse}
              size="lg"
              style={{ color: "#16a085" }}
              className="mr-1"
            />
            Klinik Sumber Sehat
          </p>
          <p className="mt-2">
            Aplikasi atur janji temu dokter dengan beragam layanan agar hidup
            lebih mudah dan nyaman
          </p>
        </div>
        <div className="col-start-2 col-end-2 mx-auto">
          <p className="text-xl font-semibold">Tentang</p>
          <p className="mt-2">
            <a href="#about" className="hover:text-[#16a085]"> Tentang Kami </a>
          </p>
          <p>
            <a href="#layanan" className="hover:text-[#16a085]">
              Layanan
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: "#16a085" }}
                className="ml-1"
              />
            </a>
          </p>
        </div>
        <div className="col-start-3 col-end-3 mx-auto">
          <p className="text-xl font-semibold"> Kontak </p>
          <p className="mt-2">
            <a href="" className="hover:text-[#16a085]">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-1" />
              +62 813 1329 3859
            </a>
          </p>
          <p>
            <a href="" className="hover:text-[#16a085]">
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
              muhrepiyan26@gmail.com
            </a>
          </p>
          <p>
            <a href="" className="hover:text-[#16a085]">
              <FontAwesomeIcon icon={faMap} className="mr-1" />
              Jl. Dipati Ukur No.93, Lebakgede, Kecamatan Coblong, Kota Bandung,
              Jawa Barat 40132
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
