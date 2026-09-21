import { useState } from "react";
import data from "./data/data.json";

const App = (props) => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubsection, setSelectedSubsection] = useState(null);
  const [isMailVisible, setIsMailVisible] = useState(false);

  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-top bg-cover"
      style={
        selectedSubsection?.image && {
          backgroundImage: `url('/img/${selectedSubsection?.image}')`,
        }
      }
    >
      <div className="w-full h-full">
        <main className="container-fluid p-2.5">
          <div className="container mx-auto">
            <div className="flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl font-semibold bg-white">
                  <button
                    className="hover:cursor-pointer p-2.5 border-transparent border hover:border-purple-700"
                    onClick={() => {
                      setSelectedSubsection({
                        image: "main.webp",
                      });
                      setSelectedSection({
                        items: [
                          {
                            name: "Keywords: artist, creative, digital culture, interdisciplinary, instructional design, pedagogy, postmodernism, video games, virtual reality, writer",
                          },
                        ],
                      });
                    }}
                  >
                    Christian Metaxas
                  </button>
                </h1>
              </div>
              <div>
                <p>
                  <a
                    onClick={() => {
                      setIsMailVisible(!isMailVisible);
                    }}
                    className="text-xs tracking-wide hover:text-purple-700 hover:cursor-pointer p-2.5 bg-white"
                  >
                    {isMailVisible ? (
                      <span>༼ つ ◕_◕ ༽つ</span>
                    ) : (
                      <span>Mail</span>
                    )}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2.5 py-2.5">
              {data?.map((item, index) => (
                <button
                  key={item?.id || index}
                  className={`p-2.5 bg-white hover:bg-purple-50 hover:cursor-pointer border ${item?.section === selectedSection?.section ? "border-purple-600" : "border-transparent"}`}
                  onClick={() => setSelectedSection(item)}
                >
                  <pre>{item?.section}</pre>
                </button>
              ))}
              {selectedSection !== null && (
                <button
                  className="flex items-center justify-center bg-white p-2.5 size-8 rounded-full border border-transparent hover:border-purple-600 hover:cursor-pointer text-xs"
                  onClick={() => {
                    setSelectedSection(null);
                    setSelectedSubsection(null);
                  }}
                >
                  X
                </button>
              )}
            </div>
          </div>
          {selectedSection !== null && (
            <div className="container mx-auto">
              <section
                className="flex flex-col flex-1 p-2.5 border border-purple-300 bg-white/75"
                id={selectedSection?.id}
              >
                <div>
                  <h2 className="text-lg font-semibold uppercase">
                    <pre>{selectedSection?.section}</pre>
                  </h2>
                </div>
                <ul className="list-none flex flex-col gap-2.5">
                  {selectedSection?.items?.map((item, index) => (
                    <li key={item?.id || index}>
                      <div>
                        <h3>
                          <code
                            onClick={() => {
                              setSelectedSubsection(item);
                            }}
                            className="hover:text-purple-400 hover:cursor-pointer"
                          >
                            {item?.name}
                          </code>
                          {item?.links &&
                            item?.links.map((link) => (
                              <>
                                <span className="mx-2.5 text-neutral-300 text-xs">
                                  |
                                </span>
                                <a
                                  className="bg-purple-900 hover:bg-purple-700 text-white rounded-sm px-4 py-.5 text-xs"
                                  href={link?.url}
                                  target="_blank"
                                >
                                  {link?.name} →
                                </a>
                              </>
                            ))}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}
          {selectedSubsection?.description && (
            <div className="flex flex-1 justify-end items-end">
              <p className="bg-white border-purple-700 border p-2.5">
                <span className="leading-1 m-2.5 ">
                  {selectedSubsection?.description}
                </span>
              </p>
            </div>
          )}
        </main>
        {isMailVisible && <img src="/img/email.webp" class="w-full" />}
      </div>
    </div>
  );
};

export default App;
