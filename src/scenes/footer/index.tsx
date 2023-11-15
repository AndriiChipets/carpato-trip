import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-2">
            All data placed on this site and the site itself are accessible by
            license GNU Free Documentation License (GFDL) and Creative Commons
            Attribution/Share-Alike (CC BY-SA).
          </p>
          <p> © Andrii Chipets </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5"><a href="https://www.linkedin.com/in/andrii-chipets-91b319105/" target="_blank"> linkedin.com/in/andrii-chipets/ </a></p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-4"> andrii.chipets@gmail.com </p>
          <p className="mt-5"> +38(098)755-1959</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
