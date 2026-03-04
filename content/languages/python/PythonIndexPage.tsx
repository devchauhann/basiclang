import React, { useState } from 'react';
import { useTheme } from '../../../src/ThemeContext';
import { Theme } from '../../../types';
import { pythonLessons } from '../../../src/data/pythonLessons';
import { SiPython } from 'react-icons/si';
import { BookOpen, BarChart3 } from 'lucide-react';

interface PythonIndexPageProps {
    onSelectLesson: (slug: string) => void;
    onBack: () => void;
}

const PythonIndexPage: React.FC<PythonIndexPageProps> = ({ onSelectLesson, onBack }) => {
    const { theme } = useTheme();
    const isDark = theme === Theme.DARK;
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    const levelColors: Record<string, string> = {
        beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
        intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
        advanced: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
        pro: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
    };

    const filteredLessons = selectedLevel
        ? pythonLessons.filter(lesson => lesson.level === selectedLevel)
        : pythonLessons;

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
                        <div className="space-y-4 flex-1">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
                                    <SiPython size={28} color="#ffffff" />
                                </div>
                                <span className={`text-sm font-black uppercase tracking-wider ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                    Python Programming
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-[-0.02em] leading-tight bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-600">
                                Python Lessons
                            </h1>
                            <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Master Python programming from basics to professional level with hands-on lessons and exercises.
                            </p>
                        </div>

                        <button
                            onClick={onBack}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex-shrink-0 ${isDark
                                ? 'bg-[rgb(32,33,39)] text-white hover:bg-white/10'
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                }`}
                        >
                            ← Back
                        </button>
                    </div>

                    {/* Level Filter */}
                    <div className="flex gap-3 flex-wrap">
                        <span className={`text-sm font-semibold self-center ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            Filter by level:
                        </span>
                        {['beginner', 'intermediate', 'advanced', 'pro'].map((level) => (
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
                                {level} ({lessonCounts[level as keyof typeof lessonCounts]})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lessons Grid */}
            <div className="max-w-6xl mx-auto px-6 md:px-8 pb-12 md:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredLessons.map((lesson, index) => (
                        <button
                            key={lesson.id}
                            onClick={() => onSelectLesson(lesson.slug)}
                            className={`rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-105 duration-300 text-left ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'
                                }`}
                        >
                            {/* Header with gradient */}
                            <div className="h-20 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                <span className={`text-3xl font-black ${isDark ? 'text-white' : 'text-white'}`}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className={`text-xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {lesson.title}
                                </h3>

                                <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
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
                                <button className="w-full py-3 px-4 bg-gradient-to-br from-blue-400 to-blue-600 text-white font-black text-sm uppercase rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95">
                                    Start Learning
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </button>
                    ))}
                </div>

                {filteredLessons.length === 0 && (
                    <div className="text-center py-16">
                        <BookOpen className={`w-16 h-16 mx-auto mb-4 opacity-50 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-400'}`} />
                        <p className={`text-lg font-semibold ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            No lessons found for this level.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PythonIndexPage;
