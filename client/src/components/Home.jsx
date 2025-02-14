//Homepage component

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import talentImage from '../assets/talent.jpg';
import unlockImage from '../assets/unlock.png';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      // // Trigger animation only once
    });
  }, []);

  function handleStartedClick() {
    navigate('/signup');
  }
  function handleWorksClick() {
    navigate('/works');
  }

  return (
    <div className="overflow-hidden">
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      <div className="relative flex h-screen flex-col items-center justify-center bg-white">
        {/* Background Shape */}
        <div className="absolute left-1/2 top-1/2 flex h-[450px] w-[950px] -translate-x-1/2 -translate-y-1/2 rotate-12 skew-x-6 scale-110 transform items-center justify-center gap-10 rounded-full bg-[rgba(95,169,248,0.1)] blur-lg"></div>

        {/* Text and Buttons */}
        <div
          className="relative z-10 mt-[-40px] text-center font-display sm:mt-[-80px]"
          data-aos="fade-up"
        >
          <h1 className="mb-4 text-4xl font-medium text-gray-800 sm:text-6xl">
            Supercharge Your Freelance Career
          </h1>
          <h2 className="mb-4 font-display text-2xl text-gray-800 sm:text-3xl">
            Endless Opportunities
          </h2>
          <p className="mb-8 font-display text-lg text-gray-900 sm:text-xl">
            Connecting Freelancers to Top Opportunities
          </p>
          <div className="mb-10 flex justify-center gap-6">
            <button
              className="rounded-lg border border-gray-500 bg-[#40a2c9] bg-opacity-20 px-6 py-3 text-gray-900 transition hover:bg-opacity-40"
              onClick={handleStartedClick}
            >
              Get Started
            </button>
            <button
              className="rounded-lg border border-gray-300 bg-gray-50 px-6 py-3 text-gray-800 transition hover:bg-gray-100 hover:text-gray-800"
              onClick={handleWorksClick}
            >
              Browse
            </button>
          </div>
        </div>
      </div>

      {/* Find Top Talent Section */}
      <div className="md:py-15 relative flex flex-col items-center justify-between bg-white md:flex-row md:px-10">
        <div className="absolute left-1/2 top-1/2 flex translate-x-[40%] translate-y-[-85%] rotate-[-35deg] skew-x-6 scale-110 transform items-center justify-center gap-10 overflow-hidden rounded-full bg-[rgba(95,169,248,0.1)] blur-lg sm:h-[450px] sm:w-[850px]"></div>

        <img
          src={talentImage}
          alt="Talent"
          className="w-96 object-cover transition-all duration-500 sm:mr-10 sm:w-4/12"
          data-aos="slide-right"
          data-aos-duration="800"
        />

        <div
          className="mx-auto flex max-w-xl flex-col items-start p-10"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h2 className="font-display text-4xl text-gray-800 sm:mb-6 lg:text-6xl">
            Find Top Talent
          </h2>
          <p className="mb-8 font-display text-lg leading-relaxed text-gray-600 md:text-xl">
            Discover highly skilled freelancers with the expertise to bring your
            innovative ideas to life. Let’s turn your vision into a reality with
            unmatched professionalism and creativity.
          </p>
          <div className="mb-10 flex justify-center gap-6">
            <button
              className="rounded-lg border border-gray-500 bg-[#40a2c9] bg-opacity-20 px-6 py-3 text-gray-900 transition-all duration-300 hover:bg-opacity-40"
              onClick={handleStartedClick}
            >
              Get Started
            </button>
            <button
              className="rounded-lg border border-gray-300 bg-gray-50 px-6 py-3 text-gray-800 transition-all duration-300 hover:bg-gray-100 hover:text-gray-800"
              onClick={handleWorksClick}
            >
              Browse
            </button>
          </div>
        </div>
      </div>

      <div className="md:py-15 relative flex flex-col items-center justify-between bg-white md:flex-row md:px-10">
        <div className="absolute right-1/2 top-1/2 flex translate-x-[-40%] translate-y-[-45%] rotate-[-35deg] skew-x-6 scale-110 transform items-center justify-center gap-10 overflow-hidden rounded-full bg-[rgba(95,169,248,0.1)] blur-lg sm:h-[450px] sm:w-[850px]"></div>

        <div
          className="mx-auto flex max-w-xl flex-col items-start p-10"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2 className="font-display text-4xl text-gray-800 sm:mb-6 lg:text-6xl">
            Unlock New Opportunities
          </h2>
          <p className="mb-8 font-display text-lg leading-relaxed text-gray-600 md:text-xl">
            Open doors to amazing projects and meaningful collaborations that
            can redefine your career path. Explore new opportunities and achieve
            your professional goals with confidence and creativity.
          </p>
          <div className="mb-10 flex justify-center gap-6">
            <button
              className="rounded-lg border border-gray-500 bg-[#40a2c9] bg-opacity-20 px-6 py-3 text-gray-900 transition-all duration-300 hover:bg-opacity-40"
              onClick={handleStartedClick}
            >
              Get Started
            </button>
            <button
              className="rounded-lg border border-gray-300 bg-gray-50 px-6 py-3 text-gray-800 transition-all duration-300 hover:bg-gray-100 hover:text-gray-800"
              onClick={handleWorksClick}
            >
              Browse
            </button>
          </div>
        </div>

        <img
          src={unlockImage}
          alt="Talent"
          className="w-96 object-cover transition-all duration-500 sm:mr-10 sm:w-5/12"
          data-aos="slide-left"
          data-aos-duration="800"
        />
      </div>

      <section class="bg-white py-10 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-2.5xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Numbers tell our story
            </h2>
            <p class="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Connecting top freelancers with businesses worldwide. Delivering
              quality work, hassle-free.
            </p>
          </div>

          <div class="mt-10 grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3 lg:mt-24">
            <div>
              <h3 class="text-5xl font-bold">
                <span class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                  6+{' '}
                </span>
              </h3>
              <p class="mt-4 text-xl font-medium text-gray-900">
                Years in business
              </p>
              <p class="mt-0.5 text-base text-gray-500">
                Creating the successful path
              </p>
            </div>

            <div>
              <h3 class="text-5xl font-bold">
                <span class="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                  {' '}
                  4821{' '}
                </span>
              </h3>
              <p class="mt-4 text-xl font-medium text-gray-900">
                Projects Completed
              </p>
              <p class="mt-0.5 text-base text-gray-500">In last 6 years</p>
            </div>

            <div>
              <h3 class="text-5xl font-bold">
                <span class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                  {' '}
                  37+{' '}
                </span>
              </h3>
              <p class="mt-4 text-xl font-medium text-gray-900">Freelancer</p>
              <p class="mt-0.5 text-base text-gray-500">
                Contributed to the community
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  TalentHub
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Follow us
                </h2>
                <ul class="font-medium text-gray-500 dark:text-gray-400">
                  <li class="mb-4">
                    <a
                      href="https://github.com/Kiran-pande-30"
                      class="hover:underline"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Kiranpande_30"
                      class="hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Legal
                </h2>
                <ul class="font-medium text-gray-500 dark:text-gray-400">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2025{' '}
              <a href="https://flowbite.com/" class="hover:underline">
                TalentHub™
              </a>
              . All Rights Reserved.
            </span>
            <div class="mt-4 flex sm:mt-0 sm:justify-center">
              <a
                href="#"
                class="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                class="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                class="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                class="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
