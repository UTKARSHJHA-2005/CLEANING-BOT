import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight} from 'lucide-react';
import icon from "../public/assets/icon.png"
import map from "../public/assets/Map.png"
import { FaApple, FaPlay } from "react-icons/fa";
import { Cpu, Droplets, Map } from "lucide-react";
import "./App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [open, setOpen] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const features = [
    {
      icon: <Map className="w-10 h-10" />,
      title: "Intelligent Navigation",
      desc: "Real-time SLAM mapping with LiDAR precision. Obstacle detection powered by computer vision.",
      stats: "99.9% accuracy",
      color: "from-cyan-500 to-blue-600",
      video: "https://res.cloudinary.com/dhszvdzft/video/upload/v1761895724/1000012165_eibxow.mp4"
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: "Smart Mopping System",
      desc: "Adaptive moisture control with electro-osmotic technology. Seamless dry-to-wet transitions.",
      stats: "3-stage cleaning",
      color: "from-blue-500 to-purple-600",
      video: "https://res.cloudinary.com/dhszvdzft/video/upload/v1761895676/Mop_zlhjfj.mp4"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Adaptive Engine",
      desc: "Neural network recognizes different floor types. Auto-adjusts suction power up to 3000Pa.",
      stats: "AI-powered",
      color: "from-purple-500 to-pink-600",
      video: "https://res.cloudinary.com/dhszvdzft/video/upload/v1761895778/1000012284_mzqbm0.mp4"
    },
  ];

  const specs = [
    { label: "Processing Power", value: "Quad-core AI Chip" },
    { label: "Water Pump", value: "~0.2L/min" },
    { label: "Battery Capacity", value: "4500mAh" },
    { label: "Noise Level", value: "40dB Whisper" },
    { label: "Mapping Range", value: "360° LIDAR" },
    { label: "Power Consumption", value: "~40-45 W at full load" },
  ];

  return (
    <div className="bg-slate-950 text-gray-100 font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <img src={icon} className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              KLIIN
            </h1>
          </div>
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'Technology', 'Features', 'Navigation', 'Order'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
          <button className="md:hidden text-cyan-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-xl md:hidden pt-20">
          <ul className="flex flex-col items-center space-y-8 text-xl font-medium mt-12">
            {['Home', 'Technology', 'Features', 'Navigation', 'Order'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <div data-aos="zoom-out" className="inline-block mb-6">
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold tracking-wider backdrop-blur-sm">
              NEXT-GEN ROBOTICS
            </span>
          </div>
          <h1 data-aos="zoom-in" className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Autonomous
            </span>
            <br />
            <span className="text-white">Cleaning Intelligence</span>
          </h1>
          <p data-aos="zoom-out" className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the future of home automation with AI-powered precision,
            quantum suction technology, and neural learning capabilities.
          </p>
          <div data-aos="zoom-in" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white overflow-hidden shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Technical System
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a href="https://drive.google.com/file/d/1z8jXGQasEEnKiJLbuVaJKrucvd6D01wY/view?usp=sharing" target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-cyan-500/50 rounded-full font-bold text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300">
              View Specifications
            </a>
          </div>
          {/* Stats */}
          <div data-aos="flip-left" className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { value: "18-22 CFM", label: "Suction Power" },
              { value: "60min", label: "Runtime" },
              { value: "100ml", label: "Water Tank Capacity" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </section>
      {/* Technology Section */}
      <section id="technology" className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div data-aos="zoom-out" className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6 backdrop-blur-sm">
              POWERED BY AI
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Neural Technology
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Revolutionary autonomous cleaning system with advanced AI processing,
              LIDAR mapping, and quantum-enhanced suction technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-left" className="space-y-6">
              {specs.map((spec, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-slate-900/50 border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all duration-300 group">
                  <span className="text-gray-400 font-medium">{spec.label}</span>
                  <span className="text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div data-aos="fade-right" className="relative bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-6 backdrop-blur-sm">
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <video className="absolute inset-0 w-full h-full object-cover scale-110" autoPlay loop 
                  muted playsInline src="https://res.cloudinary.com/dhszvdzft/video/upload/v1761895419/Robo_ihs6rk.mp4"></video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </section>
      {/* Features Grid */}
      <section id="features" className="py-32 px-6 bg-slate-950 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div data-aos="flip-down" className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
              SYSTEM CAPABILITIES
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
              Advanced Features
            </h2>
            <p className="text-gray-400 text-xl">Cutting-edge technology meets intelligent automation</p>
          </div>
          <div data-aos="flip-up" className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group relative bg-slate-900/70 border border-slate-800 rounded-3xl p-8 overflow-hidden
                 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative flex flex-col items-center text-center space-y-4">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  {/* Stat / Label */}
                  {feature.stats && (
                    <span className="text-sm font-semibold text-cyan-400 tracking-wide bg-slate-800/60 px-3 py-1 rounded-full">
                      {feature.title}
                    </span>
                  )}
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                    {feature.desc}
                  </p>
                  {/* Video */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden mt-4">
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125">
                      <source src={feature.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
          <section id="navigation" className="relative py-32 px-6 bg-slate-950 overflow-hidden">            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div data-aos="zoom-out" className="flex justify-center">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                    System Navigation
                  </span>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div data-aos="zoom-in-right" className="space-y-8 mt-9">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                      KLIIN is equipped with
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      state-of-the-art sensors
                    </span>
                    <br />
                    <span className="text-white">
                      and advanced mapping technology
                    </span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                    Navigate your home with precision using LIDAR-powered mapping,
                    real-time obstacle detection, and AI-driven path optimization.
                  </p>
                  <div className="pt-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                      <p className="text-cyan-400 text-sm font-bold uppercase tracking-wider">
                        Smart App for Navigation
                      </p>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <button className="group relative flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 text-gray-300 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-3">
                          <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-gradient-to-br group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all">
                            <FaApple className='text-white h-full w-full' />
                          </div>
                          <span className="font-semibold group-hover:text-cyan-400 transition-colors">Apple Store</span>
                        </div>
                      </button>
                      <button className="group relative flex items-center gap-3 bg-slate-900/50 border border-slate-800 rounded-xl px-6 py-4 text-gray-300 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-3">
                          <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all">
                            <FaPlay className='text-white h-full w-full' />
                          </div>
                          <span className="font-semibold group-hover:text-blue-400 transition-colors">Google Play</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in-left" className="relative flex justify-center lg:justify-end">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative w-full max-w-xl">
                    <div className="relative overflow-hidden mb-40 rounded-3xl border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 group">
                      <img src={map} alt="Home mapping visualization"
                        className="w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-lg"></div>
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-lg"></div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/60 rounded-br-lg"></div>
                    </div>
                    <div data-aos="zoom-out" className="absolute bottom-28 -left-20 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 shadow-xl shadow-cyan-500/20">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-cyan-400 text-xs font-semibold">Real-time Mapping</div>
                          <div className="text-white text-lg font-black">Active</div>
                        </div>
                      </div>
                    </div>
                    <div data-aos="zoom-out" className="absolute -top-12 -right-6 bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4 shadow-xl shadow-blue-500/20">
                      <div className="text-center">
                        <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                          96.8%
                        </div>
                        <div className="text-gray-400 text-xs font-medium">Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* CTA Section */}
      <section id="order" className="py-32 px-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-slate-950 to-transparent"></div>
        <div data-aos="fade-up-right" className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Ready to Experience the Future?
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied users who have upgraded to intelligent autonomous cleaning.
          </p>
          <button onClick={() => setOpen(true)} data-aos="fade-up-left"
            className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-2">
              Order Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
        {/* Modal */}
        {open && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div data-aos="flip-left" className="relative bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl max-w-md w-full p-8">
              <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-cyan-400 hover:text-cyan-200 transition">
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Place Your Order
              </h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Name</label>
                  <input type="text" placeholder="Enter your name"
                    className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-400" required />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Email</label>
                  <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-400"
                    required />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Address</label>
                  <input type="text" placeholder="Enter your address" className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-400"
                    required />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Description</label>
                  <textarea placeholder="Describe your order" className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-400" rows="3"></textarea>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">Date</label>
                  <input type="date" value={today} className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-400" readOnly />
                </div>
                <button type="submit" className="w-full mt-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300">
                  Submit Order
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
      {/* Footer */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-800 py-16 px-6">
        <div data-aos="zoom-out" className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <img src={icon} className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                KLIIN
              </h3>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Next-generation autonomous cleaning robotics powered by artificial intelligence.
            </p>
            <div className="flex gap-3">
              <input type="email" placeholder="Join us for Robotics News" className="flex-1 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm outline-none focus:border-cyan-500/50 transition-colors" />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Join
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Features</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Specifications</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Technology</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">User Manual</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Warranty</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Returns</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>support@kliin.com</li>
              <li>+91 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-gray-600 text-sm">
          <p>© 2025 KLIIN. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
}
