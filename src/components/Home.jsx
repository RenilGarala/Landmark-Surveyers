import React from "react";
import Animation from "./Animation";

const Home = () => {
  return (
    <div className="h-[500px] bg-white ">
      <div className="bg-cover mb-20 px-28 bg-center bg-no-repeat gap-20 h-full flex justify-center items-center text-white">
        <div data-aos="zoom-in" className="xl:mb-20 pt-36 text-left text-black ">
          <h1 className="text-6xl tracking-wider">
            YOUR TRUSTED {" "}
            <span className="block pt-4">PARTNER IN</span>
            <span className="block pt-4">LAND SURVEYING</span>
          </h1>
          <p className="mt-6 text-xl font-light tracking-wider">
            Faster, Accurate, and More Cost-effective
          </p>
        </div>
        <div className="pt-48 mb-16">
          <img src="https://www.rvslandsurveyors.com/wp-content/uploads/2019/12/land-surveying-illustration.png"/>
        </div>
      </div>
      <div className="xl:hidden">
        <Animation />
      </div>

      <div className="pt-6 mt-6 bg-gray-50">
        <main class=" mx-16 py-16 ">
          <h1 class="text-5xl font-bold text-center mb-8">
            Save Your Time! Save Your Money!
          </h1>
          <p class="text-lg text-center mb-16">
            Landmark Surveyors, comprised of seasoned experts with extensive
            experience in the land surveying industry.
          </p>

          <div class="flex flex-wrap justify-center gap-8 ">

            {/* -- Card 1 -- */}
            <div class="grid items-center text-center hover:shadow-lg justify-center bg-white h-56 w-72 rounded-lg shadow-md p-8">
              <div class="flex justify-center mb-6">
                <img
                  width="50"
                  height="50"
                  src="./icons/Topographic.png"
                  alt="mapping-img"
                />
              </div>

              <div>
                <h2 class="text-2xl font-sans tracking-wider">Topographic</h2>
              </div>
            </div>

            {/* -- Card 2 -- */}
            <div class="grid items-center text-center hover:shadow-lg justify-center bg-white h-56 w-72 rounded-md shadow-md p-8">
              <div class="flex justify-center mb-4">
                <img
                  width="50"
                  height="50"
                  src="./icons/boundryicon.png"
                  alt="mapping-img"
                />
              </div>
              <div>
                <h2 class="text-2xl font-sans tracking-wider">
                  Boundry Survey
                </h2>
              </div>
            </div>

            {/* -- Card 3 -- */}
            <div class="grid items-center text-center hover:shadow-lg justify-center bg-white h-56 w-72 rounded-lg shadow-md p-8">
              <div class="flex justify-center mb-6">
                <img
                  width="50"
                  height="50"
                  src="./icons/Alignment.png"
                  alt="mapping-img"
                />
              </div>

              <div>
                <h2 class="text-2xl font-sans tracking-wider">
                  Alignment Planning Survey
                </h2>
              </div>
            </div>

            {/* -- Card 4 -- */}
            <div class="grid items-center text-center hover:shadow-lg justify-center bg-white h-56 w-72 rounded-lg shadow-md p-8">
              <div class="flex justify-center mb-6">
                <img
                  width="50"
                  height="50"
                  src="./icons/setting.png"
                  alt="mapping-img"
                />
              </div>

              <div>
                <h2 class="text-2xl font-sans tracking-wider">
                  Setting-out Survey
                </h2>
              </div>
            </div>

            {/* -- Card 5 -- */}
            <div class="grid items-center text-center hover:shadow-lg justify-center bg-white h-56 w-72 rounded-lg shadow-md p-8">
              <div class="flex justify-center mb-6">
                <img
                  width="50"
                  height="50"
                  src="./icons/Drone.png"
                  alt="mapping-img"
                />
              </div>

              <div>
                <h2 class="text-2xl font-sans tracking-wider">
                  Drone Survey
                </h2>
              </div>
            </div>

            {/* -- Card 6 -- */}
            <div class="grid items-center text-center hover:shadow-lg justify-center bg-white h-56 w-72 rounded-lg shadow-md p-8">
              <div class="flex justify-center mb-6">
                <img
                  width="50"
                  height="50"
                  src="./icons/Leveling.png"
                  alt="mapping-img"
                />
              </div>

              <div>
                <h2 class="text-2xl font-sans tracking-wider">
                  Leveling Survey
                </h2>
              </div>
            </div>

            {/* -- Card 7 -- */}
            <div class="grid items-center text-center hover:shadow-lg justify-center bg-white h-56 w-72 rounded-lg shadow-md p-8">
              <div class="flex justify-center mb-6">
                <img
                  width="50"
                  height="50"
                  src="./icons/Dam.png"
                  alt="world-map"
                />
              </div>

              <div>
                <h2 class="text-2xl font-sans tracking-wider">
                  Dam-River Survey
                </h2>
              </div>
            </div>

            {/* -- Card 8 -- */}
            <div class="grid items-center text-center hover:shadow-lg justify-center bg-white h-56 w-72 rounded-lg shadow-md p-8">
              <div class="flex justify-center mb-6">
                <img
                  width="50"
                  height="50"
                  src="./icons/Preliminary.png"
                  alt="world-map"
                />
              </div>

              <div>
                <h2 class="text-2xl font-sans tracking-wider">
                  Preliminary Survey
                </h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
