import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Name side by side */}
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQB2xkBhb4GoJLeLwpFOglGIStVy0k-swJVg&s" // Add your logo source here
            alt="Logo"
          />
          <span className='font-bold text-2xl tracking-tight'>Muhammad Asad</span>
        </div>

        {/* Navbar for larger screens */}
        <nav className="hidden md:flex space-x-10">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Navbar for mobile screens */}
        <nav className="md:hidden">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
