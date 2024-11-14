"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
const theme = {
  primary: '#1F1F1F',       // Black for main text
  secondary: '#F4D03F',     // Refined yellow accents
  accent: '#1F1F1F',        // Gold accent for luxury effect
  background: '#FEF9E7',    // Light background
  footerBackground: '#1F1F1F',
  footerText: '#FEF9E7',
  footerLink: '#1F1F1F',
};

const comparisons = [
  { title: 'User-Friendly', yourProduct: 'Absolutely', others: 'Complicated' },
  { title: 'Affordable', yourProduct: '$35 (Lifetime)', others: '$50+/month' },
  { title: 'Time-Saving', yourProduct: 'Save Hours', others: 'Requires Coding' },
  { title: 'Support', yourProduct: '24/7 Assistance', others: 'Limited' }
];

const testimonials = [
  { name: 'Alex M.', feedback: 'A lifesaver! Our website chatbot was live in minutes. Highly recommend.', position: 'Founder, ChatStartups' },
  { name: 'Sarah L.', feedback: 'Perfect solution for non-techies. Smooth setup, and great results.', position: 'Marketing Lead, InnovateCo' },
  { name: 'James T.', feedback: 'Intuitive and efficient! Saved us tons of time.', position: 'CTO, WebLink' }
];

const features = [
  { title: 'Instant Setup', description: 'Get up and running in under 5 minutes, no coding required.', icon: '⚙️' },
  { title: 'Beautiful Templates', description: "Choose designs that perfectly fit your brand's voice.", icon: '🎨' },
  { title: 'Actionable Insights', description: 'Track interactions to refine your engagement strategies.', icon: '📊' },
  { title: '24/7 Live Support', description: 'Get expert help anytime with our dedicated support team.', icon: '🕐' },
  { title: 'Customizable Widgets', description: 'Personalize your chatbot with intuitive settings.', icon: '🛠️' },
  { title: 'Secure & Reliable', description: 'Your data is safe with us; industry-standard protection.', icon: '🔒' }
];

const faqs = [
  { question: 'Which platforms are supported?', answer: 'GetBotyfied is compatible with popular frameworks, including Next.js, React, WordPress, and more.' },
  { question: 'Is my data secure with GetBotyfied?', answer: 'Absolutely. We ensure the highest level of encryption and regular security audits.' },
  { question: "Can I change my chatbot's style later?", answer: 'Yes, you can update and customize your chatbot anytime.' },
  { question: 'How do I access support?', answer: 'Our 24/7 live support team is available through chat and email.' }
];

const FeatureCard = ({ feature, index }) => (
  <motion.div
    className="relative text-center p-8 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-700"
    initial={{ opacity: 0, y: 40, rotateX: -25, z: -100 }}
    animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    whileHover={{ scale: 1.08, rotateY: 15, z: 50 }}
    style={{ 
      perspective: '2000px',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden'
    }}
  >
    <span className="text-5xl text-gray-800" style={{ transform: 'translateZ(60px)', display: 'block' }}>{feature.icon}</span>
    <h3 className="text-2xl font-bold mt-4" style={{ color: theme.primary, transform: 'translateZ(40px)' }}>{feature.title}</h3>
    <p className="mt-2 text-gray-600" style={{ transform: 'translateZ(20px)' }}>{feature.description}</p>
  </motion.div>
);

const ComparisonRow = ({ comparison }) => (
  <motion.div
    className="grid grid-cols-3 text-center py-4 border-b border-gray-300 hover:shadow-md rounded-lg bg-white transition-all duration-700"
    initial={{ opacity: 0, rotateX: -20, z: -50 }}
    animate={{ opacity: 1, rotateX: 0, z: 0 }}
    whileHover={{ scale: 1.05, rotateY: 10, z: 30 }}
    style={{ 
      perspective: '2000px',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden'
    }}
  >
    <div className="font-medium text-black" style={{ transform: 'translateZ(40px)' }}>{comparison.title}</div>
    <div className="font-medium text-black" style={{ transform: 'translateZ(40px)' }}>{comparison.yourProduct}</div>
    <div className="font-medium text-black" style={{ transform: 'translateZ(40px)' }}>{comparison.others}</div>
  </motion.div>
);

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    className="relative p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl"
    initial={{ opacity: 0, y: 40, rotateX: -25, z: -100 }}
    animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
    transition={{ duration: 0.8, delay: index * 0.15 }}
    whileHover={{ scale: 1.08, rotateY: 15, z: 50 }}
    style={{ 
      perspective: '2000px',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden'
    }}
  >
    <p className="text-lg italic text-gray-800" style={{ transform: 'translateZ(60px)' }}>"{testimonial.feedback}"</p>
    <p className="mt-4 text-sm font-semibold text-black" style={{ transform: 'translateZ(40px)' }}>- {testimonial.name}, {testimonial.position}</p>
  </motion.div>
);

const FAQItem = ({ faq }) => (
  <motion.div
    className="border-b border-gray-300 pb-4 mb-4 rounded-lg hover:shadow-md"
    initial={{ opacity: 0, y: 20, rotateX: -15, z: -50 }}
    animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
    transition={{ duration: 0.7 }}
    whileHover={{ scale: 1.05, rotateY: 10, z: 30 }}
    style={{ 
      perspective: '2000px',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden'
    }}
  >
    <h4 className="text-lg font-semibold text-black" style={{ transform: 'translateZ(40px)' }}>{faq.question}</h4>
    <p className="text-gray-600" style={{ transform: 'translateZ(20px)' }}>{faq.answer}</p>
  </motion.div>
);

const Footer = () => (
  <footer className="w-full py-12 bg-gray-800 text-gray-200">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">GetBotyfied</h2>
          <p className="text-sm text-gray-400">Supercharge your customer interactions with a chatbot that's easy to set up and maintain. Just pay once for lifetime access.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Stay Connected</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-xl transition"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-xl transition"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-xl transition"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-xl transition"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="mt-4 text-sm text-gray-400">Email: support@getbotyfied.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} GetBotyfied. All rights reserved.
      </div>
    </div>
  </footer>
);

const PricingSection = () => (
  <motion.section
    id="pricing"
    className="max-w-6xl w-full p-12 mt-12 rounded-3xl shadow-xl bg-black text-center"
    initial={{ opacity: 0, scale: 0.9, rotateX: -20, z: -100 }}
    animate={{ opacity: 1, scale: 1, rotateX: 0, z: 0 }}
    whileHover={{ scale: 1.02, rotateY: 5, z: 30 }}
    transition={{ duration: 0.7 }}
    style={{ 
      perspective: '2000px',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden'
    }}
  >
    <h2 className="text-5xl font-extrabold text-white mb-6" style={{ transform: 'translateZ(80px)' }}>
      Lifetime Access
    </h2>
    <p className="text-lg text-gray-300 mb-8" style={{ transform: 'translateZ(60px)' }}>
      Pay once, enjoy forever—only <span className="font-bold text-yellow-400">$35</span> for unlimited use and updates.
    </p>

    <motion.button
      className="mt-8 px-10 py-5 bg-yellow-400 text-black font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.15, rotateY: 15, z: 50 }}
      whileTap={{ scale: 0.95 }}
      style={{ 
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
    >
      Buy Now for $35
    </motion.button>

    <p className="mt-6 text-sm text-gray-500" style={{ transform: 'translateZ(40px)' }}>
      Secure your lifetime deal before it expires!
    </p>
  </motion.section>
);

const Navbar = () => (
  <motion.nav 
    className="flex justify-between items-center w-full max-w-6xl mx-auto px-8 py-4 fixed top-0 bg-white z-50 shadow-md rounded-full"
    initial={{ y: -100, rotateX: -30 }}
    animate={{ y: 3, rotateX: 0 }}
    transition={{ type: "spring", stiffness: 120 }}
    style={{ 
      perspective: '2000px',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden'
    }}
  >
    <div className="text-3xl font-bold" style={{ color: theme.primary, transform: 'translateZ(40px)' }}>GetBotyfied</div>
    <div className="space-x-8 text-lg">
      <motion.a href="#features" className="text-black hover:text-yellow-400 transition-all" whileHover={{ scale: 1.15, rotateY: 15, z: 30 }}>Features</motion.a>
      <motion.a href="#pricing" className="text-black hover:text-yellow-400 transition-all" whileHover={{ scale: 1.15, rotateY: 15, z: 30 }}>Pricing</motion.a>
      <motion.a href="#testimonials" className="text-black hover:text-yellow-400 transition-all" whileHover={{ scale: 1.15, rotateY: 15, z: 30 }}>Testimonials</motion.a>
      <motion.a href="#faq" className="text-black hover:text-yellow-400 transition-all" whileHover={{ scale: 1.15, rotateY: 15, z: 30 }}>FAQ</motion.a>
    </div>
  </motion.nav>
);

const HomePage = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center space-y-16 pt-24 pb-24" style={{ backgroundColor: theme.background }}>
      <div className="absolute inset-0 overflow-hidden" style={{ 
        backgroundImage: `
          linear-gradient(rgba(254, 249, 231, 0.97), rgba(254, 249, 231, 0.97)),
          linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px),
          linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        transform: 'perspective(1000px) rotateX(60deg) scale(2.5)',
        transformOrigin: 'center -100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Navbar />

      <motion.header
        className="max-w-6xl w-full text-center mt-32 p-12 bg-white rounded-xl shadow-md relative z-10"
        initial={{ opacity: 0, y: -30, rotateX: -25, z: -100 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
        whileHover={{ scale: 1.02, rotateY: 5, z: 30 }}
        transition={{ duration: 0.7 }}
        style={{ 
          perspective: '2000px',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden'
        }}
      >
        <h1 className="text-6xl font-extrabold mb-4" style={{ color: theme.primary, transform: 'translateZ(80px)' }}>Supercharge Your Chatbots</h1>
        <p className="text-lg text-gray-700" style={{ transform: 'translateZ(60px)' }}>Effortless setup, no code required. Lifetime access for just $35!</p>
        <motion.button
          className="mt-8 px-8 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.15, rotateY: 15, z: 50 }}
          style={{ 
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          Get Started Now
        </motion.button>
      </motion.header>

      <motion.section className="max-w-6xl w-full space-y-10 text-center relative z-10" id="features">
        <h2 className="text-5xl font-bold" style={{ color: theme.primary }}>Why Choose GetBotyfied?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </motion.section>

      <PricingSection/>

      <motion.section className="max-w-6xl w-full space-y-10 text-center relative z-10" id="testimonials">
        <h2 className="text-5xl font-bold" style={{ color: theme.primary }}>What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </motion.section>

      <motion.section className="max-w-6xl w-full space-y-10 text-center relative z-10" id="faq">
        <h2 className="text-5xl font-bold" style={{ color: theme.primary }}>Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default HomePage;
