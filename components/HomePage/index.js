import Image from "next/image";
import featureimage from "../../public/assets/icons/Icon.png";
import newsimage from "../../public/assets/icons/Icon7.png";
import logo1 from "../../public/assets/logos/Vector.png";

function Home() {
  return (
    <section>
      <section className="h-[900px] relative bg-blur overflow-hidden">
        <div className=" max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center pt-52 z-50 relative">
            <div className="w-96">
              <h1 className="text-secondary-text leading-tight font-bold text-5xl">
                Development company
              </h1>
              <p className="text-lg  text-primary-text mt-5">
                Forward-thinking real estate developer, owner and investor with
                a reputation
              </p>
              <div className="space-x-5 mt-20">
                <button className="py-5 pl-6 pr-8 bg-dark-green text-white rounded-md">
                  Services
                </button>
                <button className="py-5 pl-10 pr-10 bg-dark-blue text-secondary-text rounded-md">
                  About the company
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-9 items-end">
                <picture>
                  <img src="/assets/images/image1.png" alt="" />
                </picture>
                <picture>
                  <img src="/assets/images/image2.png" alt="" />
                </picture>
                <picture>
                  <img src="/assets/images/image3.png" alt="" />
                </picture>
              </div>
              <div className="flex gap-[33.18px] mt-[41px]">
                <picture>
                  <img src="/assets/images/image4.png" alt="" />
                </picture>
                <picture>
                  <img src="/assets/images/image5.png" alt="" />
                </picture>
              </div>
            </div>
          </div>
          <picture>
            <img
              src="/assets/images/Figure.png"
              alt=""
              className="absolute top-0 right-0"
            />
          </picture>
        </div>
      </section>

      <section className="">
        <div className="max-w-[1200px] mx-auto mt-28">
          <h1 className="text-center text-3xl leading-tight text-secondary-text font-bold">
            Innovative Execution
          </h1>
          <div className="flex mt-20 w-full space-x-32 ml-10 ">
            <div className="w-80">
              <Image src={featureimage} width={50} height={90} alt="" />
              <h1 className="text-2xl mt-8 text-secondary-text">
                Featured Listing
              </h1>
              <p className="w-56 mt-4 text-primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-80">
              <Image src={featureimage} width={50} height={90} alt="" />
              <h1 className="text-2xl mt-8 text-secondary-text">
                Featured Listing
              </h1>
              <p className="w-56 mt-4 text-primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-80">
              <Image src={featureimage} width={50} height={90} alt="" />
              <h1 className="text-2xl mt-8 text-secondary-text">
                Featured Listing
              </h1>
              <p className="w-56 mt-4 text-primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex gap-10 justify-center py-[41px] border-y-primary_text border-y">
          <picture>
            <img src="/assets/logos/Vector.png" alt="" />
          </picture>
          <picture>
            <img src="/assets/logos/logo1.png" alt="logo1" />
          </picture>
          <picture>
            <img src="/assets/logos/logo2.png" alt="logo1" />
          </picture>
          <picture>
            <img src="/assets/logos/logo3.png" alt="logo1" />
          </picture>
          <picture>
            <img src="/assets/logos/logo4.png" alt="logo1" />
          </picture>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] mx-auto py-36 flex">
          <picture>
            <img
              className="w-full"
              src="/assets/images/photo.png"
              alt="building shot below"
            />
          </picture>

          <div className="max-w-[540px] ml-20 -mt-10">
            <div className="flex flex-col gap-5">
              <h4 className="text-[#5BCCDE] font-medium leading-8">About us</h4>
              <h3 className="text-4xl text-[#486A6F] leading-[48px] font-bold">
                Owner and investor with a reputations
              </h3>
              <div>
                <p className="leading-8 font-medium text-primary_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                  Integer rhoncus, eros vel euismod tempor, ipsum magna
                  tristique nisi, quis ullamcorper enim magna eu orci. Sed
                  semper ex quis semper aliquet. Cras hendrerit molestie sapien
                  sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                  congue sed ex.
                </p>
                <button className="mt-10 py-[15px] px-[71.5px] bg-[#4397A4] text-[#F4F7FF] font-bold rounded-sm">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] mx-auto py-36 flex">
          <div className="max-w-[540px]">
            <div className="flex flex-col gap-5">
              <h4 className="text-[#5BCCDE] font-medium leading-8">About us</h4>
              <h3 className="text-4xl text-[#486A6F] leading-[48px] font-bold">
                Owner and investor with a reputations
              </h3>
              <div>
                <p className="leading-8 font-medium text-primary_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                  Integer rhoncus, eros vel euismod tempor, ipsum magna
                  tristique nisi, quis ullamcorper enim magna eu orci. Sed
                  semper ex quis semper aliquet. Cras hendrerit molestie sapien
                  sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                  congue sed ex.
                </p>
                <button className="mt-10 py-[15px] px-[71.5px] bg-[#4397A4] text-[#F4F7FF] font-bold rounded-sm">
                  Explore
                </button>
              </div>
            </div>
          </div>

          <picture>
            <img src="/assets/images/featured_photo_grid.png" alt="" />
          </picture>
        </div>
      </section>

      <section className=" bg-[#E1EBFA]">
        <div className="py-20 ml-24">
          <div className="flex flex-col items-center">
            <h1 className="text-[#4397A4] font-bold">Socials</h1>
            <h2 className="text-primary-text text-3xl font-bold mb-8">On Instagram</h2>
          </div>
          <div className="flex ml-72 gap-6 items-center">
            <picture className="w-64">
              <img src="/assets/images/photo.png" alt="" />
            </picture>
            <picture className="w-64">
              <img src="/assets/images/Photo (1).png" alt="" />
            </picture>
            <picture className="w-64">
              <img src="/assets/images/Photo (2).png" alt="" />
            </picture>
          </div>
          <div className="flex ml-72 gap-6 items-center mt-4">
            <picture className="w-64">
              <img src="/assets/images/Photo (3).png" alt="" />
            </picture>
            <picture className="w-64">
              <img src="/assets/images/Photo (4).png" alt="" />
            </picture>
            <picture className="w-64">
              <img src="/assets/images/Card.png" alt="" />
            </picture>
          </div>
        </div>
      </section>

      <footer className="bg-[#486A6F] text-white">
        <div className="max-w-[1200px] mx-auto py-[89px] flex justify-between">
          <div className="flex flex-col">
            <h3>Buildit</h3>
            <p>Development company, 2022</p>
            <p>Site design – ⏰ Alarm</p>
          </div>
          <div className="flex flex-col">
            <a href="#">Service 1</a>
            <a href="#">Service 1</a>
            <a href="#">Service 1</a>
            <a href="#">Service 1</a>
          </div>
          <div className="flex flex-col">
            <a href="#">About us</a>
            <a href="#">About us</a>
            <a href="#">About us</a>
            <a href="#">About us</a>
          </div>
          <div className="flex flex-col">
            <a href="#">Get in touch</a>
            <a href="#">Get in touch</a>
            <a href="#">Get in touch</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Home;
