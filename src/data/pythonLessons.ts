// Python lessons data structure
export interface PythonLesson {
    id: string;
    slug: string;
    title: string;
    description: string;
    level: 'beginner' | 'intermediate' | 'advanced' | 'pro';
    content: string;
    codeExamples: CodeExample[];
    exercises: Exercise[];
}

export interface CodeExample {
    title: string;
    code: string;
    language: string;
    explanation: string;
}

export interface Exercise {
    id: string;
    title: string;
    description: string;
    hint: string;
    solution: string;
}

export const pythonLessons: PythonLesson[] = [
    {
        id: 'py-000',
        slug: 'what-is-python',
        title: 'What is Python?',
        description: 'Introduction to Python - learn what Python is and why it\'s so popular.',
        level: 'beginner',
        content: 'Introduction to Python programming language.',
        codeExamples: [],
        exercises: []
    },
    {
        id: 'py-000a',
        slug: 'getting-started-with-python',
        title: 'Getting Started with Python',
        description: 'Set up Python environment and run your first program.',
        level: 'beginner',
        content: 'Get started with Python programming.',
        codeExamples: [],
        exercises: []
    },
    {
        id: 'py-000b',
        slug: 'python-syntax',
        title: 'Python Syntax',
        description: 'Learn the basic syntax rules and conventions in Python.',
        level: 'beginner',
        content: 'Python syntax and basic rules.',
        codeExamples: [],
        exercises: []
    },
    {
        id: 'py-000c',
        slug: 'python-statements',
        title: 'Python Statements',
        description: 'Understand different types of statements in Python.',
        level: 'beginner',
        content: 'Python statements explained.',
        codeExamples: [],
        exercises: []
    },
    {
        id: 'py-000d',
        slug: 'python-print-output',
        title: 'Python Print and Output',
        description: 'Learn how to print and display output in Python.',
        level: 'beginner',
        content: 'Print statements and output in Python.',
        codeExamples: [],
        exercises: []
    },
    {
        id: 'py-000e',
        slug: 'python-output-numbers',
        title: 'Python Output Numbers',
        description: 'Work with numbers and different number formats in output.',
        level: 'beginner',
        content: 'Output numbers in Python.',
        codeExamples: [],
        exercises: []
    },
    {
        id: 'py-001',
        slug: 'variables-and-data-types',
        title: 'Variables and Data Types',
        description: 'Learn about Python variables, data types, and type conversions.',
        level: 'beginner',
        content: 'Variables and Data Types in Python - Learn how to create variables and work with different data types.',
        codeExamples: [
            {
                title: 'Variable Assignment',
                code: 'name = "Alice"\nage = 25\nheight = 5.6\nis_student = True\n\nprint(type(name))\nprint(type(age))',
                language: 'python',
                explanation: 'Variables are created by assignment and Python infers the type automatically.'
            }
        ],
        exercises: [
            {
                id: 'py-001-ex1',
                title: 'Create Variables',
                description: 'Create variables for your name, age, and favorite hobby.',
                hint: 'Use the assignment operator (=)',
                solution: 'name = "Your Name"\nage = 25\nhobby = "Reading"'
            }
        ]
    },
    {
        id: 'py-002',
        slug: 'operators',
        title: 'Operators',
        description: 'Master arithmetic, comparison, logical, and assignment operators.',
        level: 'beginner',
        content: 'Learn about different types of operators in Python.',
        codeExamples: [
            {
                title: 'Arithmetic Operations',
                code: 'a = 10\nb = 3\nprint(a + b)\nprint(a - b)\nprint(a * b)',
                language: 'python',
                explanation: 'Basic arithmetic operations.'
            }
        ],
        exercises: []
    },
    {
        id: 'py-003',
        slug: 'control-flow',
        title: 'Control Flow',
        description: 'Learn if/elif/else statements and loops.',
        level: 'beginner',
        content: 'Master conditional statements and loops.',
        codeExamples: [
            {
                title: 'If-Elif-Else',
                code: 'age = 18\nif age < 13:\n    print("Child")\nelif age < 18:\n    print("Teenager")\nelse:\n    print("Adult")',
                language: 'python',
                explanation: 'Conditional statements.'
            }
        ],
        exercises: []
    },
    {
        id: 'py-004',
        slug: 'lists-and-collections',
        title: 'Lists and Collections',
        description: 'Work with lists, tuples, dictionaries, and sets.',
        level: 'intermediate',
        content: 'Learn about different collection types.',
        codeExamples: [],
        exercises: []
    },
    {
        id: 'py-005',
        slug: 'functions',
        title: 'Functions',
        description: 'Define and use functions with parameters and return values.',
        level: 'intermediate',
        content: 'Learn how to create reusable functions.',
        codeExamples: [],
        exercises: []
    },
    {
        id: 'py-006',
        slug: 'object-oriented-programming',
        title: 'Object-Oriented Programming',
        description: 'Learn classes, objects, inheritance, and polymorphism.',
        level: 'advanced',
        content: 'Master OOP concepts in Python.',
        codeExamples: [],
        exercises: []
    },
    {
        id: 'py-007',
        slug: 'decorators',
        title: 'Decorators',
        description: 'Master Python decorators for function and class enhancement.',
        level: 'pro',
        content: 'Learn about decorators.',
        codeExamples: [],
        exercises: []
    },
    {
        id: 'py-008',
        slug: 'generators-and-iterators',
        title: 'Generators and Iterators',
        description: 'Work with generators, iterators, and lazy evaluation.',
        level: 'pro',
        content: 'Master generators and iterators.',
        codeExamples: [],
        exercises: []
    }
];

export function getPythonLesson(slug: string): PythonLesson | undefined {
    return pythonLessons.find(lesson => lesson.slug === slug);
}

export function getPythonLessonsByLevel(level: string): PythonLesson[] {
    return pythonLessons.filter(lesson => lesson.level === level);
}
