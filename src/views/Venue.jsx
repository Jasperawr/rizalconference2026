import Luneta from "../assets/img/luneta.png";
import Carousel from "../components/Carousel";

const Venue = () => {
  return (
    <div id="venue" className="bg-gray-50  relative w-full  py-20 px-50">
      {/* Overlay */}
      {/* <div className="bg-[#e9d9c1]/70 absolute inset-0"></div> */}

      {/* Content */}
      <div className="relative z-50 w-full flex flex-col flex-col-reverse gap-10 justify-between items-center">
        <div className="flex gap-5">
          <Carousel />
          <div className="w-[350px] h-[400px] rounded-2xl overflow-hidden border border-gray-900/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1901.7773919429867!2d120.38574843836408!3d17.576371295835873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e6510eb0f35cb%3A0x609fa8dce0ec8b20!2sIlocos%20Sur%20Provincial%20Farmers%20Livelihood%20Development%20Center!5e0!3m2!1sen!2sph!4v1770342868946!5m2!1sen!2sph"
              className="w-full h-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative z-50 flex flex-col items-center">
            {/* <div className="border rounded border-gray-50 w-10 mb-3"></div> */}
            <p className="text-5xl text-gray-900 uppercase font-lora font-semibold">
              venue
            </p>
            <div className=" text-center pt-4 text-gray-900 font-lora">
              <p>Provincial Farmers Livelihood Development Center</p>
              <p>Provincial Capitol, Vigan City, Ilocos Sur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
