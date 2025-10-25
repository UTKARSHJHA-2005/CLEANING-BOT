import { useState, useEffect } from 'react';
import { Mail, Youtube, Cpu, Droplets, Cog, Map, ChevronDown, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";
import video1 from "./videos/1000012165.mp4";
import video2 from "./videos/11 automatic mop watering system.mp4";
import video3 from "./videos/1000012284.mp4";
import icon from "./assets/icon.png"
import video4 from "./videos/0 Robot movements.mp4"

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Map className="w-10 h-10" />,
      title: "Intelligent Navigation",
      desc: "Real-time SLAM mapping with LiDAR precision. Obstacle detection powered by computer vision.",
      gradient: "from-blue-400 to-cyan-400",
      bg: "from-blue-50 to-cyan-50",
      stats: "99.9% accuracy",
      video: video1
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: "Smart Mopping System",
      desc: "Adaptive moisture control with electro-osmotic technology. Seamless dry-to-wet transitions.",
      gradient: "from-purple-400 to-pink-400",
      bg: "from-purple-50 to-pink-50",
      stats: "3-stage cleaning",
      video: video2
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Adaptive Engine",
      desc: "Neural network recognizes 15+ floor types. Auto-adjusts suction power up to 4000Pa.",
      gradient: "from-orange-400 to-red-400",
      bg: "from-orange-50 to-red-50",
      stats: "AI-powered",
      video: video3
    },
  ];

  const businessModel = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Product Sales & Rentals",
      desc: "Flexible ownership models with monthly subscriptions starting at ₹999.",
      color: "text-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Local Manufacturing",
      desc: "100% Make in India with partnerships across Delhi NCR suppliers.",
      color: "text-purple-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Smart Service Plans",
      desc: "IoT-based predictive maintenance with real-time analytics dashboard.",
      color: "text-cyan-600"
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-100/40 to-transparent rounded-full blur-3xl" />
      </div>
      {/* Floating Nav */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-gray-200/50' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-200">
              <img src={icon} alt="icon" className='w-full' />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              KLIIN
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#business" className="text-gray-600 hover:text-blue-600 transition">Business</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium shadow-lg shadow-blue-100/50">
            <Sparkles className="w-4 h-4" />
            Powered by Advanced IoT
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              KLIIN
            </span>
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 max-w-3xl mx-auto">
            Made In India. Made for India.
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            The intelligent robotic cleaner engineered for diverse Indian floors
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="#features"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-300/50 transition-all hover:scale-105"
            >
              Watch Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>

          <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-gray-400" />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Next-Generation Technology
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-gray-600 text-xl">Cutting-edge innovation for effortless cleaning</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                onMouseEnter={() => setActiveFeature(i)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>

                  <div className="inline-block px-3 py-1 bg-gray-100 group-hover:bg-white/80 rounded-full text-xs font-semibold text-gray-600 mb-4 transition-colors">
                    {feature.stats}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

                  <div className="mt-6 pt-6 border-t border-gray-200 group-hover:border-white/50 transition-colors">
                    <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-white/50 group-hover:to-white/30 rounded-2xl flex items-center justify-center transition-colors">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-2xl"
                        src={feature.video}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          src={video4}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-3xl p-12 md:p-16 shadow-2xl shadow-gray-200/50 border border-gray-100 backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                Our Vision
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                About Us
              </h2>
            </div>

            {/* Bigger Description */}
            <div className="space-y-8 text-gray-600 text-xl md:text-2xl leading-relaxed">
              <p>
                In KLIIN, we believe clean living should be effortless and intelligent. Designed and engineered for India, our robotic cleaner adapts to your environment and lifestyle — giving you more time for what truly matters.
              </p>
              <p>
                With cutting-edge automation and local innovation, KLIIN represents the next step toward smarter homes and sustainable technology.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-sm font-semibold text-gray-500">Floor Types</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">4000Pa</div>
                <div className="text-sm font-semibold text-gray-500">Max Suction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">99.9%</div>
                <div className="text-sm font-semibold text-gray-500">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* BUSINESS MODEL */}
      <section id="business" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Growth Strategy
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Business Model
            </h2>
            <p className="text-gray-600 text-xl">Sustainable growth, local impact</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businessModel.map((item, i) => (
              <div
                key={i}
                className="relative group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />

                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-100 group-hover:to-purple-100 ${item.color} mb-6 transition-colors shadow-lg`}>
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Let's Connect
            </div>
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to experience the future of cleaning? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-gray-200/50 border border-gray-100">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition text-gray-900 placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition text-gray-900 placeholder-gray-400"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition resize-none text-gray-900 placeholder-gray-400"
              />
              <button
                onClick={() => alert('Message sent! We\'ll get back to you soon.')}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-2xl font-semibold shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-300/50 transition-all hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                <img src={icon} alt="icon" className='w-full' />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                KLIIN
              </span>
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:info@codecrafters.ai" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition backdrop-blur-sm">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} CODECRAFTERS. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;