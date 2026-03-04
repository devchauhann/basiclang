import React, { useState } from 'react';
import { useTheme } from '../../../src/ThemeContext';
import { Theme } from '../../../types';
import { pythonLessons } from '../../../src/data/pythonLessons';
import { SiPython } from 'react-icons/si';
import { BookOpen, BarChart3, ArrowRight } from 'lucide-react';

interface PythonTopicsPageProps {
    courseId: string;
    onSelectTopic: (lessonSlug: string) => void;
    onBack: () => void;
}

const PythonTopicsPage: React.FC<PythonTopicsPageProps> = ({ courseId, onSelectTopic, onBack }) => {
    const { theme } = useTheme();
    const isDark = theme === Theme.DARK;
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    // Get course info
    const courseInfo = courseId === 'python-basics'
        ? { name: 'Python Basics', description: 'Master Python fundamentals', color: 'from-blue-400 to-blue-600' }
        : { name: 'Python Professional', description: 'Advanced Python concepts', color: 'from-blue-600 to-indigo-700' };

    const levelColors: Record<string, string> = {
        beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
        advanced: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
        pro: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
    };

    // Filter lessons based on course
    let filteredLessons = pythonLessons;
    if (courseId === 'python-basics') {
        filteredLessons = pythonLessons.filter(l => ['beginner', 'intermediate'].includes(l.level));
    } else if (courseId === 'python-pro') {
        filteredLessons = pythonLessons.filter(l => ['intermediate', 'advanced', 'pro'].includes(l.level));
    }

    // Further filter by selected level
    if (selectedLevel) {
        filteredLessons = filteredLessons.filter(l => l.level === selectedLevel);
    }

    const lessonCounts = {
        beginner: pythonLessons.filter(l => l.level === 'beginner').length,
        intermediate: pythonLessons.filter(l => l.level === 'intermediate').length,
        advanced: pythonLessons.filter(l => l.level === 'advanced').length,
        pro: pythonLessons.filter(l => l.level === 'pro').length
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
            {/* Hero Section */}
            <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-start justify-between gap-8 mb-8">
                        <button
                            onClick={onBack}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 flex-shrink-0 text-sm md:text-base ${isDark
                                ? 'bg-[rgb(32,33,39)] text-white hover:bg-white/10'
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                }`}
                        >
                            ← Back
                        </button>
                        <div className="space-y-4 flex-1">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
                                    <SiPython size={28} color="#ffffff" />
                                </div>
                                <span className={`text-xs md:text-sm font-black uppercase tracking-wider ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                    Python Learning Path
                                </span>
                            </div>
                            <h1 className={`text-2xl md:text-4xl font-black tracking-[-0.02em] leading-tight bg-clip-text text-transparent bg-gradient-to-br ${courseInfo.color}`}>
                                {courseInfo.name}
                            </h1>
                            <p className={`text-xs md:text-base leading-relaxed max-w-2xl ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                {courseInfo.description} • {filteredLessons.length} lessons to master
                            </p>
                        </div>
                    </div>

                    {/* Level Filter */}
                    <div className="flex gap-3 flex-wrap">
                        <span className={`text-xs md:text-sm font-semibold self-center ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            Filter by level:
                        </span>
                        {['beginner', 'intermediate', 'advanced', 'pro'].map((level) => {
                            const count = pythonLessons.filter(l => l.level === level).length;
                            if (count === 0) return null;

                            return (
                                <button
                                    key={level}
                                    onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                                    className={`px-4 py-2 rounded-lg font-semibold text-sm capitalize transition-all duration-300 ${selectedLevel === level
                                        ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg'
                                        : isDark
                                            ? 'bg-[rgb(32,33,39)] text-[rgb(161,161,170)] hover:text-white hover:bg-white/10'
                                            : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    {level}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Topics Grid */}
            <div className="max-w-6xl mx-auto px-6 md:px-8 pb-12 md:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLessons.map((lesson, index) => (
                        <div
                            key={lesson.id}
                            className={`rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-105 duration-300 text-left group ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'
                                }`}
                        >
                            {/* Header with gradient */}
                            <div className={`h-20 bg-gradient-to-br ${lesson.level === 'beginner' ? 'from-green-400 to-green-600' : lesson.level === 'intermediate' ? 'from-blue-400 to-blue-600' : lesson.level === 'advanced' ? 'from-orange-400 to-orange-600' : 'from-purple-400 to-purple-600'} flex items-center justify-center`}>
                                <span className={`text-3xl font-black text-white`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className={`text-lg md:text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {lesson.title}
                                </h3>

                                <p className={`text-xs md:text-sm mb-4 line-clamp-2 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                    {lesson.description}
                                </p>

                                {/* Meta Info */}
                                <div className="flex flex-wrap gap-3 mb-4">
                                    <div className={`flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full ${levelColors[lesson.level]}`}>
                                        <BarChart3 size={14} />
                                        {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
                                    </div>
                                    <div className={`flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-gray-200 text-gray-900'}`}>
                                        <BookOpen size={14} />
                                        {lesson.codeExamples.length} examples
                                    </div>
                                </div>

                                {/* Action Button */}
                                <button
                                    onClick={() => onSelectTopic(lesson.slug)}
                                    className={`w-full py-3 px-4 bg-gradient-to-br from-blue-400 to-blue-600 text-white font-black text-sm uppercase rounded-xl transition-all flex items-center justify-center gap-2 group-hover:scale-105 active:scale-95`}>
                                    Learn Topic
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredLessons.length === 0 && (
                    <div className="text-center py-16">
                        <BookOpen className={`w-16 h-16 mx-auto mb-4 opacity-50 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-400'}`} />
                        <p className={`text-sm md:text-base font-semibold ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            No topics found for this level.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PythonTopicsPage;
