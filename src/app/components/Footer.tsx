// components/Footer.tsx
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importing icons
import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center mb-4">
          &copy; 2024 Asad. All rights reserved.
        </div>
        
        {/* Social media icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://facebook.com">
            <FaFacebook className="text-white w-6 h-6 hover:text-blue-500" />
          </Link>
          <Link href="https://instagram.com">
            <FaInstagram className="text-white w-6 h-6 hover:text-pink-500" />
          </Link>
          <Link href="https://wa.me">
            <FaWhatsapp className="text-white w-6 h-6 hover:text-green-500" />
          </Link>
        </div>
      </footer>
    );
};

export default Footer;
