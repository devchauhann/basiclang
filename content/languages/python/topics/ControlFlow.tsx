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
        id: 'cf-1',
        question: 'What is the output of the following code?\nif 5 > 3:\n    print("Yes")\nelse:\n    print("No")',
        options: ['"No"', '"Yes"', 'Error', 'Nothing printed'],
        correctAnswer: 1,
        explanation: 'Since 5 is greater than 3, the condition is True, so the if block executes and prints "Yes".'
    },
    {
        id: 'cf-2',
        question: 'How many times does this loop execute?\nfor i in range(3):\n    print(i)',
        options: ['2 times', '3 times', '4 times', '1 time'],
        correctAnswer: 1,
        explanation: 'range(3) generates values 0, 1, 2. So the loop executes 3 times, printing 0, 1, 2.'
    },
    {
        id: 'cf-3',
        question: 'What does a break statement do in a loop?',
        options: ['Skips the current iteration', 'Stops the loop completely', 'Restarts the loop', 'Pauses the loop'],
        correctAnswer: 1,
        explanation: 'The break statement immediately terminates the loop and exits the loop block.'
    },
    {
        id: 'cf-4',
        question: 'What is the purpose of the elif statement?',
        options: ['To define a function', 'To handle additional conditions if the previous if was False', 'To create a loop', 'To handle exceptions'],
        correctAnswer: 1,
        explanation: 'elif (else if) is used to check another condition if the previous if condition was False.'
    },
    {
        id: 'cf-5',
        question: 'What does a continue statement do?',
        options: ['Stops the loop', 'Skips the rest of the current iteration and moves to the next one', 'Restarts the loop', 'Returns from the function'],
        correctAnswer: 1,
        explanation: 'The continue statement skips the remaining code in the current iteration and jumps to the next iteration.'
    }
];

export const ControlFlow: React.FC = () => {
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
                    What is Control Flow?
                </h2>

                <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>
                        Control flow statements allow you to decide which code to execute based on certain conditions,
                        or to repeat code multiple times. The main control flow statements are if/elif/else for decision-making
                        and loops (for, while) for repetition.
                    </p>

                    <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                        <h3 className={`font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Key Concepts:
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">if statement:</span>
                                <span>Executes code if a condition is True</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">elif statement:</span>
                                <span>Checks another condition if the previous if was False</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">else statement:</span>
                                <span>Executes code if all previous conditions were False</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">for loop:</span>
                                <span>Repeats code for each item in a sequence</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">while loop:</span>
                                <span>Repeats code while a condition is True</span>
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
                    {/* Example 1: if/elif/else */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 1: if/elif/else Statements
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# if/elif/else statement
age = 18

if age < 13:
    print("You are a child")
elif age < 18:
    print("You are a teenager")
elif age < 65:
    print("You are an adult")
else:
    print("You are a senior")

# Output: You are an adult`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `age = 18\nif age < 13:\n    print("You are a child")\nelif age < 18:\n    print("You are a teenager")\nelif age < 65:\n    print("You are an adult")\nelse:\n    print("You are a senior")`,
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

                    {/* Example 2: for loop */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 2: for Loop
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# for loop with range
print("Numbers 0 to 4:")
for i in range(5):
    print(i)

# Output:
# 0
# 1
# 2
# 3
# 4

# for loop with list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")
    
# Output:
# I like apple
# I like banana
# I like cherry`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `for i in range(5):\n    print(i)\n\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(f"I like {fruit}")`,
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

                    {/* Example 3: while loop */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 3: while Loop
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# Output:
# Count: 0
# Count: 1
# Count: 2
# Count: 3
# Count: 4

# while loop with break
number = 1
while True:
    if number > 5:
        break
    print(number)
    number += 1
    
# Output: 1, 2, 3, 4, 5`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `count = 0\nwhile count < 5:\n    print(f"Count: {count}")\n    count += 1`,
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

                    {/* Example 4: break and continue */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 4: break and continue Statements
                        </h3>
                        <div className={`rounded-lg p-4 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Using break to exit loop early
print("Using break:")
for i in range(10):
    if i == 5:
        break
    print(i)
    
# Output: 0, 1, 2, 3, 4

# Using continue to skip iteration
print("Using continue:")
for i in range(5):
    if i == 2:
        continue
    print(i)
    
# Output: 0, 1, 3, 4`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `for i in range(10):\n    if i == 5:\n        break\n    print(i)\n\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)`,
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
                    Answer these questions to check your understanding of control flow
                </p>

                <div className="space-y-6">
                    {mcqQuestions.map((question, index) => (
                        <div
                            key={question.id}
                            className={`rounded-lg p-6 ${isDark ? 'bg-[rgb(27,27,31)]' : 'bg-white'}`}
                        >
                            <h3 className={`font-bold mb-4 whitespace-pre-wrap ${isDark ? 'text-white' : 'text-gray-900'}`}>
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

export default ControlFlow;
