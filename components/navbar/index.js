import Link from "next/link";
export default function Navbar() {
  return (
    <div className='flex justify-between items-center font-medium  text-primary_text pt-16  w-120 left-0 right-0 mx-auto absolute z-[1000]'>
    <Link href='/'>
      
        <picture>
          <img src='/assets/icons/logo.svg' alt='build it logo' />
        </picture>
      
    </Link>
    <nav className='flex gap-16'>
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
      className='px-8 rounded-md py-4 font-bold text-white bg-dark-green'
    >
      Need a project?
    </button>
  </div>

  );
}
