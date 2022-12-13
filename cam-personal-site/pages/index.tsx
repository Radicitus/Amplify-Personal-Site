import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import profile from "../public/profile.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cameron Sherry Portfolio</title>
        <meta name={"description"} content={"A little bit of Cam!"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"bg-white px-10"}>
        <section className={"min-h-screen"}>
          <nav className={"py-10 mb-12 flex justify-between"}>
            <h1 className={"text-xl font-burtons"}>Cameron Sherry</h1>
            <ul className={"flex items-center"}>
              <li>
                <BsFillMoonStarsFill className={"cursor-pointer text-2xl"} />
              </li>
              <li>
                <a
                  className={
                    "bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  }
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className={"text-center p-10"}>
            <h2 className={"text-5xl py-2 text-teal-600 font-medium"}>
              Cameron Sherry
            </h2>

            <h3 className={"text-2xl py-2"}>Developer and Gym Rat.</h3>

            <p className={"text-md py-5 leading-8 text-gray-800"}>
              College student just living life and enjoying a weird love hate
              relationship with a lifelong passion for code.
            </p>
          </div>

          <div
            className={"text-5xl flex justify-center gap-16 py-3 text-gray-600"}
          >
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillInstagram />
          </div>

          <div
            className={
              "relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden"
            }
          >
            <Image
              src={profile}
              layout={"fill"}
              objectFit={"cover"}
              alt={"Profile picture of Cameron"}
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className={"text-3xl py-1"}>Services I offer</h3>

            <p className={"text-md py-2 leading-8 text-gray-800"}>
              Fiscina de gratis <span className={"text-teal-500"}>homo</span>,
              imperium calcaria! A falsis, gabalium azureus heuretes. Armariums
              crescere in festus amivadum!
            </p>

            <p className={"text-md py-2 leading-8 text-gray-800"}>
              Fiscina de gratis <span className={"text-teal-500"}>homo</span>,
              imperium calcaria! A falsis, gabalium azureus heuretes. Armariums
              crescere in festus amivadum!
            </p>
          </div>

          <div>
            <div className={"text-center shadow-lg p-10 rounded-xl my-10"}>
              <Image
                src={design}
                width={100}
                height={100}
                alt={"Design photo"}
                className={"mx-auto"}
              />

              <h3 className={"text-lg font-medium pt-8 pb-2"}>
                Beautiful Designs
              </h3>

              <p className={"py-2"}>
                Ubi est domesticus buxum? Adgiums nocere in emeritis lentia!
              </p>

              <h4 className={"py-4 text-teal-600"}>Design tools I use</h4>

              <p className={"text-gray-800 py-1"}>Photoshop</p>
              <p className={"text-gray-800 py-1"}>Illustrator</p>
              <p className={"text-gray-800 py-1"}>Figma</p>
            </div>

            <div className={"text-center shadow-lg p-10 rounded-xl my-10"}>
              <Image
                src={code}
                width={100}
                height={100}
                alt={"Code photo"}
                className={"mx-auto"}
              />

              <h3 className={"text-lg font-medium pt-8 pb-2"}>
                Beautiful Designs
              </h3>

              <p className={"py-2"}>
                Ubi est domesticus buxum? Adgiums nocere in emeritis lentia!
              </p>

              <h4 className={"py-4 text-teal-600"}>Design tools I use</h4>

              <p className={"text-gray-800 py-1"}>Photoshop</p>
              <p className={"text-gray-800 py-1"}>Illustrator</p>
              <p className={"text-gray-800 py-1"}>Figma</p>
            </div>

            <div className={"text-center shadow-lg p-10 rounded-xl my-10"}>
              <Image
                src={consulting}
                width={100}
                height={100}
                alt={"Consulting photo"}
                className={"mx-auto"}
              />

              <h3 className={"text-lg font-medium pt-8 pb-2"}>
                Beautiful Designs
              </h3>

              <p className={"py-2"}>
                Ubi est domesticus buxum? Adgiums nocere in emeritis lentia!
              </p>

              <h4 className={"py-4 text-teal-600"}>Design tools I use</h4>

              <p className={"text-gray-800 py-1"}>Photoshop</p>
              <p className={"text-gray-800 py-1"}>Illustrator</p>
              <p className={"text-gray-800 py-1"}>Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className={"text-3xl py-1"}>Portfolio</h3>

            <p className={"text-md py-2 leading-8 text-gray-800"}>
              Fiscina de gratis <span className={"text-teal-500"}>homo</span>,
              imperium calcaria! A falsis, gabalium azureus heuretes. Armariums
              crescere in festus amivadum!
            </p>

            <p className={"text-md py-2 leading-8 text-gray-800"}>
              Fiscina de gratis <span className={"text-teal-500"}>homo</span>,
              imperium calcaria! A falsis, gabalium azureus heuretes. Armariums
              crescere in festus amivadum!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
