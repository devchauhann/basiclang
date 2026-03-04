import React, { useState } from 'react';

interface MCQQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

interface PythonTopicProps {
    isDark: boolean;
}

const VariablesAndDataTypes: React.FC<PythonTopicProps> = ({ isDark }) => {
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
    const [showAnswers, setShowAnswers] = useState(false);

    const mcqQuestions: MCQQuestion[] = [
        {
            id: 'q1',
            question: 'Which of the following is a valid variable name in Python?',
            options: ['2var', '_var', 'var-name', 'var name'],
            correctAnswer: 1,
            explanation: 'Valid variable names can start with letters or underscore, and can contain alphanumeric characters and underscores. "_var" is valid, while "2var" starts with a number, "var-name" contains a hyphen, and "var name" contains a space.'
        },
        {
            id: 'q2',
            question: 'What is the type of the variable in: x = 3.14?',
            options: ['int', 'float', 'str', 'bool'],
            correctAnswer: 1,
            explanation: 'The value 3.14 is a floating-point number, so the type of x is float.'
        },
        {
            id: 'q3',
            question: 'How do you convert a string to an integer in Python?',
            options: ['str(5)', 'int("5")', 'float("5")', 'convert("5")'],
            correctAnswer: 1,
            explanation: 'The int() function converts a string to an integer. int("5") converts the string "5" to the integer 5.'
        },
        {
            id: 'q4',
            question: 'What will be the output of: print(type(True))?',
            options: ['<class "str">', '<class "int">', '<class "bool">', '<class "float">'],
            correctAnswer: 2,
            explanation: 'True is a boolean value, so type(True) returns <class "bool">.'
        }
    ];

    const handleAnswerSelect = (questionId: string, optionIndex: number) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: optionIndex
        });
    };

    return (
        <div className={`space-y-8 ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
            {/* Explanation Section */}
            <div className={`rounded-2xl p-8 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Variables and Data Types
                </h2>

                <div className="space-y-6">
                    <div>
                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            What are Variables?
                        </h3>
                        <p className={`leading-relaxed ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            A variable is a named location in memory that stores a value. In Python, variables are created simply by assigning a value to a name. Python automatically determines the data type based on the value assigned.
                        </p>
                    </div>

                    <div>
                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Data Types in Python
                        </h3>
                        <p className={`leading-relaxed mb-4 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            Python has several built-in data types:
                        </p>
                        <ul className={`space-y-3 ${isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}`}>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">str:</span>
                                <span>Text data, enclosed in single or double quotes. Example: "Hello" or 'World'</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">int:</span>
                                <span>Integer numbers without decimal points. Example: 42, -10, 0</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">float:</span>
                                <span>Decimal numbers. Example: 3.14, -2.5, 0.0</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">bool:</span>
                                <span>Boolean values: True or False</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">list:</span>
                                <span>Ordered collection of items. Example: [1, 2, 3] or ["a", "b", "c"]</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">dict:</span>
                                <span>Key-value pairs. Example: {'{name: "Alice", age: 25}'}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Usage Examples Section */}
            <div className={`rounded-2xl p-8 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Usage Examples
                </h2>

                <div className="space-y-6">
                    {/* Example 1 */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 1: Creating Variables
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Creating variables of different types
name = "Alice"        # String variable
age = 25              # Integer variable
height = 5.6          # Float variable
is_student = True     # Boolean variable

# Printing the variables
print(name)           # Output: Alice
print(age)            # Output: 25
print(height)         # Output: 5.6
print(is_student)     # Output: True`}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Example 2 */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 2: Checking Data Types
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Using type() function to check data types
print(type(25))           # Output: <class 'int'>
print(type(3.14))         # Output: <class 'float'>
print(type("Hello"))      # Output: <class 'str'>
print(type(True))         # Output: <class 'bool'>
print(type([1, 2, 3]))    # Output: <class 'list'>`}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Example 3 */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 3: Type Conversion
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Converting between data types
num_str = "42"
num_int = int(num_str)        # Convert string to int
print(num_int)                # Output: 42

float_val = float("3.14")     # Convert string to float
print(float_val)              # Output: 3.14

str_val = str(100)            # Convert int to string
print(str_val)                # Output: "100"`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* MCQs Section */}
            <div className={`rounded-2xl p-8 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                <h2 className={`text-3xl font-black mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Test Your Knowledge
                </h2>

                <div className="space-y-8">
                    {mcqQuestions.map((q, idx) => (
                        <div key={q.id} className={`p-6 rounded-lg ${isDark ? 'bg-[rgb(40,41,48)]' : 'bg-white'}`}>
                            <h3 className={`font-bold mb-4 text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {idx + 1}. {q.question}
                            </h3>

                            <div className="space-y-3 mb-4">
                                {q.options.map((option, optIdx) => (
                                    <label key={optIdx} className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name={q.id}
                                            checked={selectedAnswers[q.id] === optIdx}
                                            onChange={() => handleAnswerSelect(q.id, optIdx)}
                                            className="w-4 h-4"
                                        />
                                        <span className={isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}>
                                            {option}
                                        </span>
                                    </label>
                                ))}
                            </div>

                            {showAnswers && selectedAnswers[q.id] !== undefined && (
                                <div className={`p-4 rounded-lg ${selectedAnswers[q.id] === q.correctAnswer
                                    ? isDark ? 'bg-green-900/20 border border-green-500' : 'bg-green-50 border border-green-200'
                                    : isDark ? 'bg-red-900/20 border border-red-500' : 'bg-red-50 border border-red-200'
                                    }`}>
                                    <p className={`font-bold mb-2 ${selectedAnswers[q.id] === q.correctAnswer
                                        ? 'text-green-400'
                                        : 'text-red-400'
                                        }`}>
                                        {selectedAnswers[q.id] === q.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
                                    </p>
                                    <p className={isDark ? 'text-[rgb(161,161,170)]' : 'text-gray-600'}>
                                        {q.explanation}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setShowAnswers(!showAnswers)}
                    className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-transform"
                >
                    {showAnswers ? 'Hide Answers' : 'Check Answers'}
                </button>
            </div>
        </div>
    );
};

export default VariablesAndDataTypes;
