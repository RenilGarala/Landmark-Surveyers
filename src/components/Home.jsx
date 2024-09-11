import React from "react";
import Animation from "./Animation";
import SurviceCard from "./SurviceCard";
import Accordion from "./Accordion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

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
            <SurviceCard path="./src/icons/Topographic.png" title="Topographic" />

            {/* -- Card 2 -- */}
            <SurviceCard
              path="./src/icons/boundryicon.png"
              title="Boundry Survey"
            />

            {/* -- Card 3 -- */}
            <SurviceCard
              path="./src/icons/Alignment.png"
              title="Alignment Planning Survey"
            />

            {/* -- Card 4 -- */}
            <SurviceCard
              path="./src/icons/setting.png"
              title="Setting-out Survey"
            />

            {/* -- Card 5 -- */}
            <SurviceCard path="./src/icons/Drone.png" title="Drone Survey" />

            {/* -- Card 6 -- */}
            <SurviceCard path="./src/icons/Leveling.png" title="Leveling Survey" />

            {/* -- Card 7 -- */}
            <SurviceCard path="./src/icons/Dam.png" title="Dam-River Survey" />

            {/* -- Card 8 -- */}
            <SurviceCard
              path="./src/icons/Preliminary.png"
              title="Preliminary Survey"
            />
          </div>
        </main>
      </div>

      {/* <div className="py-10 bg-white text-center text-xl">hello</div> */}

      {/* ----- Service Quelity ------ */}

      <div className="p-4 bg-white w-screen flex flex-col items-center pt-16 pb-16 px-24 gap-10">
        <div className="text-5xl font-bold mb-8">Why Choose Us?</div>
        <div className="flex gap-12 flex-wrap justify-between ">
          <div className="w-96 h-48 bg-gray-50 hover:scale-105  p-8 flex flex-col gap-4 rounded-lg  ">
            <div className="text-2xl font-medium text-red-600">
              Experienced Team
            </div>
            <div className="text-xl">
              Our skilled professionals ensure accurate and reliable results
            </div>
          </div>
          <div className="w-96 h-48 bg-gray-50 hover:scale-105 p-8 flex flex-col gap-4">
            <div className="text-2xl font-medium text-red-600">
              Latest Technology
            </div>
            <div className="text-xl">
              We use modern tools, like drones, for precise surveys
            </div>
          </div>
          <div className="w-96 h-48 bg-gray-50 hover:scale-105  p-8 flex flex-col gap-4">
            <div className="text-2xl font-medium text-red-600">
              High Accuracy
            </div>
            <div className="text-xl">
              We ensure detailed and accurate mapping for your projects
            </div>
          </div>
          <div className="w-96 h-48 bg-gray-50 hover:scale-105  p-8 flex flex-col gap-4">
            <div className="text-2xl font-medium text-red-600">
              Affordable Prices
            </div>
            <div className="text-xl">
              Quality service at prices that won’t break the bank
            </div>
          </div>
          <div className="w-96 h-48 bg-gray-50 hover:scale-105  p-8 flex flex-col gap-4">
            <div className="text-2xl font-medium text-red-600">
              Fast Response
            </div>
            <div className="text-xl">
              We quickly provide a detailed quote and clear estimate
            </div>
          </div>
          <div className="w-96 h-48 bg-gray-50 hover:scale-105  p-8 flex flex-col gap-4">
            <div className="text-2xl font-medium text-red-600">
              Customer Satisfaction
            </div>
            <div className="text-xl">
              We prioritize your needs and ensure every project meets your expectations
            </div>
          </div>
        </div>
      </div>

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

      {/* ----- Footer ----- */}
      <div className="bg-black text-white py-12 ">
        <div className="container mx-auto px-32 lg:px-20 md:px-16 sm:px-7">
          <div className="flex flex-wrap justify-between">
            <div className="md:w-full w-1/4 lg:w-2/4 md:mb-6 mb-0 pr-6">
              <h2 className="text-xl font-semibold mb-4">Company</h2>
              <div className="sm:pl-5 leading-relaxed">
                Landmark Surveyors, a team of experts dedicated to providing quality and affordable digital land surveying services.
              </div>
            </div>

            <div className="md:w-full w-1/4 lg:w-2/4 md:mb-6 mb-0 pr-12">
              <h2 className="text-xl font-semibold mb-4">Address</h2>
              <p className="leading-relaxed sm:pl-5">
                301, Deep Dhara Apartment, University Road, Rajkot - 360005 (Opposite G K Dholakia School)
              </p>
            </div>

            <div className="md:w-full w-1/4 lg:mt-10 md:mt-0 lg:w-2/4 md:mb-6 mb-0">
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <ul className="flex space-x-6 sm:pl-5">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    <FaFacebook size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    <FaTwitter size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:w-full w-1/4 lg:w-2/4 md:mb-6 mb-0">
              <h2 className="text-xl font-semibold mb-4">
                Join Our Wellness Newsletter
              </h2>
              <form>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 mb-2 bg-gray-900 text-white border border-white rounded"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-black bg-gray-200 hover:bg-gray-300 transition duration-300 rounded"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 sm:mt-2  border-t border-gray-300 pt-6 text-center">
            <p>© 2024 Landmark Survey Mapping Company. All Rights Reserved. Designed by Renil Garala.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
