function Footer() {
  return (
    <section>
      <footer className="bg-blur-green text-white">
        <div className="w-120 mx-auto py-24 flex justify-between">
          <div className="flex flex-col">
            <h3>Buildit</h3>
            <p className="mt-4">Development company, 2022</p>
            <p className="mt-12">Site design – ⏰ Alarm</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Service 1</a>
            <a href="#">Service 1</a>
            <a href="#">Service 1</a>
            <a href="#">Service 1</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">About us</a>
            <a href="#">About us</a>
            <a href="#">About us</a>
            <a href="#">About us</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Get in touch</a>
            <p>
              60 Manor Station St. Fairport,
              <br /> NY 14450
            </p>
            <p>
              708-790-0000
              <br /> sales@buildit.site
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
export default Footer;
