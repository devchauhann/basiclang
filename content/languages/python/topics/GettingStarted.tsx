import React from 'react';

interface PythonTopicProps {
    isDark: boolean;
}

const GettingStarted: React.FC<PythonTopicProps> = ({ isDark }) => {
    return (
        <div className={`space-y-8 ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
            {/* Installation Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Getting Started with Python
                </h2>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Step 1: Download and Install Python
                    </h3>
                    <p className={`leading-relaxed mb-4 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Visit the official Python website at <span className="font-semibold">python.org</span> and download the latest version of Python (3.11 or later recommended).
                    </p>
                    <ul className={`space-y-2 ml-4 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">→</span>
                            <span><span className="font-semibold">Windows:</span> Download the .exe installer and run it</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">→</span>
                            <span><span className="font-semibold">macOS:</span> Download the .pkg installer or use Homebrew</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">→</span>
                            <span><span className="font-semibold">Linux:</span> Use your package manager (apt, yum, etc.)</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Step 2: Verify Installation
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Open your terminal/command prompt and run:
                    </p>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`python --version`}</code>
                        </pre>
                    </div>
                    <p className={`leading-relaxed mt-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        This should display the installed Python version.
                    </p>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Step 3: Choose a Text Editor or IDE
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        You'll need a tool to write and run Python code. Here are popular options:
                    </p>
                    <div className="space-y-2">
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                Beginner-Friendly
                            </h4>
                            <ul className={`text-sm space-y-1 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                <li>• <span className="font-semibold">IDLE</span> - Built-in Python editor (comes with Python)</li>
                                <li>• <span className="font-semibold">Thonny</span> - Designed for beginners with visual debugging</li>
                            </ul>
                        </div>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                Professional IDEs
                            </h4>
                            <ul className={`text-sm space-y-1 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                <li>• <span className="font-semibold">VS Code</span> - Lightweight, powerful with Python extension</li>
                                <li>• <span className="font-semibold">PyCharm</span> - Dedicated Python IDE with many features</li>
                                <li>• <span className="font-semibold">Jupyter Notebook</span> - Interactive environment for data science</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* First Program Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Your First Python Program
                </h2>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        The Classic "Hello, World!" Program
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Create a new file called <span className="font-mono bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded text-sm">hello.py</span> and add:
                    </p>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`print("Hello, World!")`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Run Your Program
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Open your terminal and navigate to the file location, then run:
                    </p>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`python hello.py`}</code>
                        </pre>
                    </div>
                    <p className={`leading-relaxed mt-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Expected output:
                    </p>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 mt-2 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`Hello, World!`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Interactive Python Shell
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        You can also use Python interactively by typing <span className="font-mono bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded text-sm">python</span> in your terminal to enter the Python shell.
                    </p>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`$ python
Python 3.11.0 (main, Oct 24 2022)
>>> print("Hello from Python!")
Hello from Python!
>>> exit()`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GettingStarted;
