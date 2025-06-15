import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#ffff] text-black mt-10">
      {/* Back to top */}
      <div className="text-center py-3 border-b bg-[#ffff]">
        <h3 className="text-sm font-medium cursor-pointer hover:underline">
          <a href="#top">Back To Top</a>
        </h3>
      </div>

      {/* Main Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 py-8 text-sm">
        <div>
          <h3 className="font-semibold mb-2">Get to Know Us</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Connect with Us</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Make Money</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Sell on Kiranshop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Become an Affiliate
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Your Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Returns Centre
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Brands (Shortened) */}
      <div className="bg-[#ffff]] text-xs text-[#5a5a5a] py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 px-6">
          <div>
            <h4 className="font-semibold">Kiranshop Web</h4>
            <p>Cloud Services</p>
          </div>
          <div>
            <h4 className="font-semibold">Kiranshop Music</h4>
            <p>100M+ Songs, Ad-Free</p>
          </div>
          <div>
            <h4 className="font-semibold">Audible</h4>
            <p>Audio Books</p>
          </div>
          <div>
            <h4 className="font-semibold">IMDb</h4>
            <p>Movies, Celebrities</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-[#5a5a5a] py-4 bg-[#ffff] border-t border-gray-400">
        <p>
          <a href="#" className="hover:underline">
            Conditions of Use
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Privacy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Ads
          </a>
        </p>
        <p className="mt-1">
          © 1996–2025, Kiranshop.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Footer;
