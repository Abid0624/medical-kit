const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-12">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
            alt="Medical Kit Logo"
            className="w-16 h-16 mb-4"
          />
          <p className="font-bold text-lg">MediKit Store</p>
          <p className="text-sm mt-1">
            Your trusted supplier of medical kits and emergency supplies
          </p>
        </div>

        {/* Products */}
        <div>
          <h6 className="footer-title mb-3 font-semibold text-lg">Products</h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover">First Aid Kits</a>
            </li>
            <li>
              <a className="link link-hover">Monitoring Devices</a>
            </li>
            <li>
              <a className="link link-hover">Emergency Supplies</a>
            </li>
            <li>
              <a className="link link-hover">Protective Gear</a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="footer-title mb-3 font-semibold text-lg">Company</h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover">About Us</a>
            </li>
            <li>
              <a className="link link-hover">Careers</a>
            </li>
            <li>
              <a className="link link-hover">Blog</a>
            </li>
            <li>
              <a className="link link-hover">Support</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h6 className="footer-title mb-3 font-semibold text-lg">Contact</h6>
          <ul className="space-y-2 text-sm">
            <li>📍 64, Road No-01, South Khulshi, Chattogram</li>
            <li id="contact">📞 01834254409</li>
            <li>✉️ support@medikit.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-base-300 text-center py-4 mt-4 text-sm">
        © 2015 Manha Enterprise — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
