import Image from "next/image";

const Hero = () => {
  return (
    <div className="">
      <section id="home">
        <div className="hero">
          <div className="grid grid-cols-2 gap-10 pb-20">
            <div className="col-start-1 col-end-1 m-auto">
              <h1 className="text-4xl">
                Atur janji temu kamu dengan dokter — kapanpun dan di mana pun!
              </h1>
              <button className="bg-[#16a085] text-white border-white rounded-xl px-2 py-2 mt-3 hover:bg-[#0c5a4a]">
                Atur Sekarang
              </button>
            </div>
            <div className="col-start-2 col-end-2">
              <Image
                src="./home-image.svg"
                alt="hero doctor"
                width={900}
                height={900}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="about">
        <div className="about">
          <div className="grid grid-cols-2 gap-10 mt-20 pt-20">
            <div className="col-start-1 col-end-1 mt-5">
              <Image
                src="./about-image.svg"
                alt="hero doctor"
                width={900}
                height={900}
                className="object-contain"
              />
            </div>
            <div className="col-start-2 col-end-2 m-auto">
              <h1 className="text-4xl mb-5 font-semibold"> Tentang Kami </h1>
              <h3 className="text-2xl mb-2 font-semibold">
                {" "}
                Kenapa Memilih Kami?{" "}
              </h3>
              <div className="text-justify">
                <p className="mb-1">
                  Kami adalah platform reservasi bertemu dokter bagi anda yang
                  malas untuk menunggu berjam-jam hanya untuk melakukan
                  pemeriksaan selama 30 menit.
                </p>
                <p>
                  Kami membantu anda dalam mengatur pertemuan dengan dokter di
                  klinik kami menyesuaikan dengan jadwal anda, anda bisa memilih
                  dokter mana yang tersedia di hari yang anda inginkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Hero;
