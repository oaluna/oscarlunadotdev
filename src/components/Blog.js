import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

export default function Blog() {
  const [mediumData, setMediumData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oaluna`
    )
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const finalData = mediumData.slice(1, 7);

  return (
    <section className="section transition sub-section  snap-start" id="blog">
      <div className="container  px-1 lg:px-6 py-32 m-auto">
        <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
          <Fade down>
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <h1 className="sub_title uppercase text-[#bb2649] text-[10vh] lg:text-[20vh]">
                Blog
              </h1>
              <p className="main_title font-medium text-[20px] text-slate-900 leading-8 pb-12">
                My most recent blog posts. Click{" "}
                <a href="https://medium.com/@oaluna" className="text-sky-400">
                  {" "}
                  here{" "}
                </a>
                to read more.
              </p>
            </div>
          </Fade>
        </div>

        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          {finalData.map((article) => (
            <>
              <Fade up cascade>
                <div key={article.id} className="col-span-4">
                  <div className="overflow-hidden h-full bg-zinc-200 rounded shadow-md text-slate-700 shadow-zinc-900/20">
                    <img
                      src={article.thumbnail}
                      alt="card"
                      className="aspect-video"
                    />

                    <div className="p-4">
                      <header className="flex gap-4 mb-4">
                        <a
                          href={article.link}
                          className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
                        >
                          <img
                            src="https://img.freepik.com/free-icon/football-player_318-923071.jpg?t=st=1666479531~exp=1666480131~hmac=aee4344f48472d27e8b5ec54a65a0969166b6bfafa363b9ca49154b84f464cfa"
                            alt="Oscar Luna"
                            title="Oscar Luna"
                            width="48"
                            height="48"
                            className="max-w-full rounded-full bg-slate-700"
                          />
                        </a>
                        <div className="h-full">
                          <h3 className="h-16 text-xl font-semibold tracking-tighter leading-tight md:leading-relaxed text-slate-900">
                            {article.title}
                          </h3>
                          <p className="text-sm text-slate-700 mt-12 md:mt-0">
                            {" "}
                            By {article.author}, {article.pubDate}
                          </p>
                        </div>
                      </header>
                    </div>
                    <div className="flex justify-end gap-2 p-4 pt-0">
                      <a href={article.link}>
                        <button className="inline-flex underline items-center justify-center h-10 gap-2 px-5 text-sm font-semibold tracking-wide transition duration-300 bg-transparent rounded justify-self-center whitespace-nowrap text-blue-400 disabled:cursor-not-allowed disabled:text-purple-300 disabled:shadow-none disabled:hover:bg-transparent hover:text-sky-400">
                          <span>Read more</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
