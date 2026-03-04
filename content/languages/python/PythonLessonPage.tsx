import React, { useState, lazy, Suspense } from 'react';
import { useTheme } from '../../../src/ThemeContext';
import { Theme } from '../../../types';
import { getPythonLesson, pythonLessons } from '../../../src/data/pythonLessons';
import { ArrowLeft } from 'lucide-react';
import { SiPython } from 'react-icons/si';
import CustomLoader from '../../../src/components/CustomLoader';

interface PythonLessonPageProps {
    slug: string;
    onBack: () => void;
    onNavigateToLesson?: (slug: string) => void;
}

// Dynamically import topic components
const VariablesAndDataTypes = lazy(() => import('./topics/VariablesAndDataTypes'));
const Operators = lazy(() => import('./topics/Operators'));
const ControlFlow = lazy(() => import('./topics/ControlFlow'));
const ListsCollections = lazy(() => import('./topics/ListsCollections'));
const Functions = lazy(() => import('./topics/Functions'));
const OOP = lazy(() => import('./topics/OOP'));
const Decorators = lazy(() => import('./topics/Decorators'));
const Generators = lazy(() => import('./topics/Generators'));

const topicComponents: Record<string, React.LazyExoticComponent<React.FC<any>>> = {
    'variables-and-data-types': VariablesAndDataTypes,
    'operators': Operators,
    'control-flow': ControlFlow,
    'lists-and-collections': ListsCollections,
    'functions': Functions,
    'object-oriented-programming': OOP,
    'decorators': Decorators,
    'generators-and-iterators': Generators,
};

const PythonLessonPage: React.FC<PythonLessonPageProps> = ({ slug, onBack, onNavigateToLesson }) => {
    const { theme } = useTheme();
    const isDark = theme === Theme.DARK;
    const lesson = getPythonLesson(slug);

    if (!lesson) {
        return (
            <div className={`min-h-screen ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'} flex items-center justify-center`}>
                <div className="text-center">
                    <p className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Lesson not found
                    </p>
                    <button
                        onClick={onBack}
                        className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    // Get the topic component
    const TopicComponent = topicComponents[slug];

    const lessonIndex = pythonLessons.findIndex(l => l.slug === slug);
    const totalLessons = pythonLessons.length;
    const prevLesson = lessonIndex > 0 ? pythonLessons[lessonIndex - 1] : null;
    const nextLesson = lessonIndex < totalLessons - 1 ? pythonLessons[lessonIndex + 1] : null;

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
            {/* Hero Section */}
            <section className="relative pt-8 md:pt-20 pb-12 md:pb-16 px-6 md:px-8">
                <div className="max-w-4xl mx-auto">


                    {/* Content */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
                                <SiPython size={24} color="#ffffff" />
                            </div>
                            <span className={`text-xs md:text-sm font-black uppercase tracking-wider ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Python Course
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-5xl font-black tracking-[-0.02em] leading-tight bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-600">
                            {lesson.title}
                        </h1>
                        <p className={`text-sm md:text-base ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            Lesson {lessonIndex + 1} of {totalLessons} • {lesson.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 md:px-8 pb-20">
                {/* Load Topic Component */}
                {TopicComponent ? (
                    <Suspense fallback={<CustomLoader isDark={isDark} />}>
                        <TopicComponent isDark={isDark} />
                    </Suspense>
                ) : (
                    <div className={`rounded-2xl p-8 text-center ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <p className={isDark ? 'text-white' : 'text-gray-900'}>Topic content not found</p>
                    </div>
                )}


                {/* Navigation */}
                <div className="flex gap-4 mt-12">
                    {prevLesson ? (
                        <button
                            onClick={() => onNavigateToLesson ? onNavigateToLesson(prevLesson.slug) : onBack()}
                            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${isDark
                                ? 'bg-[rgb(32,33,39)] text-white hover:bg-white/10'
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                }`}
                        >
                            ← Previous
                        </button>
                    ) : (
                        <div className="flex-1" />
                    )}
                    {nextLesson ? (
                        <button
                            onClick={() => onNavigateToLesson ? onNavigateToLesson(nextLesson.slug) : onBack()}
                            className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white hover:scale-105"
                        >
                            Next →
                        </button>
                    ) : (
                        <div className="flex-1" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PythonLessonPage;
