import { motion } from "framer-motion";
import { Heart, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "../src/assets/prysm.png";


export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <footer
      id="contact"
      className="text-prysm-foreground"
      style={{
        background: "#150d33",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 -10px 30px rgba(0,0,0,0.45), 0 -4px 12px rgba(21,13,51,0.4)"
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center cursor-pointer"   // <-- tighter spacing
              whileHover={{ scale: 1.02 }}
              onClick={() => scrollToSection('hero')}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-prysm-grad-1 rounded-lg flex items-center justify-center shadow-lg">
                <img
                  src={logo}
                  alt="PRYSM Logo"
                  className="h-20 w-20 object-contain"  // <-- larger logo
                />
              </div>

              <div className="leading-tight">
                <h1 className="text-2xl font-extrabold text-white tracking-tight">PRYSM</h1>
                <p className="text-xs text-gray-400 font-medium">
                  Clarity. Direction. Growth.
                </p>
              </div>
            </motion.div>
            <p className="text-sm text-prysm-muted">
              Building the future through meaningful connections and shared growth across communities.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/prismhub", target: "_blank" },
                // { icon: MessageCircle, href: "https://chat.whatsapp.com/DE0qy17AB6t1Qdalf1D2iL", target: "_blank" },
                // { icon: Github, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.target}
                  rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                  className="text-prysm-muted hover:text-prysm-grad-1 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Ecosystem", id: "ecosystem" },
                { name: "Conclave", id: "conclave" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-prysm-muted hover:text-prysm-grad-1 transition-colors"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <motion.div
                className="flex items-center space-x-2 text-prysm-muted hover:text-prysm-grad-1 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4" />
                <span>prysm.operation@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-prysm-muted hover:text-prysm-grad-1 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-4 w-4" />
                <div className="flex flex-col">
                  <span>+91 9909405694</span>
                  <span>+91 9512246617</span>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-prysm-muted hover:text-prysm-grad-1 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-4 w-4" />
                <span>Pune, India</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
        >
          <motion.p
            className="text-sm text-prysm-muted flex items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2025 PRYSM. Made with <Heart className="h-4 w-4 mx-1 text-red-500" />.
          </motion.p>
          <div className="flex space-x-6 text-sm text-prysm-muted mt-4 sm:mt-0">
            <motion.a
              href="#"
              className="hover:text-prysm-grad-1 transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-prysm-grad-1 transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}