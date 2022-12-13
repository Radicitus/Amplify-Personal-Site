import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import profile from "../public/profile.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Cameron Sherry Portfolio</title>
        <meta name={"description"} content={"A little bit of Cam!"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800"}>
        <section className={"min-h-screen"}>
          <nav className={"py-10 mb-12 flex justify-between"}>
            <h1 className={"text-xl font-burtons"}>Cameron Sherry</h1>
            <ul className={"flex items-center"}>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className={"cursor-pointer text-2xl"}
                />
              </li>
              <li>
                <a
                  className={
                    "bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  }
                  href="https://docs.google.com/document/d/1EFQWbxjIMiXidQAHxIKnt85AeuAi1DBiW-SGAtmY6bU/edit?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className={"text-center p-10"}>
            <h2
              className={"text-5xl py-2 text-teal-600 font-medium md:text-6xl"}
            >
              Cameron Sherry
            </h2>

            <h3 className={"text-2xl py-2 md:text-3xl"}>
              Developer and Gym Rat.
            </h3>

            <p
              className={
                "mx-auto text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg"
              }
            >
              College student just living life and enjoying a weird love hate
              relationship with a lifelong passion for code.
            </p>
          </div>

          <div
            className={"text-5xl flex justify-center gap-16 py-3 text-gray-600"}
          >
            <a href="https://github.com/Radicitus">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/crsherry/">
              <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/wondercameron/">
              <AiFillInstagram />
            </a>
          </div>

          <div
            className={
              "relative mx-auto bg-slate-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96"
            }
          >
            <Image
              src={profile}
              layout={"fill"}
              alt={"Profile picture of Cameron"}
              className={"object-cover"}
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

          <div className={"lg:flex gap-10"}>
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

          <div
            className={"flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"}
          >
            <div className={"basis-1/3 flex-1"}>
              <Image
                src={web1}
                alt={"Portfolio 1"}
                className={"rounded-lg object-cover w-full h-full"}
              />
            </div>

            <div className={"basis-1/3 flex-1"}>
              <Image
                src={web2}
                alt={"Portfolio 2"}
                className={"rounded-lg object-cover w-full h-full"}
              />
            </div>

            <div className={"basis-1/3 flex-1"}>
              <Image
                src={web3}
                alt={"Portfolio 3"}
                className={"rounded-lg object-cover w-full h-full"}
              />
            </div>

            <div className={"basis-1/3 flex-1"}>
              <Image
                src={web4}
                alt={"Portfolio 4"}
                className={"rounded-lg object-cover w-full h-full"}
              />
            </div>

            <div className={"basis-1/3 flex-1"}>
              <Image
                src={web5}
                alt={"Portfolio 5"}
                className={"rounded-lg object-cover w-full h-full"}
              />
            </div>

            <div className={"basis-1/3 flex-1"}>
              <Image
                src={web6}
                alt={"Portfolio 6"}
                className={"rounded-lg object-cover w-full h-full"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
