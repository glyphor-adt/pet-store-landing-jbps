import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("bg-primary-100 text-primary-900 py-6 md:py-8 lg:py-12", className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
            <p className="text-sm">Email: support@petparadise.com</p>
            <p className="text-sm">Phone: (555) 123-4567</p>
            <p className="text-sm">123 Pet Street, Anytown, USA</p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="list-none p-0 m-0">
              <li>
                <Link to="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media (Optional) - For demonstration purposes only*/}
          <div>
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <a href="#" className="text-sm hover:underline">
                Facebook
              </a>
              <a href="#" className="text-sm hover:underline">
                Instagram
              </a>
              <a href="#" className="text-sm hover:underline">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-6 md:mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Pet Paradise. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;