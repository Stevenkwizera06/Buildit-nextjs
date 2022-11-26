import Link from "next/link";
export default function Navbar() {
  return (
    <div className='flex justify-between items-center font-medium  text-primary_text pt-16 py-[60px] w-[1200px] left-0 right-0 mx-auto absolute z-[1000]'>
    <Link href='/'>
      
        <picture>
          <img src='/assets/icons/logo.svg' alt='build it logo' />
        </picture>
      
    </Link>
    <nav className='flex gap-[50px]'>
      <Link href='/about'>
        About
      </Link>
      <Link href='/services'>
        Services
      </Link>
      <Link href='/projects'>
        Projects
      </Link>
      <Link href='/contact'>
        Contact
      </Link>
    </nav>
    <button
      type='button'
      className='px-[25px] rounded-md py-[10px] font-bold text-white bg-[#4397A4]'
    >
      Need a project?
    </button>
  </div>

  );
}
