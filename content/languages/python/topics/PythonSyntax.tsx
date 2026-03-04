import React from 'react';

interface PythonTopicProps {
    isDark: boolean;
}

const PythonSyntax: React.FC<PythonTopicProps> = ({ isDark }) => {
    return (
        <div className={`space-y-8 ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
            {/* Syntax Basics Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Python Syntax
                </h2>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        What is Syntax?
                    </h3>
                    <p className={`leading-relaxed ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Syntax refers to the set of rules that define how Python code should be written. It's the grammar of the language. Python syntax is designed to be simple and readable, which is one of the reasons Python is so popular among beginners.
                    </p>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Indentation
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Python uses indentation (spaces or tabs) to define code blocks. This is unique to Python and makes the code structure very clear.
                    </p>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`if 5 > 2:
    print("Five is greater than two")  # This line is indented
    print("It must be true")             # This line is also indented`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Comments
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Comments are used to explain code and are ignored by Python. Single-line comments start with #. Multi-line comments use triple quotes.
                    </p>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`# This is a single-line comment
x = 5  # This is an inline comment

"""
This is a multi-line comment
It can span multiple lines
"""
print(x)`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Case Sensitivity
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Python is case-sensitive. This means <span className="font-mono">myVar</span> and <span className="font-mono">myvar</span> are different variables.
                    </p>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`myVar = 10
myvar = 20
print(myVar)   # Output: 10
print(myvar)   # Output: 20`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Variable Names (Identifiers)
                    </h3>
                    <p className={`leading-relaxed mb-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        Rules for naming variables:
                    </p>
                    <ul className={`space-y-2 ml-4 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">✓</span>
                            <span>Must start with a letter (a-z, A-Z) or underscore (_)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">✓</span>
                            <span>Can contain letters, numbers (0-9), and underscores</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">✗</span>
                            <span>Cannot start with a number</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">✗</span>
                            <span>Cannot contain spaces or special characters</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-[#6771cd] font-bold">✗</span>
                            <span>Cannot be a Python keyword (like if, for, while, etc.)</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Usage Examples Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Syntax Examples
                </h2>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 1: Valid Variable Names
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`# Valid variable names
name = "Alice"
age = 25
_private = 100
name_with_underscore = "Valid"
CONSTANT = 3.14`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 2: Invalid Variable Names
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`# Invalid variable names (will cause errors)
2name = "Alice"        # Cannot start with number
name-with-dash = 25    # Cannot contain dash
for = 100              # "for" is a keyword
my var = "Test"        # Cannot contain space`}</code>
                        </pre>
                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-[#6771cd]' : 'text-[#6771cd]'}`}>
                        Example 3: Code Block with Proper Indentation
                    </h3>
                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                            <code>{`x = 10

if x > 5:
    print("x is greater than 5")
    if x > 8:
        print("x is also greater than 8")
    print("Still inside first if block")

print("Outside if block")`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonSyntax;
