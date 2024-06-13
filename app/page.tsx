import Image from 'next/image';

import Taltner from './assets/taltner.png';
import TriPal from './assets/tripal.png';

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background:
            'radial-gradient(600px at 735px 506px, rgba(29, 78, 216, 0.15), transparent 80%)',
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">naoki</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                UIUX Designer and Frontend Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                My goal is to be a front-end developer who creates designs that
                fulfill and surpass user expectations.
              </p>
              <nav aria-label="In-page jump links" className="hidden lg:block">
                <ul className="mt-16 w-max">
                  <li>
                    <a className="group flex items-center py-3" href="#about">
                      <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#experience"
                    >
                      <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul
              aria-label="Social Media"
              className="ml-1 mt-8 flex items-center"
            >
              <li className="mr-5 shrink-0 text-xs">Github</li>
              <li className="mr-5 shrink-0 text-xs">Zenn</li>
              <li className="mr-5 shrink-0 text-xs">Twitter</li>
              <li className="mr-5 shrink-0 text-xs">Instagram</li>
              <li className="mr-5 shrink-0 text-xs">Discord</li>
            </ul>
          </header>
          <main className="pt-24 lg:w-1/2 lg:py-24" id="content">
            {/* About me */}
            <section
              aria-label="About me"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              id="about"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  I'm a 20-year-old student from Tokushima, Japan. I played
                  Trombone in a brass band during junior high and high school.
                  I'm currently studying web development and design at
                  <a
                    aria-label="Tokyo Design Technology Center College (opens in a new tab)"
                    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                    href="https://www.tech.ac.jp/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Tokyo Design Technology Center College
                  </a>
                  .
                </p>
              </div>
            </section>
            {/* EXPERIENCE */}
            <section
              aria-label="About me"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              id="experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        2023 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a
                            aria-label="TriPal (opens in a new tab)"
                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                            href=""
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Tokyo Design Technology Center
                              <span className="inline-block">
                                College
                                <svg
                                  aria-hidden="true"
                                  class="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    clip-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    fill-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          I've had so many encounters, experiences, and
                          opportunities at this school. I'm new to programming
                          and I'm learning as I go. I've also been meeting new
                          friends.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
            {/* PROJECTS */}
            <section
              aria-label="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              id="projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      {/* ホバー要素 */}
                      <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      {/* projectテキスト */}
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            aria-label="TriPal (opens in a new tab)"
                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                            href=""
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Travel Support AI
                              <span className="inline-block">
                                App
                                <svg
                                  aria-hidden="true"
                                  class="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    clip-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    fill-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          TriPal is a service that helps users with everything
                          from travel plan proposals to accommodation selection.
                          It does this by combining AI and external APIs in a
                          conversational format.
                        </p>
                        <ul
                          aria-label="used technology"
                          className="mt-2 flex flex-wrap"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              HTML
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              CSS
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              JavaScript
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* projectイメージ */}
                      <Image
                        alt="Travel Support AI App image"
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        decoding="async"
                        height="48"
                        loading="lazy"
                        src={TriPal}
                        width="200"
                      />
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      {/* ホバー要素 */}
                      <div className="absolute -inset-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      {/* projectテキスト */}
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            aria-label="TriPal (opens in a new tab)"
                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                            href=""
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Talk Partner AI
                              <span className="inline-block">
                                App
                                <svg
                                  aria-hidden="true"
                                  class="ml-1 inline-block size-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    clip-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    fill-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Taltner is an AI-powered conversation aid designed for
                          people who find it tough to start or keep a
                          conversation. It helps people solve social problems by
                          suggesting relevant topics in real time based on what
                          the other person is saying.
                        </p>
                        <ul
                          aria-label="used technology"
                          className="mt-2 flex flex-wrap"
                        >
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Next.js
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              TailwindCSS
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* projectイメージ */}
                      <Image
                        alt="Talk Partner AI App image"
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        decoding="async"
                        height="48"
                        loading="lazy"
                        src={Taltner}
                        width="200"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
