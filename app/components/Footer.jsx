import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-black text-white relative lg:mt-2 mt-4">
      <div className="container mx-auto py-8 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-sm lg:text-base">Our vision is to elevate the environmental consciousness of the planet.</p>
          </div>
          <div>
            <div className="text-sm lg:text-base">
              <div>About us</div>
              <div>Management</div>
              <div>Supervisory Board</div>
              <div>Gender & Diversity Board</div>
              <div>Work Ethics</div>
            </div>
          </div>
          <div>
            <div className="text-sm lg:text-base">
              <div>Contact Info</div>
              <div>Accra, Ghana</div>
              <div>0546442747</div>
              <div>buzstopboys@gmail.com</div>
            </div>
          </div>
          <div>
            <div className="text-sm lg:text-base">
              <div>Follow us:</div>
              <div className="flex">
              <Link href="/contact" passHref>
              <Image src="/./facebookicon.png" alt='' width={20} height={20} className='ml-2' />    
      </Link>
      <Link href="/contact" passHref>
      <Image src="/./igicon.png" alt='' width={20} height={20} className='ml-2' />
         
      </Link>
      <Link href="/contact" passHref>
      <Image src="/./tik-tokicon.png" alt='' width={20} height={20} className='ml-2' />

      </Link>
      <Link href="/contact" passHref>
        
      <Image src="/./xicon.png" alt='' width={20} height={20} className='ml-2' />
        
      </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-px w-full" />
      <div className="container mx-auto py-4 px-4 lg:px-0">
        <div className="flex justify-between">
          <div className="text-sm lg:text-base lg:flex gap-4">
            <div>Privacy Policy</div>
            <div>Cookie Policy (GH)</div>
            <div>Disclaimer</div>
            <div>Imprint</div>
          </div>
          <div className="text-sm lg:text-base">&copy; 2024 Buzstopboys. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
