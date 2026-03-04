import React from 'react';

interface PythonTopicProps {
    isDark: boolean;
}

const WhatIsPython: React.FC<PythonTopicProps> = ({ isDark }) => {
    return (
        <div className={`space-y-8 ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
            {/* Introduction Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    What is Python?
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                            Python is a High-Level Programming Language
                        </h3>
                        <p className={`leading-relaxed ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. It is designed to be readable and simple, making it an excellent choice for beginners and experienced developers alike. Python emphasizes code readability with its clean and intuitive syntax.
                        </p>
                    </div>

                    <div>
                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                            Why Learn Python?
                        </h3>
                        <ul className={`space-y-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-[#6771cd] min-w-fit">Easy to Learn:</span>
                                <span>Python has a simple, intuitive syntax that resembles natural English, making it ideal for beginners.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-[#6771cd] min-w-fit">Versatile:</span>
                                <span>Used in web development, data science, artificial intelligence, automation, and more.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-[#6771cd] min-w-fit">Large Community:</span>
                                <span>Python has a massive community with extensive libraries and frameworks available.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-[#6771cd] min-w-fit">High Demand:</span>
                                <span>Python is one of the most in-demand programming languages in the job market.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-[#6771cd] min-w-fit">Open Source:</span>
                                <span>Python is free and open-source with continuous improvements and updates.</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                            Python Applications
                        </h3>
                        <ul className={`space-y-2 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            <li className="flex items-start gap-2">
                                <span className="text-[#6771cd] font-bold">•</span>
                                <span>Web Development (Django, Flask)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#6771cd] font-bold">•</span>
                                <span>Data Science and Machine Learning (TensorFlow, scikit-learn)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#6771cd] font-bold">•</span>
                                <span>Artificial Intelligence</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#6771cd] font-bold">•</span>
                                <span>Automation and Scripting</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#6771cd] font-bold">•</span>
                                <span>Game Development</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#6771cd] font-bold">•</span>
                                <span>Desktop Applications</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                            Python Versions
                        </h3>
                        <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            Python 2 was officially discontinued in January 2020. Python 3 is the current and actively developed version. All new projects should use Python 3.
                        </p>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <p className={`text-sm ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <span className="font-bold">Current Version:</span> Python 3.x (3.11+ recommended for new projects)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Key Features of Python
                </h2>

                <div className="space-y-4">
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <h4 className={`font-bold mb-2 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                            1. Simple and Readable Syntax
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            Python code is written in a way that closely resembles natural English, making it easy to read and understand.
                        </p>
                    </div>

                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <h4 className={`font-bold mb-2 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                            2. Dynamically Typed
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            You don't need to declare variable types explicitly. Python automatically infers the type at runtime.
                        </p>
                    </div>

                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <h4 className={`font-bold mb-2 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                            3. Interpreted Language
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            Python code is executed line by line, making debugging easier and development faster.
                        </p>
                    </div>

                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <h4 className={`font-bold mb-2 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                            4. Rich Standard Library
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            Python comes with a comprehensive standard library that provides modules for various functionalities.
                        </p>
                    </div>

                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <h4 className={`font-bold mb-2 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                            5. Object-Oriented
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            Python supports object-oriented programming, allowing you to organize code into reusable classes and objects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIsPython;
