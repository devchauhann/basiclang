import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { Theme } from '../../types';
import { Search, BookOpen, Clock, BarChart3, ChevronRight } from 'lucide-react';
import { SiPython } from 'react-icons/si';

interface CoursesPageProps {
    onSelectCourse: (courseId: string) => void;
}

interface Course {
    id: string;
    name: string;
    icon: any;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced' | 'pro';
    lessons: number;
    duration: string;
    color: string;
    contentFolder: string;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ onSelectCourse }) => {
    const { theme } = useTheme();
    const isDark = theme === Theme.DARK;
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close dropdown on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsDropdownOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const courses: Course[] = [
        {
            id: 'python-basics',
            name: 'Python Basics',
            icon: SiPython,
            description: 'Learn Python fundamentals including data types, loops, functions, and file handling.',
            level: 'beginner',
            lessons: 26,
            duration: '7 weeks',
            color: 'from-blue-400 to-blue-600',
            contentFolder: '/content/languages/python/basics'
        },
        {
            id: 'python-pro',
            name: 'Python Professional',
            icon: SiPython,
            description: 'Explore decorators, generators, OOP, testing, and web frameworks.',
            level: 'pro',
            lessons: 32,
            duration: '10 weeks',
            color: 'from-blue-600 to-indigo-700',
            contentFolder: '/content/languages/python/pro'
        }
    ];

    const levelColors: Record<string, string> = {
        beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
        advanced: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
        pro: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
    };

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel = !selectedLevel || course.level === selectedLevel;
        return matchesSearch && matchesLevel;
    });

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
            {/* Hero Section with Search and Filters */}
            <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-8">
                        {/* Hero Title */}
                        <div className="space-y-3">
                            <h1 className="text-4xl md:text-5xl font-black tracking-[-0.02em] leading-tight bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-pink-400 to-violet-600">
                                Explore Courses
                            </h1>
                            <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Choose your learning path and master programming from basics to pro level.
                            </p>
                        </div>

                        {/* Search and Filter - Compact Single Line */}
                        <div className="flex items-center gap-3">
                            {/* Search Bar */}
                            <div className="relative flex-1">
                                <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-400'}`} />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg transition-all text-sm ${isDark
                                        ? 'bg-[rgb(32,33,39)] text-white placeholder-[rgb(161,161,170)]  focus:border-pink-500'
                                        : 'bg-gray-100 text-gray-900 placeholder-gray-400 focus:border-pink-500'
                                        } focus:outline-none`}
                                />
                            </div>

                            {/* Category Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className={`px-4 py-2.5 rounded-lg font-semibold text-sm capitalize transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${selectedLevel
                                        ? 'bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-lg'
                                        : isDark
                                            ? 'bg-[rgb(32,33,39)] text-[rgb(161,161,170)] hover:text-white hover:bg-white/10'
                                            : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                                        }`}>
                                    {selectedLevel ? selectedLevel : 'Category'}
                                    <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className={`absolute top-full right-0 mt-2 w-40 rounded-lg shadow-lg z-50 ${isDark ? 'bg-[rgb(32,33,39)] border border-white/10' : 'bg-white border border-gray-200'}`}>
                                        <button
                                            onClick={() => {
                                                setSelectedLevel(null);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full px-4 py-2.5 text-left text-sm font-semibold capitalize transition-all hover:bg-pink-500/20 ${!selectedLevel ? 'text-pink-500' : isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}
                                        >
                                            All Levels
                                        </button>
                                        {['beginner', 'intermediate', 'advanced', 'pro'].map((level) => (
                                            <button
                                                key={level}
                                                onClick={() => {
                                                    setSelectedLevel(level);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full px-4 py-2.5 text-left text-sm font-semibold capitalize transition-all hover:bg-pink-500/20 ${selectedLevel === level ? 'text-pink-500' : isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}
                                            >
                                                {level}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <div className="max-w-6xl mx-auto px-6 md:px-8 pb-12 md:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
                            onClick={() => onSelectCourse(course.id)}
                            className={`group rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-105 duration-300 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'
                                }`}
                        >
                            {/* Header with gradient */}
                            <div className={`h-24 bg-gradient-to-br ${course.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                                {React.createElement(course.icon, { size: 56, color: '#ffffff' })}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className={`text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {course.name}
                                </h3>

                                <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                    {course.description}
                                </p>

                                {/* Meta Info */}
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <div className={`flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full ${levelColors[course.level]}`}>
                                        <BarChart3 size={14} />
                                        {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                                    </div>
                                    <div className={`flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-900'}`}>
                                        <BookOpen size={14} />
                                        {course.lessons} lessons
                                    </div>
                                    <div className={`flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-900'}`}>
                                        <Clock size={14} />
                                        {course.duration}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button className="w-full py-3 px-4 bg-gradient-to-br from-pink-500 via-pink-500 to-violet-600 text-white font-black text-sm uppercase rounded-xl transition-all flex items-center justify-center gap-2 group active:scale-95">
                                    Start Learning
                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-16">
                        <BookOpen className={`w-16 h-16 mx-auto mb-4 opacity-50 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-400'}`} />
                        <p className={`text-lg font-semibold ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            No courses found. Try adjusting your search or filters.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoursesPage;