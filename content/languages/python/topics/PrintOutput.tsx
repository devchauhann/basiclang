import React from 'react';

interface PythonTopicProps {
    isDark: boolean;
}

const PrintOutput: React.FC<PythonTopicProps> = ({ isDark }) => {
    return (
        <div className={`space-y-8 ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
            {/* Print Statement Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Python Print and Output
                </h2>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        The print() Function
                    </h3>
                    <p className={`leading-relaxed ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        The <span className="font-mono bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded text-sm">print()</span> function is used to display output on the screen. It's one of the most commonly used functions in Python.
                    </p>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Basic Syntax
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`print(object1, object2, ..., sep=' ', end='\\n')`}</code>
                        </pre>
                    </div>
                    <ul className={`space-y-2 ml-4 mt-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">•</span>
                            <span><span className="font-semibold">object1, object2, ...</span> - Values to print (can be multiple)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">•</span>
                            <span><span className="font-semibold">sep</span> - Separator between objects (default is space)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">•</span>
                            <span><span className="font-semibold">end</span> - String appended after the last value (default is newline)</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        String Formatting
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        There are several ways to format strings in Python:
                    </p>
                    <div className="space-y-2">
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                1. f-strings (Recommended)
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Most modern and readable way to format strings
                            </p>
                        </div>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                2. .format() method
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Compatible with older Python versions
                            </p>
                        </div>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                3. % operator
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Older style formatting (less commonly used)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Usage Examples Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Print Examples
                </h2>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 1: Basic print() Usage
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`# Print a simple string
print("Hello, World!")

# Print multiple values
print("Hello", "World", "Python")

# Print variables
name = "Alice"
age = 25
print(name, age)

# Output:
# Hello, World!
# Hello World Python
# Alice 25`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 2: Using sep and end Parameters
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`# Custom separator
print("Apple", "Banana", "Orange", sep=", ")

# Custom end character
print("Hello", end="!")
print("World")

# Output:
# Apple, Banana, Orange
# Hello!World`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 3: f-strings Formatting
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`name = "Alice"
age = 25

# Simple f-string
print(f"Name: {name}")

# Multiple variables
print(f"{name} is {age} years old")

# Expressions in f-string
print(f"Age next year: {age + 1}")

# Output:
# Name: Alice
# Alice is 25 years old
# Age next year: 26`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 4: .format() Method
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`name = "Alice"
age = 25

# Using positional arguments
print("Name: {}, Age: {}".format(name, age))

# Using keyword arguments
print("{name} is {age} years old".format(name=name, age=age))

# Output:
# Name: Alice, Age: 25
# Alice is 25 years old`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 5: Escape Sequences
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`# Newline
print("Line 1\\nLine 2")

# Tab
print("Name:\\tAlice")

# Backslash
print("Path: C:\\\\Users\\\\Name")

# Quote
print("He said \\"Hello\\"")

# Output:
# Line 1
# Line 2
# Name:	Alice
# Path: C:\\Users\\Name
# He said "Hello"`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintOutput;
