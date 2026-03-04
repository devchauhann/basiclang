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
        id: 'gen-1',
        question: 'What is a generator in Python?',
        options: [
            'A class that generates objects',
            'A function that returns values one at a time using yield',
            'A loop that generates numbers',
            'A type of list'
        ],
        correctAnswer: 1,
        explanation: 'A generator is a function that uses the yield keyword to return values one at a time, creating an iterator.'
    },
    {
        id: 'gen-2',
        question: 'What does the yield keyword do?',
        options: [
            'Returns a value and ends the function',
            'Pauses the function and returns a value; resumes from that point on next call',
            'Creates a new variable',
            'Deletes a variable'
        ],
        correctAnswer: 1,
        explanation: 'yield pauses the function execution and returns a value; when called again, it resumes from where it paused.'
    },
    {
        id: 'gen-3',
        question: 'What is the main advantage of using generators?',
        options: [
            'They run faster than regular functions',
            'They use less memory because they generate values on-the-fly instead of storing all values',
            'They are easier to write than functions',
            'They can generate random numbers'
        ],
        correctAnswer: 1,
        explanation: 'Generators are memory-efficient because they yield values one at a time rather than creating and storing entire lists in memory.'
    },
    {
        id: 'gen-4',
        question: 'How do you iterate through a generator?',
        options: [
            'Using a while True loop', 'Using a for loop', 'Using the next() function', 'All of the above'],
        correctAnswer: 3,
        explanation: 'All methods work - you can use for loops, next() function, or while loops to iterate through generators.'
    },
    {
        id: 'gen-5',
        question: 'What is the difference between an iterator and a generator?',
        options: [
            'There is no difference',
            'All generators are iterators, but not all iterators are generators; generators use yield',
            'Iterators use yield, generators use return',
            'Generators are faster than iterators'
        ],
        correctAnswer: 1,
        explanation: 'Generators are a special type of iterator created with yield. All generators are iterators, but not all iterators are generators.'
    }
];

export const Generators: React.FC = () => {
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
        <div className={`space-y-8 ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
            {/* Explanation Section */}
            <div className="space-y-4">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Generators and Iterators
                </h2>

                <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>
                        Generators are a memory-efficient way to create iterables in Python. Instead of creating and storing
                        entire lists in memory, generators produce values one at a time on-the-fly. They use the yield keyword
                        to pause execution and resume later, making them perfect for working with large datasets or infinite sequences.
                    </p>

                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <h3 className={`font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Key Concepts:
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Generator:</span>
                                <span>A function using yield to return values lazily</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">yield:</span>
                                <span>Pauses execution and returns a value</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Iterator:</span>
                                <span>An object with __iter__() and __next__() methods</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Lazy evaluation:</span>
                                <span>Values computed on-demand, not stored in memory</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">next():</span>
                                <span>Function to get the next value from an iterator</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Usage Examples Section */}
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Usage Examples
                </h2>

                <div className="space-y-6">
                    {/* Example 1: Simple Generator */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 1: Simple Generator
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Generator function
def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

# Using the generator
gen = count_up_to(5)

# Method 1: Using next()
print(next(gen))        # Output: 1
print(next(gen))        # Output: 2
print(next(gen))        # Output: 3

# Method 2: Using a for loop
for num in count_up_to(5):
    print(num)

# Output: 1, 2, 3, 4, 5`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `def count_up_to(max):\n    count = 1\n    while count <= max:\n        yield count\n        count += 1\n\nfor num in count_up_to(5):\n    print(num)`,
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

                    {/* Example 2: Generator Expression */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 2: Generator Expression
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Generator expression (like list comprehension but with parentheses)
gen_squares = (x**2 for x in range(5))

# Using the generator
for square in gen_squares:
    print(square)

# Output: 0, 1, 4, 9, 16

# Compare memory usage
import sys

# List - stores all values
list_squares = [x**2 for x in range(1000)]
print(f"List size: {sys.getsizeof(list_squares)} bytes")

# Generator - creates values on-demand
gen_squares = (x**2 for x in range(1000))
print(f"Generator size: {sys.getsizeof(gen_squares)} bytes")

# Output shows generator uses much less memory`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `gen_squares = (x**2 for x in range(5))\n\nfor square in gen_squares:\n    print(square)\n\nlist_squares = [x**2 for x in range(1000)]\ngen_squares = (x**2 for x in range(1000))`,
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

                    {/* Example 3: Fibonacci Generator */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 3: Fibonacci Generator
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Generator for Fibonacci sequence
def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

# Using the generator
print("Fibonacci numbers up to 20:")
for num in fibonacci(20):
    print(num, end=" ")

# Output: 0 1 1 2 3 5 8 13

# Can also be used with list()
fib_list = list(fibonacci(100))
print(f"\nFibonacci numbers up to 100: {fib_list}")`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `def fibonacci(limit):\n    a, b = 0, 1\n    while a < limit:\n        yield a\n        a, b = b, a + b\n\nfor num in fibonacci(20):\n    print(num, end=" ")`,
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

                    {/* Example 4: Custom Iterator */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 4: Custom Iterator Class
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Custom iterator class
class CountUp:
    def __init__(self, max):
        self.max = max
        self.current = 0
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.current < self.max:
            self.current += 1
            return self.current
        else:
            raise StopIteration

# Using the custom iterator
counter = CountUp(5)

for num in counter:
    print(num)

# Output: 1, 2, 3, 4, 5

# Compare with generator (simpler)
def count_up(max):
    count = 0
    while count < max:
        count += 1
        yield count

# Generator is more concise!`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `class CountUp:\n    def __init__(self, max):\n        self.max = max\n        self.current = 0\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.current < self.max:\n            self.current += 1\n            return self.current\n        else:\n            raise StopIteration`,
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
            <div className="space-y-6 mt-8">
                <h2 className={`text-3xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Test Your Knowledge
                </h2>
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Answer these questions to check your understanding of generators
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

export default Generators;
