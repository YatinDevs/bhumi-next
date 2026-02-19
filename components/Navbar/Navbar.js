"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Download,
  User,
  MapPin,
  Mail,
  ArrowRight,
  Building2,
  FileText,
  Factory,
  LandPlot,
  Droplets,
  Zap,
  Handshake,
  TrendingUp,
  Calculator,
  FileCheck,
  ScrollText,
  Briefcase,
  Shield,
  PiggyBank,
} from "lucide-react";
import { bhumilogo, rajhanslogo } from "@/assets/index"; // Adjust path as needed
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const closeTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileOpen]);

  const handleMouseEnter = (index, type) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (type === "mega") {
      setActiveMegaMenu(index);
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
      setActiveMegaMenu(null);
    }
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveMegaMenu(null);
    }, 200);
  };

  const handleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveMegaMenu(null);
  };

  const quickLinks = [
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
  ];

  // Industrial Services with Icons
  const industrialServices = [
    {
      name: "Industrial Project Planning",
      href: "/industrial/industrial-project-planning",
      icon: <Building2 size={18} />,
    },
    {
      name: "Bank Auction Deals (SARFAESI)",
      href: "/industrial/bank-auction-deals-sarfaesi",
      icon: <LandPlot size={18} />,
    },
    {
      name: "DRT/NCLT Deals",
      href: "/industrial/drt-nclt-deals",
      icon: <ScrollText size={18} />,
    },
    {
      name: "DIC/WMDC NOC",
      href: "/industrial/dic-wmdc-noc",
      icon: <FileCheck size={18} />,
    },
    {
      name: "MIDC Project Report",
      href: "/industrial/midc-project-report",
      icon: <FileText size={18} />,
    },
    {
      name: "MIDC Transfer Process",
      href: "/industrial/midc-transfer-process",
      icon: <Handshake size={18} />,
    },
    {
      name: "MIDC Tri-Party Consent",
      href: "/industrial/midc-tri-party-consent",
      icon: <FileText size={18} />,
    },
    {
      name: "MIDC Water/MSEB Connection",
      href: "/industrial/midc-water-mseb-connection",
      icon: <Droplets size={18} />,
    },
    {
      name: "All MIDC Work",
      href: "/industrial/all-midc-work",
      icon: <Factory size={18} />,
    },
    {
      name: "Industrial Expansion Advisory",
      href: "/industrial/industrial-expansion-advisory",
      icon: <TrendingUp size={18} />,
    },
    {
      name: "Project Finance Setup",
      href: "/industrial/project-finance-setup",
      icon: <Calculator size={18} />,
    },
  ];

  // Financial Services with Icons
  const financialServices = [
    {
      name: "Industrial Deals",
      href: "/financial/industrial-deals",
      icon: <Briefcase size={18} />,
    },
    {
      name: "Term Loans",
      href: "/financial/term-loans",
      icon: <PiggyBank size={18} />,
    },
    {
      name: "CMA/CRA/DPR Report",
      href: "/financial/cma-cra-dpr-report",
      icon: <FileText size={18} />,
    },
    {
      name: "Cash Credit/Working Capital",
      href: "/financial/cash-credit-working-capital",
      icon: <Calculator size={18} />,
    },
    {
      name: "Cost Reduction Techniques",
      href: "/financial/cost-reduction-techniques",
      icon: <TrendingUp size={18} />,
    },
    {
      name: "Start Up Project",
      href: "/financial/start-up-project",
      icon: <Rocket size={18} />,
    },
    {
      name: "Balance Sheet Analysis",
      href: "/financial/balance-sheet-analysis",
      icon: <FileText size={18} />,
    },
    {
      name: "Subsidy Compliance",
      href: "/financial/subsidy-compliance",
      icon: <Shield size={18} />,
    },
    {
      name: "MSME/Udyam Registration",
      href: "/financial/msme-udyam-registration",
      icon: <FileCheck size={18} />,
    },
    {
      name: "Due Diligence for M&A",
      href: "/financial/due-diligence-merger-acquisition",
      icon: <Handshake size={18} />,
    },
    {
      name: "Financial Projection",
      href: "/financial/financial-projection-ratio-analysis",
      icon: <Calculator size={18} />,
    },
    {
      name: "Licenses",
      href: "/financial/licenses",
      icon: <ScrollText size={18} />,
    },
    {
      name: "Business Planning Support",
      href: "/financial/business-planning-support",
      icon: <Briefcase size={18} />,
    },
    {
      name: "Documentation & Compliance",
      href: "/financial/documentation-compliance",
      icon: <FileCheck size={18} />,
    },
  ];

  // Split services into two columns
  const midPointIndustrial = Math.ceil(industrialServices.length / 2);
  const industrialColumn1 = industrialServices.slice(0, midPointIndustrial);
  const industrialColumn2 = industrialServices.slice(midPointIndustrial);

  const midPointFinancial = Math.ceil(financialServices.length / 2);
  const financialColumn1 = financialServices.slice(0, midPointFinancial);
  const financialColumn2 = financialServices.slice(midPointFinancial);

  const navItems = [
    { name: "Home", href: "/", type: "link" },
    {
      name: "About",
      href: "/about",
      type: "dropdown",
      dropdown: [
        { name: "Company Profile", href: "/about" },
        { name: "Our Founder - Milind Rajhans", href: "/founder" },
        { name: "Our Team", href: "/team" },
        { name: "26+ Years of Excellence", href: "/milestones" },
        { name: "Testimonials", href: "/testimonials" },
      ],
    },
    {
      name: "Industrial Services",
      href: "/industrial",
      type: "mega",
      count: "11",
      columns: [industrialColumn1, industrialColumn2],
    },
    {
      name: "Financial Services",
      href: "/financial",
      type: "mega",
      count: "14",
      columns: [financialColumn1, financialColumn2],
    },
    { name: "Contact", href: "/contact", type: "link" },
  ];

  const handleDownloadBrochure = () => {
    const brochureUrl = "/brochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Bhumi-Industrial-Consultant-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div
        className={`gradient-orange text-white transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Left side - Contact Info */}
            <div className="hidden md:flex items-center gap-6 text-sm font-secondary">
              <a
                href="tel:+919822242170"
                className="flex items-center gap-2 hover:text-bhumi-cream transition-colors"
              >
                <Phone size={14} />
                <span>+91 9822242170</span>
              </a>
              <a
                href="mailto:infofiiacc@gmail.com"
                className="flex items-center gap-2 hover:text-bhumi-cream transition-colors"
              >
                <Mail size={14} />
                <span>infofiiacc@gmail.com</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Nashik | Pune | Chakan</span>
              </span>
            </div>

            {/* Right side - Quick Links */}
            <div className="flex items-center gap-4 font-secondary">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm hover:text-bhumi-cream transition-colors hidden md:block"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleDownloadBrochure}
                className="flex items-center gap-2 text-sm hover:text-bhumi-cream transition-colors group"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                <span className="hidden lg:inline">Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-navbar py-2" : "shadow-md py-3"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Dual Logo Section */}
            <Link href="/" className="relative group flex items-center gap-3">
              {/* Main Logo */}
              <div
                className={`transition-all duration-300 ${
                  scrolled ? "h-12 w-auto" : "h-18 w-auto"
                }`}
              >
                <Image
                  src={bhumilogo}
                  alt="Bhumi Industrial Logo"
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-bhumi-gray-light hidden sm:block"></div>

              {/* Secondary Logo / Text Logo */}
              <div
                className={`transition-all duration-300 ${
                  scrolled ? "h-12 w-auto" : "h-16 w-auto"
                }`}
              >
                <Image
                  src={rajhanslogo}
                  alt="Bhumi Industrial Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index, item.type)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.type === "mega" ? (
                    <>
                      <button className="flex items-center gap-1 px-4 py-3 text-lg font-semibold text-gray-700 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-2xl transition-all">
                        <span>{item.name}</span>
                        {item.count && (
                          <span className="ml-1 text-xs bg-bhumi-orange/10 text-bhumi-orange-dark px-1.5 py-0.5 rounded-full">
                            {item.count}
                          </span>
                        )}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeMegaMenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mega Menu - Two Columns */}
                      {activeMegaMenu === index && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white shadow-xl rounded-2xl border border-bhumi-beige/50 py-6 px-4 animate-fadeIn z-50">
                          <div className="grid grid-cols-2 gap-4">
                            {item.columns.map((column, colIndex) => (
                              <div key={colIndex} className="space-y-1">
                                {column.map((service, serviceIndex) => (
                                  <Link
                                    key={serviceIndex}
                                    href={service.href}
                                    className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-xl transition-all text-sm group"
                                    onClick={() => {
                                      setActiveMegaMenu(null);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    <span className="text-bhumi-orange/70 group-hover:text-bhumi-orange">
                                      {service.icon}
                                    </span>
                                    <span className="flex-1">
                                      {service.name}
                                    </span>
                                    <ArrowRight
                                      size={14}
                                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>

                          {/* View All Link */}
                          <div className="mt-4 pt-3 border-t border-bhumi-beige/50 text-center">
                            <Link
                              href={item.href}
                              className="inline-flex items-center gap-2 text-bhumi-orange hover:text-bhumi-orange-dark font-semibold text-sm"
                              onClick={() => {
                                setActiveMegaMenu(null);
                                setActiveDropdown(null);
                              }}
                            >
                              View All {item.name} <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      )}
                    </>
                  ) : item.type === "dropdown" ? (
                    <>
                      <button className="flex items-center gap-1 px-4 py-3 text-lg font-semibold text-gray-700 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-2xl transition-all">
                        <span>{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === index && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-2xl border border-bhumi-beige/50 py-2 animate-fadeIn z-50">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-3 text-gray-700 hover:text-bhumi-orange hover:bg-bhumi-cream transition-all text-sm"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-block px-4 py-3 text-lg font-semibold text-gray-700 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-2xl transition-all"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons - Only Free Consultation remains */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 gradient-orange text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group"
              >
                <Phone className="w-5 h-5" />
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-bhumi-cream hover:text-bhumi-orange transition-all"
            >
              {mobileOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Mobile Menu Panel */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src={bhumilogo}
                  alt="Bhumi Industrial"
                  className="h-10 w-auto"
                />
                <span className="text-lg font-bold gradient-orange bg-clip-text text-transparent">
                  Bhumi
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-bhumi-cream rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-bhumi-orange" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto hide-scrollbar pb-20">
              {/* Home Link */}
              <Link
                href="/"
                className="block p-4 text-gray-800 hover:bg-bhumi-cream rounded-xl font-semibold transition-colors mb-2"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="mb-2">
                <button
                  onClick={() => handleMobileDropdown("about")}
                  className="flex items-center justify-between w-full p-4 text-left text-gray-800 hover:bg-bhumi-cream rounded-xl transition-colors"
                >
                  <span className="font-semibold">About</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="ml-4 border-l-2 border-bhumi-orange/20 pl-2">
                    <Link
                      href="/about"
                      className="block p-3 text-gray-600 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-lg text-sm"
                    >
                      Company Profile
                    </Link>
                    <Link
                      href="/founder"
                      className="block p-3 text-gray-600 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-lg text-sm"
                    >
                      Our Founder
                    </Link>
                    <Link
                      href="/team"
                      className="block p-3 text-gray-600 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-lg text-sm"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/milestones"
                      className="block p-3 text-gray-600 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-lg text-sm"
                    >
                      26+ Years of Excellence
                    </Link>
                    <Link
                      href="/testimonials"
                      className="block p-3 text-gray-600 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-lg text-sm"
                    >
                      Testimonials
                    </Link>
                  </div>
                )}
              </div>

              {/* Industrial Services - Mobile with Icons */}
              <div className="mb-2">
                <button
                  onClick={() => handleMobileDropdown("industrial")}
                  className="flex items-center justify-between w-full p-4 text-left text-gray-800 hover:bg-bhumi-cream rounded-xl transition-colors"
                >
                  <span className="font-semibold flex items-center gap-2">
                    Industrial Services
                    <span className="text-xs bg-bhumi-orange/10 text-bhumi-orange-dark px-2 py-0.5 rounded-full">
                      11
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "industrial" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "industrial" && (
                  <div className="ml-4 space-y-1">
                    {industrialServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center gap-3 p-3 text-gray-600 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-lg transition-colors text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-bhumi-orange">
                          {service.icon}
                        </span>
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/industrial"
                      className="flex items-center gap-2 p-3 text-bhumi-orange font-semibold text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      View All <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Financial Services - Mobile with Icons */}
              <div className="mb-2">
                <button
                  onClick={() => handleMobileDropdown("financial")}
                  className="flex items-center justify-between w-full p-4 text-left text-gray-800 hover:bg-bhumi-cream rounded-xl transition-colors"
                >
                  <span className="font-semibold flex items-center gap-2">
                    Financial Services
                    <span className="text-xs bg-bhumi-orange/10 text-bhumi-orange-dark px-2 py-0.5 rounded-full">
                      14
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "financial" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "financial" && (
                  <div className="ml-4 space-y-1">
                    {financialServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center gap-3 p-3 text-gray-600 hover:text-bhumi-orange hover:bg-bhumi-cream rounded-lg transition-colors text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-bhumi-orange">
                          {service.icon}
                        </span>
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/financial"
                      className="flex items-center gap-2 p-3 text-bhumi-orange font-semibold text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      View All <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="block p-4 text-gray-800 hover:bg-bhumi-cream rounded-xl font-semibold transition-colors mb-2"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              {/* Quick Links in Mobile */}
              <div className="mt-8 pt-6 border-t border-bhumi-beige">
                <h3 className="text-sm font-semibold text-bhumi-gray-medium uppercase mb-3 px-4">
                  Quick Links
                </h3>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block p-4 text-gray-600 hover:bg-bhumi-cream rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Action Buttons - Only Free Consultation remains */}
            <div className="pt-6 border-t border-bhumi-beige space-y-3 bg-white">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full p-4 gradient-orange text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-5 h-5" />
                Free Consultation
              </Link>
              <button
                onClick={() => {
                  handleDownloadBrochure();
                  setMobileOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full p-4 bg-bhumi-cream text-bhumi-orange-dark rounded-xl font-bold hover:bg-bhumi-orange/20 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Mobile Utility Bar - Removed Enquire button */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-bhumi-beige z-40 shadow-lg">
          <div className="flex items-center justify-around p-2">
            <a
              href="tel:+919822242170"
              className="flex flex-col items-center p-2 text-bhumi-orange hover:text-bhumi-orange-dark transition-colors"
            >
              <Phone size={20} />
              <span className="text-xs mt-1">Call</span>
            </a>
            <button
              onClick={handleDownloadBrochure}
              className="flex flex-col items-center p-2 text-bhumi-orange hover:text-bhumi-orange-dark transition-colors group"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span className="text-xs mt-1">Brochure</span>
            </button>
            <Link
              href="/contact"
              className="flex flex-col items-center p-2 text-bhumi-orange hover:text-bhumi-orange-dark transition-colors"
            >
              <Mail size={20} />
              <span className="text-xs mt-1">Contact</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

// Add missing Rocket icon import
function Rocket(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
