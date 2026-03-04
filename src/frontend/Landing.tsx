import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { Theme } from '../../types';
import { ArrowRight, BookOpen, Code2, Zap, Target, Users, TrendingUp, ChevronDown } from 'lucide-react';
import { SiJavascript, SiPython, SiReact, SiTypescript, SiCss3 } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

interface StudyLandingProps {
    onGetStarted: () => void;
}

const StudyLanding: React.FC<StudyLandingProps> = ({ onGetStarted }) => {
    const { theme } = useTheme();
    const isDark = theme === Theme.DARK;
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const features = [
        {
            icon: BookOpen,
            title: 'Comprehensive Curriculum',
            desc: 'Learn from basics to advanced concepts across all popular programming languages.'
        },
        {
            icon: Code2,
            title: 'Real Code Examples',
            desc: 'Interactive code snippets with live execution. Copy, modify, and learn instantly.'
        },
        {
            icon: Zap,
            title: 'Fast Learning Path',
            desc: 'Structured lessons from fundamentals to professional level concepts.'
        },
        {
            icon: Target,
            title: 'Goal-Oriented',
            desc: 'Clear learning objectives and checkpoints to track your progress.'
        }
    ];

    const languages = [
        { name: 'JavaScript', icon: SiJavascript, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Python', icon: SiPython, color: 'from-blue-400 to-blue-600' },
        { name: 'React', icon: SiReact, color: 'from-cyan-400 to-cyan-600' },
        { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-500 to-indigo-600' },
        { name: 'Java', icon: FaJava, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS', icon: SiCss3, color: 'from-[#6771cd] to-[#5a63c0]' }
    ];

    const faqs = [
        {
            q: 'Is this free?',
            a: 'Yes! BasicLang is completely free. Access all languages and lessons without any hidden costs.'
        },
        {
            q: 'Do I need any prerequisites?',
            a: 'No! We start from the absolute basics. Whether you\'re a complete beginner or looking to refresh your skills, you\'ll find the right starting point.'
        },
        {
            q: 'Can I track my progress?',
            a: 'Yes! Complete lessons, mark concepts as understood, and see your learning progress with detailed insights.'
        },
        {
            q: 'Can I practice with exercises?',
            a: 'Absolutely! Each concept includes practical exercises and challenges to reinforce your learning.'
        }
    ];

    return (
        <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 selection:bg-[#6771cd] selection:text-white ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
            {/* Hero Section */}
            <section className="relative pt-20 md:pt-40 pb-16 md:pb-20 px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-16">
                        {/* Left Content */}
                        <div className="flex-1 space-y-8">
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.02em] leading-tight bg-clip-text text-transparent bg-gradient-to-br from-[#6771cd] via-[#5a63c0] to-[#6771cd]">
                                        Master Programming from Scratch to Pro
                                    </h1>
                                </div>
                                <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                    Learn all popular programming languages with structured lessons, real code examples, and interactive practice. Start from basics and become a professional developer.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={onGetStarted}
                                    className="group px-9 sm:px-8 md:px-12 py-4 sm:py-5 md:py-5 bg-gradient-to-br from-[#7a82d8] via-[#6771cd] to-[#5a63c0] text-white font-black uppercase tracking-widest text-[10px] rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                                >
                                    Get Started
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    className={`px-9 sm:px-8 md:px-12 py-4 sm:py-5 md:py-5 font-black uppercase tracking-widest text-[10px] rounded-[2rem] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.3),inset_4px_4px_8px_rgba(255,255,255,0.3),8px_8px_16px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all ${isDark
                                        ? 'bg-white/10 text-white border border-white/20'
                                        : 'bg-gray-100 text-gray-900 border border-gray-200/40'
                                        }`}
                                >
                                    Explore Courses
                                </button>
                            </div>
                        </div>

                        {/* Right Illustration */}
                        <div className="flex-1 w-full">
                            <img
                                src="/teaching.svg"
                                alt="Learn by Coding"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Languages */}
            <section className="py-16 md:py-20 px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-black mb-16 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Master Popular Languages
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {languages.map((lang, i) => {
                            const IconComponent = lang.icon;
                            return (
                                <div
                                    key={i}
                                    className={`p-8 rounded-2xl text-center transition-all hover:scale-105 cursor-pointer ${isDark
                                        ? 'bg-[rgb(32,33,39)] hover:shadow-[#6771cd]/20'
                                        : 'bg-gray-50 hover:shadow-[#6771cd]/20'
                                        }`}
                                >
                                    <div className="flex justify-center mb-3">
                                        <IconComponent size={48} color="#6771cd" />
                                    </div>
                                    <h3 className={`font-black text-sm uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {lang.name}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 md:py-20 px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-black mb-16 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Why Choose BasicLang?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <div
                                    key={i}
                                    className={`p-8 rounded-2xl transition-all hover:scale-105 ${isDark
                                        ? 'bg-[rgb(32,33,39)] hover:shadow-[#6771cd]/20'
                                        : 'bg-gray-50 hover:shadow-[#6771cd]/20'
                                        }`}
                                >
                                    <Icon className="w-10 h-10 mb-6 text-[#6771cd]" />
                                    <h3 className={`text-lg font-black mb-3 uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {f.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                        {f.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={`py-16 md:py-20 px-6 md:px-8 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-br from-[#6771cd] to-[#5a63c0]">
                                6+
                            </div>
                            <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Programming Languages
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-br from-[#6771cd] to-[#5a63c0]">
                                100+
                            </div>
                            <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Lessons & Topics
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-br from-[#6771cd] to-[#5a63c0]">
                                ∞
                            </div>
                            <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Always Free
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-20 px-6 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-black mb-16 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Frequently Asked Questions
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
                        {/* FAQ Items */}
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className={`rounded-2xl cursor-pointer transition-all ${isDark
                                        ? 'bg-[rgb(32,33,39)]'
                                        : 'bg-gray-50'
                                        }`}
                                >
                                    <div className="p-6 flex items-center justify-between">
                                        <h3 className={`font-black text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {faq.q}
                                        </h3>
                                        <ChevronDown
                                            size={20}
                                            className={`transition-transform ${openFaq === i ? 'rotate-180' : ''} text-[#6771cd]`}
                                        />
                                    </div>
                                    {openFaq === i && (
                                        <div className={`px-6 pb-6 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* FAQ Illustration */}
                        <div className="flex items-center justify-center">
                            <img
                                src="/faq.svg"
                                alt="FAQ"
                                className="w-full h-auto max-w-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudyLanding;
