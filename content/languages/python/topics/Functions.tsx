import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface MCQQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

const mcqQuestions: MCQQuestion[] = [
    {
        id: 'fn-1',
        question: 'What is the correct syntax to define a function in Python?',
        options: ['function myFunc():', 'def myFunc():', 'func myFunc():', 'define myFunc():'],
        correctAnswer: 1,
        explanation: 'The correct syntax is "def" keyword followed by function name and parentheses.'
    },
    {
        id: 'fn-2',
        question: 'What does the "return" statement do in a function?',
        options: ['Prints the value', 'Exits the function and returns a value', 'Stops the program', 'Repeats the function'],
        correctAnswer: 1,
        explanation: 'The return statement ends the function execution and returns a value to the caller.'
    },
    {
        id: 'fn-3',
        question: 'What is the difference between parameters and arguments?',
        options: [
            'They are the same thing',
            'Parameters are defined in function declaration, arguments are values passed when calling',
            'Arguments are defined in function declaration, parameters are values passed when calling',
            'There is no difference'
        ],
        correctAnswer: 1,
        explanation: 'Parameters are variables in the function definition, arguments are actual values passed to the function.'
    },
    {
        id: 'fn-4',
        question: 'What is the scope of a variable defined inside a function?',
        options: ['Global', 'Local to that function', 'Available to all functions', 'No scope'],
        correctAnswer: 1,
        explanation: 'Variables defined inside a function have local scope and exist only within that function.'
    },
    {
        id: 'fn-5',
        question: 'How can a function return multiple values?',
        options: ['Using multiple return statements', 'Using a tuple or list', 'Using the return keyword multiple times', 'It cannot return multiple values'],
        correctAnswer: 1,
        explanation: 'A function can return a tuple, list, or dictionary containing multiple values.'
    }
];

export const Functions: React.FC = () => {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
    const [showResults, setShowResults] = useState(false);
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const copyToClipboard = (code: string, key: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(key);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const handleAnswerSelect = (questionId: string, optionIndex: number) => {
        if (!showResults) {
            setSelectedAnswers(prev => ({
                ...prev,
                [questionId]: optionIndex
            }));
        }
    };

    const handleSubmitAnswers = () => {
        setShowResults(true);
    };

    const handleResetAnswers = () => {
        setSelectedAnswers({});
        setShowResults(false);
    };

    const getCorrectCount = () => {
        return mcqQuestions.filter(q =>
            selectedAnswers[q.id] === q.correctAnswer
        ).length;
    };

    return (
        <div className={`min-h-screen ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
            {/* Explanation Section */}
            <div className={`rounded-2xl p-8 mb-8 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    What are Functions?
                </h2>

                <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>
                        Functions are reusable blocks of code that perform specific tasks. They help you organize code,
                        reduce repetition, and make programs easier to understand and maintain. A function can take parameters
                        (inputs), process them, and return results (outputs).
                    </p>

                    <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                        <h3 className={`font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Key Concepts:
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Definition:</span>
                                <span>Using "def" keyword to create a function</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Parameters:</span>
                                <span>Variables listed in function definition (placeholders)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Arguments:</span>
                                <span>Actual values passed to the function when calling it</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Return:</span>
                                <span>Sends a value back to the caller</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Scope:</span>
                                <span>Variables inside function are local (exist only within function)</span>
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
                    {/* Example 1: Basic Function */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 1: Basic Function Definition
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Simple function without parameters
def greet():
    print("Hello, World!")

greet()                    # Output: Hello, World!

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")      # Output: Hello, Alice!

# Function with return value
def add(a, b):
    return a + b

result = add(5, 3)
print(result)              # Output: 8`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `def greet():\n    print("Hello, World!")\n\ndef add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(result)`,
                                    'ex1'
                                )}
                                className="mt-3 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                            >
                                {copiedCode === 'ex1' ? (
                                    <><Check size={16} /> Copied</>
                                ) : (
                                    <><Copy size={16} /> Copy Code</>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Example 2: Default Parameters */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 2: Default Parameters
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Function with default parameters
def introduce(name, age=25, city="NYC"):
    print(f"{name} is {age} years old and lives in {city}")

introduce("Alice")                          # Uses default age and city
introduce("Bob", 30)                        # Uses default city
introduce("Charlie", 28, "Los Angeles")     # All values provided

# Output:
# Alice is 25 years old and lives in NYC
# Bob is 30 years old and lives in NYC
# Charlie is 28 years old and lives in Los Angeles`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `def introduce(name, age=25, city="NYC"):\n    print(f"{name} is {age} years old and lives in {city}")\n\nintroduce("Alice")\nintroduce("Bob", 30)`,
                                    'ex2'
                                )}
                                className="mt-3 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                            >
                                {copiedCode === 'ex2' ? (
                                    <><Check size={16} /> Copied</>
                                ) : (
                                    <><Copy size={16} /> Copy Code</>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Example 3: Multiple Return Values */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 3: Returning Multiple Values
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Function returning multiple values as tuple
def divide_and_remainder(dividend, divisor):
    quotient = dividend // divisor
    remainder = dividend % divisor
    return quotient, remainder

q, r = divide_and_remainder(10, 3)
print(f"Quotient: {q}, Remainder: {r}")  # Output: Quotient: 3, Remainder: 1

# Function returning multiple values as dictionary
def get_user_info():
    return {"name": "Alice", "age": 25, "email": "alice@example.com"}

user = get_user_info()
print(user["name"])                      # Output: Alice
print(user["age"])                       # Output: 25`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `def divide_and_remainder(dividend, divisor):\n    quotient = dividend // divisor\n    remainder = dividend % divisor\n    return quotient, remainder\n\nq, r = divide_and_remainder(10, 3)`,
                                    'ex3'
                                )}
                                className="mt-3 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                            >
                                {copiedCode === 'ex3' ? (
                                    <><Check size={16} /> Copied</>
                                ) : (
                                    <><Copy size={16} /> Copy Code</>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Example 4: *args and **kwargs */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 4: Variable Number of Arguments
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# *args - variable number of positional arguments (tuple)
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))           # Output: 6
print(sum_all(1, 2, 3, 4, 5))     # Output: 15

# **kwargs - variable number of keyword arguments (dictionary)
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")
# Output:
# name: Alice
# age: 25
# city: NYC`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `def sum_all(*numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total\n\nprint(sum_all(1, 2, 3, 4, 5))`,
                                    'ex4'
                                )}
                                className="mt-3 flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                            >
                                {copiedCode === 'ex4' ? (
                                    <><Check size={16} /> Copied</>
                                ) : (
                                    <><Copy size={16} /> Copy Code</>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MCQ Section */}
            <div className={`rounded-2xl p-8 mt-8 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                <h2 className={`text-3xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Test Your Knowledge
                </h2>
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Answer these questions to check your understanding of functions
                </p>

                <div className="space-y-6">
                    {mcqQuestions.map((question, index) => (
                        <div
                            key={question.id}
                            className={`rounded-lg p-6 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}
                        >
                            <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {index + 1}. {question.question}
                            </h3>

                            <div className="space-y-3 mb-4">
                                {question.options.map((option, optionIndex) => {
                                    const isSelected = selectedAnswers[question.id] === optionIndex;
                                    const isCorrect = optionIndex === question.correctAnswer;
                                    let bgColor = isDark ? 'bg-[rgb(35,35,41)]' : 'bg-gray-100';
                                    let borderColor = 'border-transparent';

                                    if (showResults) {
                                        if (isCorrect) {
                                            bgColor = 'bg-green-500/20';
                                            borderColor = 'border-green-500';
                                        } else if (isSelected && !isCorrect) {
                                            bgColor = 'bg-red-500/20';
                                            borderColor = 'border-red-500';
                                        }
                                    } else if (isSelected) {
                                        bgColor = 'bg-blue-500/20';
                                        borderColor = 'border-blue-500';
                                    }

                                    return (
                                        <button
                                            key={optionIndex}
                                            onClick={() => handleAnswerSelect(question.id, optionIndex)}
                                            disabled={showResults}
                                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgColor} ${borderColor} ${isDark ? 'text-gray-300 hover:bg-[rgb(45,45,51)]' : 'text-gray-800 hover:bg-gray-200'
                                                } ${showResults ? 'cursor-default' : 'cursor-pointer'}`}
                                        >
                                            {option}
                                        </button>
                                    );
                                })}
                            </div>

                            {showResults && selectedAnswers[question.id] !== undefined && (
                                <div className={`rounded-lg p-3 ${selectedAnswers[question.id] === question.correctAnswer
                                    ? 'bg-green-500/10 border-l-4 border-green-500'
                                    : 'bg-red-500/10 border-l-4 border-red-500'
                                    }`}>
                                    <p className={`text-sm font-bold ${selectedAnswers[question.id] === question.correctAnswer
                                        ? isDark ? 'text-green-400' : 'text-green-600'
                                        : isDark ? 'text-red-400' : 'text-red-600'
                                        }`}>
                                        {selectedAnswers[question.id] === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
                                    </p>
                                    <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                                        {question.explanation}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {selectedAnswers && Object.keys(selectedAnswers).length > 0 && (
                    <div className="flex items-center gap-4 mt-8">
                        {showResults && (
                            <div className={`flex-1 p-4 rounded-lg text-center ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                                }`}>
                                <p className="font-bold text-lg">
                                    Score: {getCorrectCount()}/{mcqQuestions.length}
                                </p>
                            </div>
                        )}
                        {!showResults && Object.keys(selectedAnswers).length === mcqQuestions.length && (
                            <button
                                onClick={handleSubmitAnswers}
                                className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors"
                            >
                                Submit Answers
                            </button>
                        )}
                        {showResults && (
                            <button
                                onClick={handleResetAnswers}
                                className="flex-1 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg transition-colors"
                            >
                                Reset Quiz
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Functions;
