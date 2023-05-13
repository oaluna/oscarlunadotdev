import { useState } from "react";

export default function LayoutEvenColumnOne() {
  const [state, setState] = useState({
    "id-01": "",
    "id-02": "",
    "id-03": "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  return (
    <section className="section snap-start" id="contact">
      <div className="container  px-1 lg:px-6 py-24 lg:py-32 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="h-[55vh] col-span-4 md:col-span-8 lg:col-span-12 bg-[url(https://zimed.vercel.app/assets/images/background/banner-bg-1-1.png)] bg-cover rounded-xl p-8 shadow-xl shadow-zinc-900/20 bg-blend-color-dodge">
            <div className="container px-1 lg:px-6 m-auto">
              <div className="grid grid-cols-4 gap-0 lg:gap-6 md:grid-cols-8 lg:grid-cols-12">
                <div className="col-span-4 lg:col-span-6 my-auto">
                  <h1 className="text-gray-100 mb-6 text-3xl font-semibold text-center md:text-left">
                    Get In Touch
                  </h1>
                  <p className="text-gray-300 text-md text-left pr-4">
                    Are you in need of a developer for a project? Drop your
                    email for a free consultation.
                  </p>
                </div>
                <div className="col-span-4 lg:col-span-6">
                  <div className="mb-10 h-24">
                    <div className="relative mt-6 mx-0">
                      <input
                        id="id-01"
                        type="email"
                        name="id-01"
                        placeholder="Your Email Address"
                        value={state["id-01"]}
                        className="peer relative h-10 w-auto md:w-full rounded-md border border-slate-200 mr-0 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none shadow-inner shadow-zinc-900/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="id-01"
                        name="email"
                        className="relative flex flex-row w-auto h-auto left-0 md:left-2 -top-2 z-[1] px-2 text-xs text-slate-100 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent my-auto"
                      >
                        Email Address:
                      </label>
                    </div>
                    <div className="relative mt-6 mx-0">
                      <input
                        id="id-02"
                        type="text"
                        name="id-02"
                        placeholder="Your Name (first, last)"
                        value={state["id-02"]}
                        className="peer relative h-10 w-auto md:w-full rounded-md border border-slate-200 mr-0 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none shadow-inner shadow-zinc-900/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="id-02"
                        name="name"
                        className="relative flex flex-row w-auto h-auto left-0 md:left-2 -top-2 z-[1] px-2 text-xs text-slate-100 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent my-auto"
                      >
                        Your Name:
                      </label>
                    </div>
                    <div className="relative mt-6 mx-0">
                      <textarea
                        id="id-03"
                        name="id-03"
                        placeholder="Details about the project in question."
                        value={state["id-03"]}
                        className="peer relative h-10 w-auto md:w-full rounded-md border border-slate-200 mr-0 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none shadow-inner shadow-zinc-900/20 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="id-03"
                        name="message"
                        className="relative flex flex-row w-auto h-auto left-0 md:left-2 -top-2 z-[1] px-2 text-xs text-slate-100 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-transparent before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\u*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent my-auto"
                      >
                        Message:
                      </label>
                    </div>
                    <div className="relative mt-6 mx-0">
                      <button
                        onClick={() =>
                          alert(
                            "Thank you. We will get back to you shortly via email."
                          )
                        }
                        className="peer relative rounded-md border border-slate-900 outline-none transition-all focus:border-slate-900 focus:outline-none text-md md:px-5 text-zinc-300 bg-slate-900 h-10 w-auto invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                      >
                        <i className="fa-solid fa-paper-plane"></i> Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
