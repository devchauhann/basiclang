import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { Theme } from '../../types';

interface HeaderProps {
    onNavigate?: (view: string) => void;
    title?: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, title }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === Theme.DARK;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent scroll when menu is open
    React.useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <nav className={`sticky top-0 z-50 w-full transition-all duration-500 h-14 flex items-center ${isDark
                ? 'bg-[rgb(27,27,31)]'
                : 'bg-white'
                }`}>
                <div className="max-w-[1440px] w-full mx-auto px-5 flex items-center justify-between">

                    {/* Left Section: Logo - Always visible */}
                    <div className="flex items-center gap-2">
                        {title ? (
                            <h1 className={`text-[15px] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600`}>
                                {title}
                            </h1>
                        ) : (
                            <>
                                <button
                                    onClick={() => onNavigate?.('landing')}
                                    className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
                                >
                                    <img
                                        src="/icon.webp"
                                        alt="BasicLang Logo"
                                        className="w-5 h-5 object-contain"
                                    />
                                </button>
                                <button
                                    onClick={() => onNavigate?.('landing')}
                                    className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
                                >
                                    <span className={`text-[15px] font-bold tracking-tight transition-all duration-500 ${isDark ? 'text-white/90' : 'text-black'}`}>
                                        BasicLang
                                    </span>
                                </button>
                            </>
                        )}
                    </div>


                    {/* Right Section: Desktop Menu & Mobile Icons */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Menu - Hidden on Mobile */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={() => onNavigate?.('landing')}
                                className={`text-[13px] font-semibold transition-all duration-500 ${isDark ? 'text-white/80 hover:text-pink-500' : 'text-gray-600 hover:text-black'}`}
                            >
                                Home
                            </button>
                            <div className={`w-[1px] h-4 transition-all duration-500 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                            <button
                                onClick={() => onNavigate?.('courses')}
                                className={`${isDark ? 'text-white/70' : 'text-gray-500'} hover:text-pink-500 transition-all duration-500 flex items-center gap-1 text-[13px] font-semibold`}
                            >
                                Courses
                            </button>
                            <div className={`w-[1px] h-4 transition-all duration-500 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                            <button
                                onClick={() => { }}
                                className={`text-[13px] font-semibold transition-all duration-500 ${isDark ? 'text-white/80 hover:text-pink-500' : 'text-gray-600 hover:text-black'}`}
                            >
                                Docs
                            </button>

                            {/* Switch Style Toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`relative w-10 h-5.5 rounded-full transition-all duration-500 flex items-center p-0.5 ${isDark ? 'bg-[#2f2f32]' : 'bg-gray-200'
                                    }`}
                            >
                                <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center transition-all duration-500 ${isDark ? 'translate-x-[18px] bg-[#1b1b1f]' : 'translate-x-0 bg-white shadow-sm'
                                    }`}>
                                    {isDark ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ebebf5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3c3c43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                    )}
                                </div>
                            </button>

                            <div className={`w-[1px] h-4 transition-all duration-500 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`transition-all duration-500 ${isDark ? 'text-white/70' : 'text-gray-500'} hover:text-white`}
                                title="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>

                        {/* Mobile Icons - GitHub, NPM, LinkedIn, X & Hamburger */}
                        <div className="flex md:hidden items-center gap-2">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-zinc-400 transition-colors"
                                title="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>

                            {/* Mobile Menu Button - Styled Hamburger with Animation */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`${isDark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-gray-700'} flex flex-col items-end justify-center gap-1 transition-colors`}
                            >
                                {/* Top Line - full width, rotates */}
                                <div className={`h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'w-4 rotate-45 translate-y-[8px]' : 'w-5'
                                    }`} />

                                {/* Middle Line - shorter, fades */}
                                <div className={`h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'w-0 opacity-0' : 'w-3'
                                    }`} />

                                {/* Bottom Line - full width, rotates */}
                                <div className={`h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'w-4 -rotate-45 -translate-y-[8px]' : 'w-5'
                                    }`} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className={`fixed inset-0 top-14 z-40 md:hidden overflow-y-auto ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'
                    }`}>
                    <div className="max-w-[1440px] w-full mx-auto px-5 py-4">
                        {/* Configuration Header */}
                        <div className="mb-2">
                            <h3 className={`text-xs font-bold tracking-wider uppercase px-4 mb-2 ${isDark ? 'text-[rgb(113,113,122)]' : 'text-gray-500'
                                }`}>
                                Navigation
                            </h3>
                        </div>

                        {/* Menu Items */}
                        <div className="space-y-0.5 mb-4">
                            {[
                                { label: 'Home', view: 'landing' },
                                { label: 'Courses', view: 'courses' },
                                { label: 'Docs', view: 'landing' },
                            ].map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        onNavigate?.(item.view);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors text-sm font-medium ${isDark
                                        ? 'text-[rgb(223,223,214)] hover:bg-[rgb(32,33,39)]'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className={`h-px mb-4 ${isDark ? 'bg-white/5' : 'bg-black/5'}`} />

                        {/* Theme Toggle - Centered & Narrower */}
                        <div className={`flex items-center justify-between px-4 py-2 rounded-lg w-fit mx-auto ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-100'
                            }`}>
                            <span className={`text-sm font-medium ${isDark ? 'text-[rgb(223,223,214)]' : 'text-gray-700'
                                }`}>
                                Appearance
                            </span>
                            <button
                                onClick={toggleTheme}
                                className={`relative w-10 h-5.5 rounded-full transition-all duration-500 flex items-center p-0.5 ml-3 ${isDark ? 'bg-[#2f2f32]' : 'bg-gray-300'
                                    }`}
                            >
                                <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500 ${isDark ? 'translate-x-5 bg-[#1b1b1f]' : 'translate-x-0 bg-white shadow-sm'
                                    }`}>
                                    {isDark ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#ebebf5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#3c3c43" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                    )}
                                </div>
                            </button>
                        </div>

                        {/* Social Icons - Centered */}
                        <div className="flex items-center justify-center gap-0 mt-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2 transition-all duration-500 ${isDark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-black'}`}
                                title="GitHub"
                            >
                                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
