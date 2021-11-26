import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>North Mirror</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {/* {posts.map((post, i) => (
            <PostCard post={post.node} key={i} />
          ))} */}
          <div className="bg-home px-8 w-full">
            <div
              className="
                    py-12
                    flex flex-col
                    justify-between
                    min-h-screen
                    md:max-w-2xl
                    lg:max-w-3xl
                    mx-auto
                "
            >
              <div>
                <div
                  className="flex flex-wrap justify-center gap-4"
                  x-data="timer()"
                  x-init="countdown()"
                >
                  {/* <div class="timer-circle">
                    <div>
                      <span class="timer-count" x-text="days"></span>
                      <span class="timer-type">Days</span>
                    </div>
                  </div> */}
                  {/* <div class="timer-circle">
                    <div>
                      <span class="timer-count" x-text="hours"></span>
                      <span class="timer-type">Hours</span>
                    </div>
                  </div> */}
                  {/* <div class="timer-circle">
                    7 days
                    <div>
                      <span class="timer-count" x-text="minutes"></span>
                      <span class="timer-type">0 Minutes</span>
                    </div>
                  </div> */}
                  {/* <div class="timer-circle">
                    <div>
                      <span class="timer-count" x-text="seconds"></span>
                      <span class="timer-type">0 Seconds</span>
                    </div>
                  </div> */}
                </div>

                <div className="mt-12 text-white text-center">
                  <h1 className="font-bold text-4xl md:text-5xl">
                    Website is Coming Soon
                  </h1>
                  <p className="pt-4 text-lg md:text-xl">
                    We love to share latest development in the field of
                    Politics, sports and every aspect of life to keep you
                    updated with authentic and unbiased manner.
                  </p>
                </div>
                <form action="" className="mt-8 md:flex md:max-w-lg md:mx-auto">
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      className="
                                    peer
                                    px-8
                                    pt-5
                                    pb-3
                                    w-full
                                    placeholder-transparent
                                    rounded-full
                                    flex-grow
                                    md:rounded-r-none
                                "
                    />
                    <label
                      className="
                                    absolute
                                    text-gray-700
                                    left-8
                                    top-2
                                    font-bold
                                    text-xs
                                    peer-placeholder-shown:top-4
                                    peer-placeholder-shown:font-normal
                                    peer-placeholder-shown:text-base
                                    peer-focus:top-2
                                    peer-focus:font-bold
                                    peer-focus:text-xs
                                    cursor-text
                                    transition-all
                                "
                    >
                      Email address
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="
                                mt-4
                                bg-pink-800
                                text-white
                                uppercase
                                font-bold
                                text-sm text-center
                                w-full
                                px-8
                                h-14
                                rounded-full
                                md:mt-0 md:rounded-l-none md:w-48
                            "
                  >
                    Sign up
                  </button>
                </form>
              </div>
              <footer className="mt-8">
                {/* <img
                  src="images/logo.svg"
                  className="h-10 opacity-80 mx-auto"
                  alt=""
                /> */}
                <div
                  className="
                            mt-4
                            mx-auto
                            text-pink-800 text-lg
                            space-x-2
                            text-center
                        "
                >
                  <a href="#" className="social-link">
                    <i className="fab fa-facebook-f m-auto"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-twitter m-auto"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-pinterest-p m-auto"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-instagram m-auto"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="fab fa-linkedin-in m-auto"></i>
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>

        <div className=" lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            {/* <PostWidget />

            <Categories /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
