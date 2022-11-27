import Image from "next/image";
import featureimage from "../../public/assets/icons/Icon.png";

function Home() {
  return (
    <section>
      <section className=" relative bg-blur overflow-hidden">
        <div className=" w-120 mx-auto">
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
              <div className="flex gap-10 mt-12">
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
        <div className="w-120 mx-auto mt-28">
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
        <div className="flex gap-10 justify-center py-12 border-y-primary_text border-y">
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
        <div className="w-120 mx-auto py-36 flex">
          <picture>
            <img
              className="w-full"
              src="/assets/images/photo.png"
              alt="building shot below"
            />
          </picture>
          <div className="w-100 ml-20 -mt-10">
            <div className="flex flex-col gap-5">
              <h4 className="text-primary-green font-medium leading-8">
                About us
              </h4>
              <h3 className="text-4xl text-secondary-green leading-12 font-bold">
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
                <button className="mt-10 py-4 px-12 bg-dark-green  text-white font-bold rounded-sm">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-120 mx-auto py-36 flex">
          <div className="w-100">
            <div className="flex flex-col gap-5">
              <h4 className="text-primary-green font-medium leading-8">
                About us
              </h4>
              <h3 className="text-4xl text-secondary-green leading-12 font-bold">
                Owner and investor with a reputations
              </h3>
              <div>
                <p className="leading-8 font-medium text-primary-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                  Integer rhoncus, eros vel euismod tempor, ipsum magna
                  tristique nisi, quis ullamcorper enim magna eu orci. Sed
                  semper ex quis semper aliquet. Cras hendrerit molestie sapien
                  sed fermentum. Mauris dui tortor, viverra vel ultrices in,
                  congue sed ex.
                </p>
                <button className="mt-10 py-4 px-12 bg-dark-green  text-white font-bold rounded-sm">
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

      <section className="bg-dark-white">
        <div className="py-20 ml-24">
          <div className="flex flex-col items-center">
            <h1 className="text-dark-green font-bold">Socials</h1>
            <h2 className="text-primary-text text-3xl font-bold mb-8">
              On Instagram
            </h2>
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

      <section className="bg-white px-36">
        <div className="flex justify-between max-w-5xl mx-auto py-40">
          <div>
            <p className="text-primary-green text-sm font-semibold ">Contact</p>
            <h1 className="text-secondary-green font-bold text-3xl mt-4">
              Get In Touch
            </h1>

            <div className="flex flex-col gap-5 mt-20">
              <div className="flex gap-5">
                <div className="bg-dark-white rounded-md w-fit h-fit p-2">
                <img src="/assets/images/Icon.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-secondary-green text-lg font-semibold">
                    Tel
                  </p>
                  <p className="text-secondary-green font-bold text-xsm">
                    708-790-0000
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-dark-white rounded-md w-fit h-fit p-2">
                <img src="/assets/images/Icon-msg.png" alt="" />

                </div>
                <div className="flex flex-col">
                  <p className="text-secondary-green text-lg font-semibold mt-2">
                    Email
                  </p>
                  <p className="text-secondary-green font-bold text-xsm">
                    sales@buildit.site
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-dark-white rounded-md w-fit h-fit p-2">
                <img src="/assets/images/Icon-msg.png" alt="" />

                </div>
                <div className="flex flex-col">
                  <p className="text-secondary-green text-lg font-semibold mt-2">
                    Office
                  </p>
                  <p className="text-secondary-green font-bold text-xsm">
                    60 Manor Station St.
                    <br />
                    Fairport, NY 14450
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark-white rounded-xsm  w-fit h-fit -mt-5">
            <div className="flex flex-col gap-5 p-6 bg-dark-white">
              <div className="flex gap-5 mt-10">
                <div className="flex flex-col">
                  <p className="text-secondary-green text-base">Name</p>
                  <input className="border-secondary-green bg-dark-white border rounded-sm" />
                </div>
                <div className="flex flex-col">
                  <p className="text-secondary-green text-base">
                    Email
                  </p>
                  <input className="border-secondary-green bg-dark-white border rounded-sm" />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-secondary-green text-base">
                  Subject
                </p>
                <input className="border-secondary-green bg-dark-white border rounded-sm" />
              </div>
              <div className="flex flex-col">
                <p className="text-secondary-green text-base">
                  Message
                </p>
                <input className="border-secondary-green bg-dark-white border rounded-sm h-32" />
              </div>

              <button className="bg-light-green rounded-xsm text-white py-2 h-11 font-bold shadow-2xl shadow-secondary-green">
              Send message
              </button>
            
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
