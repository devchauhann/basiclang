import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { Theme } from '../../types';
import { Copy, Check, ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';
import { SiJavascript, SiPython, SiReact, SiTypescript, SiCss3 } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

interface LessonPageProps {
    courseId: string;
    onBack: () => void;
}

interface Lesson {
    id: string;
    title: string;
    content: string;
    codeExample: string;
    language: string;
    explanation: string;
}

const LessonPage: React.FC<LessonPageProps> = ({ courseId, onBack }) => {
    const { theme } = useTheme();
    const isDark = theme === Theme.DARK;
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [copiedCode, setCopiedCode] = useState(false);

    // Sample lessons - in real app, would be fetched based on courseId
    const lessons: Lesson[] = [
        {
            id: '1',
            title: 'Getting Started',
            content: 'Welcome to the course! In this first lesson, we\'ll set up your environment and understand the basics.',
            codeExample: `// Your first program
console.log('Hello, World!');`,
            language: 'javascript',
            explanation: 'This is your first JavaScript program. The console.log() function prints text to the console.'
        },
        {
            id: '2',
            title: 'Variables and Data Types',
            content: 'Learn about variables and the different data types available in this language.',
            codeExample: `// Declaring variables
const name = 'John';
const age = 25;
const height = 5.9;
const isStudent = true;

console.log(name, age, height, isStudent);`,
            language: 'javascript',
            explanation: 'Variables are containers for storing values. Different data types include strings, numbers, and booleans.'
        },
        {
            id: '3',
            title: 'Functions',
            content: 'Master the art of creating reusable code with functions.',
            codeExample: `// Function definition
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function call
console.log(greet('Alice'));
console.log(greet('Bob'));`,
            language: 'javascript',
            explanation: 'Functions allow you to write code once and reuse it multiple times with different inputs.'
        }
    ];

    const currentLesson = lessons[currentLessonIndex];

    // Course icon mapping
    const courseIconMap: Record<string, any> = {
        'js-basics': SiJavascript,
        'js-advanced': SiJavascript,
        'python-basics': SiPython,
        'python-pro': SiPython,
        'react-basics': SiReact,
        'react-advanced': SiReact,
        'typescript-basics': SiTypescript,
        'css-mastery': SiCss3,
        'java-basics': FaJava,
        'java-advanced': FaJava,
    };

    const courseIcon = courseIconMap[courseId] || SiJavascript;

    const handleCopyCode = () => {
        navigator.clipboard.writeText(currentLesson.codeExample);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
    };

    const handleNext = () => {
        if (currentLessonIndex < lessons.length - 1) {
            setCurrentLessonIndex(currentLessonIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentLessonIndex > 0) {
            setCurrentLessonIndex(currentLessonIndex - 1);
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
            {/* Hero Section */}
            <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 px-6 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-start justify-between gap-8">
                        {/* Left Content */}
                        <div className="space-y-4 flex-1">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600">
                                    {React.createElement(courseIcon, { size: 28, color: '#ffffff' })}
                                </div>
                                <span className={`text-sm font-black uppercase tracking-wider ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                    {courseId.replace('-', ' ')}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-[-0.02em] leading-tight bg-clip-text text-transparent bg-gradient-to-br from-pink-500 via-pink-400 to-violet-600">
                                {currentLesson.title}
                            </h1>
                            <p className={`text-base ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Lesson {currentLessonIndex + 1} of {lessons.length} • Continue your learning journey
                            </p>
                        </div>

                        {/* Right: Back Button */}
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
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-8 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Lesson Content */}
                        <div className={`rounded-2xl p-8 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h2 className={`text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Lesson Content
                            </h2>
                            <p className={`text-lg leading-relaxed ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-700'}`}>
                                {currentLesson.content}
                            </p>
                        </div>

                        {/* Code Example */}
                        <div className={`rounded-2xl p-8 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    Code Example
                                </h2>
                                <button
                                    onClick={handleCopyCode}
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                                >
                                    {copiedCode ? (
                                        <>
                                            <Check size={16} />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={16} />
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className={`rounded-xl p-6 font-mono text-sm overflow-x-auto ${isDark ? 'bg-black/40' : 'bg-gray-900'
                                }`}>
                                <pre className="text-green-400">
                                    {currentLesson.codeExample}
                                </pre>
                            </div>
                        </div>

                        {/* Explanation */}
                        <div className={`rounded-2xl p-8 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h2 className={`text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Explanation
                            </h2>
                            <p className={`text-lg leading-relaxed ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-700'}`}>
                                {currentLesson.explanation}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Course Header */}
                        <div className={`rounded-2xl p-6 flex items-center gap-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600">
                                {React.createElement(courseIcon, { size: 32, color: '#ffffff' })}
                            </div>
                            <div>
                                <h3 className={`text-lg font-black uppercase tracking-wider ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {courseId.replace('-', ' ')}
                                </h3>
                                <p className={`text-xs ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                    Learning Path
                                </p>
                            </div>
                        </div>

                        {/* Progress */}
                        <div className={`rounded-2xl p-6 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h3 className={`text-lg font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Course Progress
                            </h3>
                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 mb-2">
                                <div
                                    className="bg-gradient-to-r from-pink-500 to-violet-600 h-3 rounded-full transition-all"
                                    style={{ width: `${((currentLessonIndex + 1) / lessons.length) * 100}%` }}
                                />
                            </div>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                {Math.round(((currentLessonIndex + 1) / lessons.length) * 100)}% Complete
                            </p>
                        </div>

                        {/* Lessons List */}
                        <div className={`rounded-2xl p-6 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h3 className={`text-lg font-black mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Lessons
                            </h3>
                            <div className="space-y-2">
                                {lessons.map((lesson, index) => (
                                    <button
                                        key={lesson.id}
                                        onClick={() => setCurrentLessonIndex(index)}
                                        className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${index === currentLessonIndex
                                            ? 'bg-gradient-to-r from-pink-500 to-violet-600 text-white'
                                            : isDark
                                                ? 'bg-white/5 text-[rgb(161,161,170)] hover:bg-white/10'
                                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <BookOpen size={16} />
                                            <span className="text-sm">{lesson.title}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-300/20">
                    <button
                        onClick={handlePrev}
                        disabled={currentLessonIndex === 0}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 ${currentLessonIndex === 0
                            ? 'cursor-not-allowed'
                            : 'hover:scale-105 bg-gradient-to-r from-pink-500 to-violet-600 text-white'
                            }`}
                    >
                        <ChevronLeft size={18} />
                        Previous
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentLessonIndex === lessons.length - 1}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 ${currentLessonIndex === lessons.length - 1
                            ? 'cursor-not-allowed'
                            : 'hover:scale-105 bg-gradient-to-r from-pink-500 to-violet-600 text-white'
                            }`}
                    >
                        Next
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LessonPage;
