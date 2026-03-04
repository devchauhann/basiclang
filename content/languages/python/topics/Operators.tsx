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
        id: 'op-1',
        question: 'What is the result of 10 + 5 * 2 in Python?',
        options: ['30', '20', 'Error', '35'],
        correctAnswer: 1,
        explanation: 'Python follows operator precedence. Multiplication is performed before addition, so 5 * 2 = 10, then 10 + 10 = 20.'
    },
    {
        id: 'op-2',
        question: 'What does the % operator do in Python?',
        options: ['Exponentiation', 'Modulus (remainder)', 'Division', 'Subtraction'],
        correctAnswer: 1,
        explanation: 'The % operator returns the remainder after division. For example, 10 % 3 = 1 because 10 divided by 3 has a remainder of 1.'
    },
    {
        id: 'op-3',
        question: 'What is the result of "Hello" + "World" in Python?',
        options: ['"HelloWorld"', 'Error', '"Hello World"', 'Undefined'],
        correctAnswer: 0,
        explanation: 'The + operator concatenates strings when used with string operands. "Hello" + "World" = "HelloWorld".'
    },
    {
        id: 'op-4',
        question: 'Which operator is used for exponentiation in Python?',
        options: ['^', '**', 'pow', '^^'],
        correctAnswer: 1,
        explanation: 'The ** operator is used for exponentiation. For example, 2 ** 3 = 8 (2 to the power of 3).'
    },
    {
        id: 'op-5',
        question: 'What is the result of 10 == "10" in Python?',
        options: ['True', 'False', 'Error', 'Undefined'],
        correctAnswer: 1,
        explanation: 'The == operator checks for equality of value and type. 10 (integer) is not equal to "10" (string), so the result is False.'
    }
];

export const Operators: React.FC = () => {
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
                    What are Operators?
                </h2>

                <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>
                        Operators are special symbols or keywords in Python that perform operations on variables and values.
                        Python supports various types of operators including arithmetic, comparison, logical, and assignment operators.
                    </p>

                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <h3 className={`font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Types of Operators:
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Arithmetic:</span>
                                <span>+, -, *, /, //, %, ** (addition, subtraction, multiplication, division, floor division, modulus, exponentiation)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Comparison:</span>
                                <span>==, !=, &lt;, &gt;, &lt;=, &gt;= (equal, not equal, less than, greater than, etc.)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Logical:</span>
                                <span>and, or, not (combines boolean values)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Assignment:</span>
                                <span>=, +=, -=, *=, /= (assigns and modifies values)</span>
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
                    {/* Example 1: Arithmetic Operators */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 1: Arithmetic Operators
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Arithmetic operators
a = 10
b = 3

addition = a + b          # 13
subtraction = a - b       # 7
multiplication = a * b    # 30
division = a / b          # 3.333...
floor_division = a // b   # 3
modulus = a % b           # 1 (remainder)
exponentiation = a ** b   # 1000 (10^3)

print(f"Addition: {addition}")       # Output: Addition: 13
print(f"Division: {division}")       # Output: Division: 3.333...`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `a = 10\nb = 3\naddition = a + b\nsubtraction = a - b\nmultiplication = a * b\ndivision = a / b\nfloor_division = a // b\nmodulus = a % b\nexponentiation = a ** b`,
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

                    {/* Example 2: Comparison Operators */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 2: Comparison Operators
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Comparison operators
x = 5
y = 10

equal = x == y          # False
not_equal = x != y      # True
less_than = x < y       # True
greater_than = x > y    # False
less_equal = x <= y     # True
greater_equal = x >= y  # False

print(f"x == y: {equal}")        # Output: x == y: False
print(f"x < y: {less_than}")     # Output: x < y: True`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `x = 5\ny = 10\nequal = x == y\nnot_equal = x != y\nless_than = x < y\ngreater_than = x > y`,
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

                    {/* Example 3: Logical Operators */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 3: Logical Operators
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Logical operators
a = True
b = False

and_result = a and b       # False (both must be True)
or_result = a or b         # True (at least one must be True)
not_result = not a         # False (inverts the value)

# Using with conditions
age = 25
is_student = True

can_vote = age >= 18 and not is_student  # True
print(f"Can vote: {can_vote}")            # Output: Can vote: True`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `a = True\nb = False\nand_result = a and b\nor_result = a or b\nnot_result = not a`,
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

                    {/* Example 4: Assignment Operators */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 4: Assignment Operators
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Assignment operators
x = 10                # x = 10
x += 5                # x = x + 5, so x = 15
x -= 3                # x = x - 3, so x = 12
x *= 2                # x = x * 2, so x = 24
x /= 4                # x = x / 4, so x = 6.0

print(f"Final value of x: {x}")  # Output: Final value of x: 6.0`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `x = 10\nx += 5\nx -= 3\nx *= 2\nx /= 4\nprint(f"Final value of x: {x}")`,
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
            <div className="space-y-6">
                <h2 className={`text-3xl font-black mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Test Your Knowledge
                </h2>
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Answer these questions to check your understanding of operators
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

export default Operators;
