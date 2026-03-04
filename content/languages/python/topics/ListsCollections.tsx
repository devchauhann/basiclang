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
        id: 'lc-1',
        question: 'What is the index of the first element in a Python list?',
        options: ['1', '0', '-1', 'A'],
        correctAnswer: 1,
        explanation: 'Python uses zero-based indexing, so the first element has index 0.'
    },
    {
        id: 'lc-2',
        question: 'What will happen if you try to access an index that doesn\'t exist in a list?',
        options: ['Returns None', 'Returns empty list', 'Raises IndexError', 'Returns 0'],
        correctAnswer: 2,
        explanation: 'Attempting to access an invalid index raises an IndexError exception.'
    },
    {
        id: 'lc-3',
        question: 'What is the difference between a list and a tuple in Python?',
        options: [
            'Lists are mutable, tuples are immutable',
            'Tuples are mutable, lists are immutable',
            'They are exactly the same',
            'Lists use {}, tuples use []'
        ],
        correctAnswer: 0,
        explanation: 'Lists can be modified after creation (mutable), while tuples cannot (immutable).'
    },
    {
        id: 'lc-4',
        question: 'What will set() do with duplicate elements?',
        options: ['Keeps all duplicates', 'Removes all duplicates', 'Throws an error', 'Converts to tuple'],
        correctAnswer: 1,
        explanation: 'A set automatically removes duplicate elements, keeping only unique values.'
    },
    {
        id: 'lc-5',
        question: 'How do you access the value associated with a key in a dictionary?',
        options: ['dict[value]', 'dict.value', 'dict[key]', 'dict.get(value)'],
        correctAnswer: 2,
        explanation: 'You use square brackets with the key: dict[key] to access the value.'
    }
];

export const ListsCollections: React.FC = () => {
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
                    Lists, Tuples, Dictionaries & Sets
                </h2>

                <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>
                        Collections are data structures that store multiple items. Python provides four main built-in collection types:
                        lists, tuples, dictionaries, and sets. Each has unique characteristics and use cases.
                    </p>

                    <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                        <h3 className={`font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Collection Types:
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">List:</span>
                                <span>Ordered, mutable, allows duplicates. Syntax: [] Example: [1, 2, 3]</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Tuple:</span>
                                <span>Ordered, immutable, allows duplicates. Syntax: () Example: (1, 2, 3)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Dictionary:</span>
                                <span>Unordered, mutable, key-value pairs. Syntax: {'{}'} Example: {'{name: "Alice", age: 25}'}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Set:</span>
                                <span>Unordered, mutable, no duplicates. Syntax: set() Example: {'{1, 2, 3}'}</span>
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
                    {/* Example 1: Lists */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 1: Working with Lists
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Accessing elements
print(fruits[0])           # Output: apple
print(fruits[-1])          # Output: cherry (last element)

# Modifying lists
fruits.append("orange")    # Add to end
fruits.insert(1, "mango")  # Insert at index 1
fruits.remove("banana")    # Remove specific element
popped = fruits.pop()      # Remove and return last element

# List slicing
print(numbers[1:4])        # Output: [2, 3, 4]
print(numbers[:3])         # Output: [1, 2, 3]`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `fruits = ["apple", "banana", "cherry"]\nfruits.append("orange")\nfruits.insert(1, "mango")\nfruits.remove("banana")\nprint(fruits)`,
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

                    {/* Example 2: Tuples */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 2: Working with Tuples
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Creating tuples
coordinates = (10, 20)
colors = ("red", "green", "blue")
single = (5,)              # Single element tuple (note the comma)

# Accessing elements
print(coordinates[0])      # Output: 10
print(colors[-1])          # Output: blue

# Tuple unpacking
x, y = coordinates
print(f"x: {x}, y: {y}")   # Output: x: 10, y: 20

# Tuples are immutable
# colors[0] = "yellow"  # This would raise an error

# Converting tuple to list and back
tuple_list = list(colors)
tuple_list[0] = "yellow"
colors = tuple(tuple_list)
print(colors)             # Output: ("yellow", "green", "blue")`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `coordinates = (10, 20)\nx, y = coordinates\nprint(f"x: {x}, y: {y}")`,
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

                    {/* Example 3: Dictionaries */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 3: Working with Dictionaries
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Creating dictionaries
person = {'{name}': "Alice", "age": 25, "city": "NYC"}
empty = {'{}'} 

# Accessing values
print(person["name"])       # Output: Alice
print(person.get("age"))    # Output: 25
print(person.get("job", "Unknown"))  # Output: Unknown (default value)

# Adding/modifying entries
person["job"] = "Engineer"
person["age"] = 26

# Removing entries
del person["city"]
popped = person.pop("job")

# Dictionary methods
print(person.keys())        # Output: dict_keys(['name', 'age'])
print(person.values())      # Output: dict_values(['Alice', 26])
print(person.items())       # Output: dict_items([('name', 'Alice'), ('age', 26)])

# Iterating through dictionary
for key, value in person.items():
    print(f"{key}: {value}")`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `person = {"name": "Alice", "age": 25}\nperson["job"] = "Engineer"\nperson["age"] = 26\nfor key, value in person.items():\n    print(f"{key}: {value}")`,
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

                    {/* Example 4: Sets */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 4: Working with Sets
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Creating sets
numbers = {'{1, 2, 3, 4, 5}'}
colors = set(["red", "green", "blue"])
unique = set([1, 2, 2, 3, 3, 3])  # Output: {1, 2, 3}

# Adding/removing elements
numbers.add(6)
numbers.remove(3)              # Error if element doesn't exist
numbers.discard(10)            # No error if element doesn't exist

# Set operations
set1 = {'{1, 2, 3}'}
set2 = {'{3, 4, 5}'}

union = set1 | set2            # {1, 2, 3, 4, 5}
intersection = set1 & set2     # {3}
difference = set1 - set2       # {1, 2}

# Checking membership
print(2 in set1)               # Output: True
print(6 in set1)               # Output: False`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `numbers = {1, 2, 3, 4, 5}\nnumbers.add(6)\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\nunion = set1 | set2\nintersection = set1 & set2`,
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
                    Answer these questions to check your understanding of collections
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

export default ListsCollections;
