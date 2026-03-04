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
        id: 'oop-1',
        question: 'What is an object in Object-Oriented Programming?',
        options: [
            'A blueprint for creating instances',
            'An instance of a class with properties and methods',
            'A function that returns a value',
            'A data type'
        ],
        correctAnswer: 1,
        explanation: 'An object is an instance of a class - a concrete realization with actual data and behavior.'
    },
    {
        id: 'oop-2',
        question: 'What does the __init__ method do in a Python class?',
        options: [
            'Initializes the program',
            'Initializes the object with attributes when it is created',
            'Deletes the object',
            'Returns the object'
        ],
        correctAnswer: 1,
        explanation: '__init__ is the constructor that runs when an object is created, setting up initial values.'
    },
    {
        id: 'oop-3',
        question: 'What is inheritance in OOP?',
        options: [
            'Creating multiple objects',
            'A child class inheriting attributes and methods from a parent class',
            'Creating a new function',
            'Calling a method from another object'
        ],
        correctAnswer: 1,
        explanation: 'Inheritance allows a class to inherit properties and methods from another class, promoting code reuse.'
    },
    {
        id: 'oop-4',
        question: 'What is polymorphism in OOP?',
        options: [
            'Using multiple classes',
            'The ability of objects to take different forms or for methods to behave differently based on context',
            'Creating objects from classes',
            'Defining multiple functions'
        ],
        correctAnswer: 1,
        explanation: 'Polymorphism means "many forms" - methods can have the same name but behave differently in different classes.'
    },
    {
        id: 'oop-5',
        question: 'What is the purpose of "self" in Python class methods?',
        options: [
            'It is a keyword used to define static methods',
            'It refers to the current instance of the class',
            'It calls another method',
            'It creates a new variable'
        ],
        correctAnswer: 1,
        explanation: '"self" is a reference to the instance of the class, allowing methods to access the object\'s attributes.'
    }
];

export const OOP: React.FC = () => {
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
                    Object-Oriented Programming (OOP)
                </h2>

                <div className={`space-y-4 text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <p>
                        Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects,
                        which are instances of classes. OOP promotes reusability, modularity, and maintainability through
                        concepts like encapsulation, inheritance, and polymorphism.
                    </p>

                    <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                        <h3 className={`font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Key OOP Concepts:
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Class:</span>
                                <span>A blueprint for creating objects with attributes and methods</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Object:</span>
                                <span>An instance of a class with specific data and behavior</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Encapsulation:</span>
                                <span>Bundling data and methods, hiding internal details</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Inheritance:</span>
                                <span>Child class inheriting from parent class</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-bold text-blue-500 min-w-fit">Polymorphism:</span>
                                <span>Methods with same name behaving differently in different classes</span>
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
                    {/* Example 1: Basic Class */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 1: Creating a Basic Class
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Define a class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, my name is {self.name}"
    
    def birthday(self):
        self.age += 1
        return f"{self.name} is now {self.age} years old"

# Create objects (instances)
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

# Call methods
print(person1.greet())         # Output: Hello, my name is Alice
print(person1.birthday())      # Output: Alice is now 26 years old
print(person2.age)             # Output: 30`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def greet(self):\n        return f"Hello, my name is {self.name}"\n\nperson1 = Person("Alice", 25)\nprint(person1.greet())`,
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

                    {/* Example 2: Inheritance */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 2: Inheritance
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`# Parent class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return f"{self.name} makes a sound"

# Child class inherits from parent
class Dog(Animal):
    def speak(self):
        return f"{self.name} barks: Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} meows: Meow!"

# Create objects
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())             # Output: Buddy barks: Woof!
print(cat.speak())             # Output: Whiskers meows: Meow!`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} barks"\n\ndog = Dog("Buddy")\nprint(dog.speak())`,
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

                    {/* Example 3: Encapsulation */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 3: Encapsulation with Private Attributes
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`class BankAccount:
    def __init__(self, balance):
        self.__balance = balance    # Private attribute (double underscore)
    
    def deposit(self, amount):
        self.__balance += amount
        return f"Deposited {amount}. New balance: {self.__balance}"
    
    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
            return f"Withdrew {amount}. New balance: {self.__balance}"
        return "Insufficient balance"
    
    def get_balance(self):
        return self.__balance

# Create and use account
account = BankAccount(1000)
print(account.deposit(500))        # Output: Deposited 500. New balance: 1500
print(account.withdraw(200))       # Output: Withdrew 200. New balance: 1300
print(account.get_balance())       # Output: 1300`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n    def deposit(self, amount):\n        self.__balance += amount\n    def get_balance(self):\n        return self.__balance`,
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

                    {/* Example 4: Polymorphism */}
                    <div>
                        <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                            Example 4: Polymorphism
                        </h3>
                        <div className={`rounded-2xl border-l-4 border-[#6771cd] p-4 ${isDark ? 'bg-[rgb(32,33,39)]' : 'bg-gray-50'}`}>
                            <pre className={`text-sm overflow-x-auto ${isDark ? 'text-[rgb(200,200,200)]' : 'text-gray-800'}`}>
                                <code>{`class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

# Polymorphism - same method name, different behavior
shapes = [Circle(5), Rectangle(4, 6)]

for shape in shapes:
    print(f"Area: {shape.area()}")

# Output:
# Area: 78.5
# Area: 24`}</code>
                            </pre>
                            <button
                                onClick={() => copyToClipboard(
                                    `class Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return 3.14 * self.radius ** 2\n\ncircle = Circle(5)\nprint(circle.area())`,
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
                    Answer these questions to check your understanding of OOP
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

export default OOP;
