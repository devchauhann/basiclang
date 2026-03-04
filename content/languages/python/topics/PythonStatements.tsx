import React from 'react';

interface PythonTopicProps {
    isDark: boolean;
}

const PythonStatements: React.FC<PythonTopicProps> = ({ isDark }) => {
    return (
        <div className={`space-y-8 ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
            {/* Statements Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Python Statements
                </h2>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        What is a Statement?
                    </h3>
                    <p className={`leading-relaxed ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        A statement is a single instruction that tells Python to do something. Each line of code is typically one statement. Python statements end naturally at the end of a line, so you don't need a semicolon like in other languages.
                    </p>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Types of Statements
                    </h3>
                    <div className="space-y-3">
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                1. Assignment Statements
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Assign values to variables using the = operator.
                            </p>
                        </div>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                2. Expression Statements
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Evaluate expressions and use their results.
                            </p>
                        </div>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                3. Control Flow Statements
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Control the flow of execution (if, for, while, etc.).
                            </p>
                        </div>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                4. Function Definition Statements
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Define functions using the def keyword.
                            </p>
                        </div>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <h4 className={`font-bold mb-1 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                                5. Class Definition Statements
                            </h4>
                            <p className={`text-sm ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                                Define classes using the class keyword.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Statement Continuation
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        If a statement is very long, you can continue it on the next line using a backslash (\) or parentheses.
                    </p>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`# Using backslash for line continuation
total = 1 + 2 + 3 + \\
        4 + 5 + 6

# Using parentheses for line continuation
total = (1 + 2 + 3 +
         4 + 5 + 6)`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Multiple Statements on One Line
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        You can put multiple statements on one line using a semicolon (;), though this is not recommended for readability.
                    </p>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`x = 5; y = 10; print(x + y)`}</code>
                        </pre>
                    </div>
                </div>
            </div>

            {/* Usage Examples Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Statement Examples
                </h2>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 1: Assignment Statements
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`# Assignment statements
name = "Alice"
age = 25
height = 5.8
is_student = True

# Multiple assignment
x = y = z = 0

# Unpacking assignment
a, b, c = 1, 2, 3`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 2: Expression Statements
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`# Expression statements
10 + 5          # Evaluates to 15
x = 20
x > 10          # Evaluates to True
"Hello" + " World"  # Evaluates to "Hello World"`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 3: Control Flow Statements
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`# if statement
age = 18
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# for statement
for i in range(5):
    print(i)

# while statement
count = 0
while count < 5:
    print(count)
    count += 1`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 4: Function Definition
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`def greet(name):
    print(f"Hello, {name}!")
    
greet("Alice")`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonStatements;
