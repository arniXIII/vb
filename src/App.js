import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Facebook, Instagram, Twitter } from "lucide-react";

export default function HomePage() {
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    document.title = "Beach Volleyball Tournament";

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const handleScroll = () => {
      setShowTopArrow(window.scrollY > 200);

      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsHeroVisible(rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white relative">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 py-4 px-8 flex justify-center items-center shadow-md transition-colors duration-500 ${isHeroVisible ? "bg-black bg-opacity-60" : "bg-black"}`}>
        <h1 className="text-xl font-bold text-center">🏐 Beach Volley</h1>
        <div className="absolute right-8 space-x-6 text-lg">
          <a href="#hero" className="hover:text-yellow-400">Home</a>
          <a href="#events" className="hover:text-yellow-400">Events</a>
          <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="relative h-[78vh] w-full overflow-hidden pt-16">
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: "url('https://avp.com/wp-content/uploads/AVP-2025-WEBSITE-3.0-dark-1800x1013.png')" }}
        ></div>
      </div>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-16 px-4 text-center bg-white bg-opacity-5">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex justify-center flex-wrap gap-6">
            {["/sponsor1.png", "/sponsor2.png", "/sponsor3.png", "/sponsor4.png", "/sponsor5.png", "/sponsor6.png"].map((logo, i) => (
  <img key={i} src={logo} alt={`Sponsor ${i + 1}`} className="w-32 h-16 object-contain bg-white rounded-lg p-2" />
))}
          </div>
        </motion.div>
      </section>

{/* Event Section */}
      <section id="events" className="py-16 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Upcoming Events</h2>
          <p className="text-lg mb-10">Stay tuned! Event schedule will be released soon.</p>
          <div className="max-w-xl mx-auto">
            <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-2">Main Event</h3>
              <p>Date: TBD</p>
              <p>Location: TBD</p>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Media Gallery */}
      <section id="gallery" className="py-16 px-4 text-center bg-gray-900">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Media Gallery</h2>
          <p className="text-lg mb-10">Photos and videos will be available here after the tournament.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
           {["/media1.jpg", "/media2.jpg", "/media3.jpg", "/media4.jpg", "/media5.jpg", "/media6.jpg", "/media7.jpg", "/media8.jpg"].map((img, i) => (
  <img key={i} src={img} alt={`Media ${i + 1}`} className="w-full h-48 object-cover rounded-xl" />
))}
          </div>
          <a href="/media" className="text-yellow-400 hover:underline">View All Media</a>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 text-center bg-black">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg mb-4">For inquiries, sponsorships or volunteering, get in touch with us at:</p>
          <p className="text-yellow-400 text-xl">contact@beachvolleytournament.com</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 px-4 text-center text-sm">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Facebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Instagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Twitter />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Beach Volleyball Annual Tournament. All rights reserved.</p>
        <p className="mt-2">
          Made with ❤️ for beach volleyball lovers. | <a href="#hero" className="text-yellow-400 hover:underline">Back to Top</a>
        </p>
      </footer>

      {/* Back to Top Arrow with Animation */}
      <AnimatePresence>
        {showTopArrow && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-300 z-50"
            aria-label="Back to top"
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
