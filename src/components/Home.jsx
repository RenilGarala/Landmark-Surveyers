import React from "react";
import Animation from "./Animation";
import SurviceCard from "./SurviceCard";
import Accordion from "./Accordion";

const Home = () => {
  return (
    <div className="h-[500px] bg-white ">
      {/* ----- loading screen ----- */}
      <div className="bg-cover mb-20 px-28 bg-center bg-no-repeat gap-20 h-full flex justify-center items-center text-white">
        <div
          data-aos="zoom-in"
          className="xl:mb-20 pt-36 text-left text-black "
        >
          <h1 className="text-6xl tracking-wider">
            YOUR TRUSTED <span className="block pt-4">PARTNER IN</span>
            <span className="block pt-4">LAND SURVEYING</span>
          </h1>
          <p className="mt-6 text-xl font-light tracking-wider">
            Faster, Accurate, and More Cost-effective
          </p>
        </div>
        <div className="pt-56 mb-16">
          <img src="https://www.rvslandsurveyors.com/wp-content/uploads/2019/12/land-surveying-illustration.png" />
        </div>
      </div>

      {/* ----- Animation ----- */}
      <div className="xl:hidden">
        <Animation />
      </div>

      {/* ----- Survices ----- */}

      <div className="xl:mt-6 bg-gray-50">
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
            <SurviceCard path="./icons/Topographic.png" title="Topographic" />

            {/* -- Card 2 -- */}
            <SurviceCard
              path="./icons/boundryicon.png"
              title="Boundry Survey"
            />

            {/* -- Card 3 -- */}
            <SurviceCard
              path="./icons/Alignment.png"
              title="Alignment Planning Survey"
            />

            {/* -- Card 4 -- */}
            <SurviceCard
              path="./icons/setting.png"
              title="Setting-out Survey"
            />

            {/* -- Card 5 -- */}
            <SurviceCard path="./icons/Drone.png" title="Drone Survey" />

            {/* -- Card 6 -- */}
            <SurviceCard path="./icons/Leveling.png" title="Leveling Survey" />

            {/* -- Card 7 -- */}
            <SurviceCard path="./icons/Dam.png" title="Dam-River Survey" />

            {/* -- Card 8 -- */}
            <SurviceCard
              path="./icons/Preliminary.png"
              title="Preliminary Survey"
            />
          </div>
        </main>
      </div>

      {/* <div className="py-10 bg-white text-center text-xl">hello</div> */}

      {/* ----- faq ----- */}
      <div className="p-4 bg-gray-50 w-screen flex flex-col justify-center items-center pt-14 pb-10 px-44">
        <h1 class="text-5xl font-bold text-center mb-14">
          Frequently Asked Questions
        </h1>
        <Accordion
          title="What does a licensed surveyor do, and why do I need one?"
          answer="A licensed surveyor, like those at Landmark Surveyors & Engineers, specialises in land surveying and property management. They play a crucial role in accurately measuring and assessing land, property boundaries, and more. You may require their services for property transactions, boundary disputes, land development, and various other real estate-related matters."
        />
        <Accordion
          title="How do I contact Landmark Surveyors & Engineers for their surveying services?"
          answer="You can easily get in touch with Landmark Surveyors & Engineers during their working hours, which are between Monday: 8:00 am - 7:00 pm, Tuesday:- 8:00 am - 7:00 pm, Wednesday: 8:00 am - 7:00 pm, thu:- 8:00 am - 7:00 pm, Friday: 8:00 am - 7:00 pm, Saturday: 8:00 am - 7:00 pm, Sunday: Closed. They can be reached through the details provided here and their office is conveniently located Opposite G K Dholakia School. Feel free to reach out for inquiries or to schedule a consultation."
        />
        <Accordion
          title="Can Landmark Surveyors & Engineers assist with complex land-related issues and projects?"
          answer="Yes, Landmark Surveyors & Engineers usually handles a wide range of land-related challenges and projects. Whether you're dealing with land disputes, intricate property boundaries, or large-scale development projects, their team of licensed surveyors has the expertise to guide you through the process and provide effective solutions."
        />
      </div>
    </div>
  );
};

export default Home;
