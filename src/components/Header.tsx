import { useState } from 'react';
import { Menu, X, Phone, ChevronDown, Mail, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Home', href: '/', active: true },
    { 
      title: 'About', 
      href: '#',
      dropdown: [
        { title: 'About TGANB', href: '/about-tganb' },
        { title: 'Vision & Mission', href: '/vision-mission' },
        { title: 'Anti-Drug Committees', href: '/anti-drug-committees' },
        { title: 'About Logo', href: '/about-logo' },
        { title: "Director's Note", href: '/directors-note' },
        { title: 'Officers Directory', href: '/officers-directory' },
        { title: 'Central Co-ordination', href: '/central-coordination' },
        { title: 'State Co-ordination', href: '/state-coordination' },
        { title: 'TGANB GO 27', href: '/tganb-go-27' },
        { title: 'TGANB Structure', href: '/tganb-structure' },
        { title: 'About T-RISING.AI', href: '/about-t-rising-ai' },
        { title: 'About Sahay AI', href: '/about-sahay-ai', gradient: 'from-green-500 to-emerald-500' },
        { title: 'About Shield AI', href: '/about-shield-ai', gradient: 'from-slate-500 to-slate-600' },
        { title: 'About Uday AI', href: '/about-uday-ai', gradient: 'from-purple-500 to-pink-500' }
      ]
    },
    { 
      title: 'Support Centers', 
      href: '#',
      dropdown: [
        { title: 'Narcotic Police Stations', href: '/narcotic-police-stations' },
        { title: 'Regional Narcotic Control Cells', href: '/regional-narcotic-police-stations' },
        { title: 'Rehabilitation Centers', href: '/rehabilitation-centers' }
      ]
    },
    { 
      title: 'Initiatives', 
      href: '#',
      dropdown: [
        { title: 'Mission Parivartana', href: '/mission-parivartana' },
        { title: 'Operation Sankalp', href: '/operation-sankalp' },
        { title: 'Prahari Clubs', href: '/prahari-clubs' }
      ]
    },
    { 
      title: 'Awareness', 
      href: '#',
      dropdown: [
        { title: 'Events & Campaigns', href: '/events-campaigns' },
        { title: 'Testing Kits & Detection Methods', href: '/testing-kits' },
        { title: 'Education', href: '/education' },
        { title: 'Myths & Facts', href: '/myths-facts' },
        { title: 'FAQs', href: '/faqs' }
      ]
    },
    { 
      title: 'Certifications', 
      href: '#',
      dropdown: [
        { title: 'Anti Drug Soldier Enrollment', href: '/anti-drug-soldier-enrollment' },
        { title: 'Verification Center', href: '/certificate-verification' }
      ]
    },
    { title: 'Reports', href: '/drug-report-submission' },
    { title: 'Trainings', href: '/trainings' },
    { title: 'Statistics', href: '/statistics' },
    { 
      title: 'News & Achievements', 
      href: '#',
      dropdown: [
        { title: 'Achievements', href: '/achievements' },
        { title: 'News', href: '/news' }
      ]
    },
    { title: 'Contact', href: '/contact' }
  ];

  const handleNavigation = (href: string) => {
    if (href !== '#') {
      navigate(href);
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleEmail = () => {
    window.location.href = 'mailto:tsnabho-hyd@tspolice.gov.in';
  };

  const handleSocialMedia = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <header className="bg-white shadow-lg border-b border-green-600 sticky top-0 z-50 font-poppins">
      {/* Top Header - Dark Professional Gradient */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-1 md:py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/37f408d2-9357-4e1c-af91-05f171f00af2.png" 
              alt="Government of Telangana" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/30"
            />
            <div className="h-6 w-px bg-white/30 hidden md:block"></div>
            <img 
              src="/lovable-uploads/cfe052e4-2276-4a1d-b6af-bc0ad7c3ccd4.png" 
              alt="TG ANB Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/30"
            />
          </div>
          
          <div className="text-center flex-1">
            <h1 className="text-base md:text-xl font-bold font-poppins tracking-wide">
              TELANGANA ANTI NARCOTICS BUREAU (TGANB)
            </h1>
            <p className="text-sm text-green-200 hidden md:block">Government of Telangana</p>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex flex-col items-end space-y-1">
            <div className="flex items-center space-x-2">
              <div 
                className="flex items-center space-x-1 bg-red-600 px-2 py-1 rounded-full text-xs font-bold cursor-pointer hover:bg-red-700 transition-colors"
                onClick={() => handleCall('1908')}
              >
                <Phone className="w-3 h-3" />
                <span>1908</span>
              </div>
              <div 
                className="flex items-center space-x-1 bg-green-600 px-2 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-green-700 transition-colors"
                onClick={() => handleCall('8712671111')}
              >
                <Phone className="w-2 h-2" />
                <span>8712671111</span>
              </div>
            </div>
            <div 
              className="flex items-center space-x-1 text-xs text-green-200 cursor-pointer hover:text-white transition-colors"
              onClick={handleEmail}
            >
              <Mail className="w-2 h-2" />
              <span>tsnabho-hyd@tspolice.gov.in</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-1">
              <button 
                onClick={() => handleSocialMedia('https://www.instagram.com/telanganaantinarcoticsbureau/')}
                className="w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram className="w-2 h-2" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://x.com/tg_anb?lang=en')}
                className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              >
                <Twitter className="w-2 h-2" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://www.facebook.com/telanganaantinarcoticsbureau/')}
                className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <Facebook className="w-2 h-2" />
              </button>
              <button 
                onClick={() => handleSocialMedia('https://www.youtube.com/@TG_ANB')}
                className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-2 h-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Bright White Background */}
      <nav className="bg-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1 justify-center flex-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    className={`text-xs font-medium transition-all duration-200 py-1 px-2 rounded whitespace-nowrap flex items-center gap-1 ${
                      item.href === '/' 
                        ? 'text-green-600 bg-green-50 border-b-2 border-green-600 font-bold' 
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                    onClick={() => handleNavigation(item.href)}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                  >
                    {item.title}
                    {item.dropdown && <ChevronDown className="w-3 h-3" />}
                  </button>
                  
                  {item.dropdown && activeDropdown === item.title && (
                    <div 
                      className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border min-w-48 z-[60] py-2"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <button
                          key={dropdownIndex}
                          className={`w-full text-left py-2 px-4 text-sm font-medium transition-colors ${
                            dropdownItem.gradient 
                              ? `text-white bg-gradient-to-r ${dropdownItem.gradient} hover:opacity-90 mx-2 rounded-md`
                              : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                          }`}
                          onClick={() => handleNavigation(dropdownItem.href)}
                        >
                          {dropdownItem.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* T-RISING.AI Button - now redirects to /about-rising-ai */}
              <button 
                onClick={() => handleNavigation('/about-rising-ai')}
                className="text-xs font-medium transition-all duration-200 py-1 px-2 rounded whitespace-nowrap text-white bg-gradient-to-r from-slate-600 to-emerald-600 hover:from-slate-700 hover:to-emerald-700 font-bold shadow-lg"
              >
                T-RISING.AI
              </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="lg:hidden absolute left-4 right-4 top-full mt-2 bg-white rounded-lg shadow-lg border max-h-64 overflow-y-auto z-50">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <button 
                      className={`w-full text-left py-2 px-4 text-sm font-medium ${
                        item.href === '/' 
                          ? 'text-green-600 bg-green-50 font-bold' 
                          : 'text-gray-700 hover:bg-green-50'
                      }`}
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.title}
                    </button>
                    {item.dropdown && item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <button
                        key={dropdownIndex}
                        className={`w-full text-left py-2 px-8 text-sm ${
                          dropdownItem.gradient 
                            ? `text-white bg-gradient-to-r ${dropdownItem.gradient}`
                            : 'text-gray-600 hover:bg-green-50'
                        }`}
                        onClick={() => handleNavigation(dropdownItem.href)}
                      >
                        {dropdownItem.title}
                      </button>
                    ))}
                  </div>
                ))}
                
                {/* T-RISING.AI Mobile Button */}
                <button 
                  onClick={() => { handleNavigation('/about-rising-ai'); setIsMenuOpen(false); }}
                  className="w-full text-left py-2 px-4 text-sm font-bold text-white bg-gradient-to-r from-slate-600 to-emerald-600"
                >
                  T-RISING.AI
                </button>
                
                {/* Mobile Contact Info */}
                <div className="border-t p-4 space-y-2">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleCall('1908')}
                      className="flex items-center space-x-1 bg-red-600 px-2 py-1 rounded text-white text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>1908</span>
                    </button>
                    <button 
                      onClick={() => handleCall('8712671111')}
                      className="flex items-center space-x-1 bg-green-600 px-2 py-1 rounded text-white text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>8712671111</span>
                    </button>
                  </div>
                  <button 
                    onClick={handleEmail}
                    className="flex items-center space-x-1 text-xs text-green-600"
                  >
                    <Mail className="w-3 h-3" />
                    <span>tsnabho-hyd@tspolice.gov.in</span>
                  </button>
                  <div className="flex space-x-2">
                    <button onClick={() => handleSocialMedia('https://www.instagram.com/telanganaantinarcoticsbureau/')}>
                      <Instagram className="w-5 h-5 text-pink-600" />
                    </button>
                    <button onClick={() => handleSocialMedia('https://x.com/tg_anb?lang=en')}>
                      <Twitter className="w-5 h-5 text-gray-800" />
                    </button>
                    <button onClick={() => handleSocialMedia('https://www.facebook.com/telanganaantinarcoticsbureau/')}>
                      <Facebook className="w-5 h-5 text-slate-600" />
                    </button>
                    <button onClick={() => handleSocialMedia('https://www.youtube.com/@TG_ANB')}>
                      <Youtube className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
