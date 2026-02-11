import Luneta from "../assets/img/luneta.png";
import Carousel from "../components/Carousel";

const Venue = () => {
  return (
    <div id="venue" className=" bg-[#fefbf8] relative w-full flex ">
      <div className="relative w-full ">
        <div className="flex lg:flex-row flex-col w-full">
          <div className="flex flex-col text-gray-800 w-full justify-center items-center py-10">
            <div className="">
              <p className="text-lg uppercase font-lora tracking-widest text-center">
                Seminar-Workshop
              </p>
              <p className="text-4xl uppercase font-lora font-semibold text-center">
                venue
              </p>
              <div className="text-[16px] lg:text-base text-center pt-4 text-gray-900 font-lora">
                <p>Provincial Capitol, Vigan City, Ilocos Sur</p>
              </div>
            </div>
            <div className="lg:w-120 pl-5 lg:pl-0 "></div>
          </div>
          <div className="bg-[#650100] aspect-square overflow-hidden w-full ">
            <div className="w-auto lg:w-full h-full overflow-hidden border-gray-900/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1901.7773919429867!2d120.38574843836408!3d17.576371295835873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e6510eb0f35cb%3A0x609fa8dce0ec8b20!2sIlocos%20Sur%20Provincial%20Farmers%20Livelihood%20Development%20Center!5e0!3m2!1sen!2sph!4v1770342868946!5m2!1sen!2sph"
                className="w-full h-full border-0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
