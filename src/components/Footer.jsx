import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 text-gray-300 border-t border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <img 
              src="/logo.png" 
              alt="ACE Event Management" 
              className="h-14 w-auto mb-3" 
              loading="lazy"
              width="150"
              height="56"
            />
            <p className="text-sm text-gray-400">Creating unforgettable moments. Join us for Colour Fest 2026 — the biggest Holi event in Nashik!</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                Peruchi Wadi Chulivarchi Misal, Mungsare, Nashik
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:9527906995" className="hover:text-white transition-colors">9527906995</a>
                {' | '}
                <a href="tel:8446332762" className="hover:text-white transition-colors">8446332762</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                aceeventmanagemant@gmail.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/ace_event_managers" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-primary/30 hover:text-primary transition-all">
                <Instagram size={22} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary/30 hover:text-primary transition-all">
                <Facebook size={22} />
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">@ace_event_managers</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ace Event Management. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Passes | Sponsorships | Stalls — Call Now!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
