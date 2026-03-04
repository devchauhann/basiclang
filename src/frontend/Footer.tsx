import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { Theme } from '../../types';

interface FooterProps {
    onNavigate?: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const { theme } = useTheme();
    const isDark = theme === Theme.DARK;
    const [clickedLink, setClickedLink] = useState<string | null>(null);

    // Handle navigation with scroll to top
    const handleNavigation = (view: string, linkName: string) => {
        setClickedLink(linkName);
        // Scroll to top instantly without animation
        window.scrollTo(0, 0);
        // Navigate after scroll
        setTimeout(() => {
            onNavigate?.(view);
            setClickedLink(null);
        }, 150);
    };

    const resourcesLinks = [
        { name: 'Guide', view: 'landing' },
        { name: 'Courses', view: 'courses' },
        { name: 'Docs', view: 'landing' },
        { name: 'About', view: 'landing' },
    ];

    const featuresLinks = [
        { name: 'Tailwind CSS' },
        { name: 'React Ready' },
        { name: 'Copy & Paste' },
        { name: 'Dark Mode' },
    ];

    const bottomLinks = [
        { name: 'About', view: 'landing' },
        { name: 'Contact', view: 'landing' },
        { name: 'GitHub', url: 'https://github.com' },
        { name: 'License', view: 'landing' },
        { name: 'Privacy Policy', view: 'landing' },
        { name: 'Terms of Service', view: 'landing' },
        { name: 'Sitemap', view: 'landing' },
    ];

    return (
        <footer className={`${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className={`py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-16 border-t ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center gap-1.5 mb-4">
                            <img
                                src="/icon.webp"
                                alt="BasicLang Logo"
                                className="w-5 h-5 object-contain"
                            />
                            <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                                BasicLang
                            </h3>
                        </div>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Learn programming languages from basics to pro level. Comprehensive, interactive, and completely free.
                        </p>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 md:mb-6 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                            Resources
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                            {resourcesLinks.map(link => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => handleNavigation(link.view, link.name)}
                                        className={`text-sm font-medium transition-all duration-300 hover:text-[#6771cd] cursor-pointer ${clickedLink === link.name ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                                            } ${isDark ? 'text-gray-400 hover:text-pink-400' : 'text-gray-700 hover:text-pink-600'
                                            }`}
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Features */}
                    <div>
                        <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 md:mb-6 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                            Features
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                            {featuresLinks.map(link => (
                                <li key={link.name}>
                                    <span className={`text-sm font-medium flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#6771cd]"></span>
                                        {link.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={`flex flex-col md:flex-row items-center justify-between py-6 md:py-8 border-t ${isDark ? 'border-white/5' : 'border-black/5'}`}>
                    <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                        © {new Date().getFullYear()} BasicLang. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 md:gap-2 mt-4 md:mt-0 flex-wrap justify-center">
                        {bottomLinks.map((link, index) => (
                            <React.Fragment key={link.name}>
                                <button
                                    onClick={() => {
                                        if ('url' in link) {
                                            window.open(link.url, '_blank');
                                        } else if ('view' in link) {
                                            handleNavigation(link.view, link.name);
                                        }
                                    }}
                                    className={`text-xs font-medium transition-all duration-300 hover:text-[#6771cd] cursor-pointer ${clickedLink === link.name ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                                        } ${isDark ? 'text-gray-500 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'
                                        }`}
                                >
                                    {link.name}
                                </button>
                                {index < bottomLinks.length - 1 && (
                                    <span className={`${isDark ? 'text-gray-700' : 'text-gray-300'}`}>•</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
