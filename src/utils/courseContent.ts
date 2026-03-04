// Course Content Mapping
// This file maps courses to their lesson content files in the content folder

export interface Lesson {
    id: string;
    title: string;
    contentPath: string;
    order: number;
}

export interface CourseContent {
    courseId: string;
    lessons: Lesson[];
}

export const courseContentMap: Record<string, CourseContent> = {
    'js-basics': {
        courseId: 'js-basics',
        lessons: [
            {
                id: 'js-basics-01',
                title: 'Variables and Types',
                contentPath: '/content/languages/javascript/basics/01-variables-and-types.md',
                order: 1
            },
            {
                id: 'js-basics-02',
                title: 'Operators',
                contentPath: '/content/languages/javascript/basics/02-operators.md',
                order: 2
            }
        ]
    },
    'js-advanced': {
        courseId: 'js-advanced',
        lessons: [
            {
                id: 'js-adv-01',
                title: 'Async/Await',
                contentPath: '/content/languages/javascript/advanced/01-async-await.md',
                order: 1
            }
        ]
    },
    'python-basics': {
        courseId: 'python-basics',
        lessons: [
            {
                id: 'py-basics-01',
                title: 'Variables and Data Types',
                contentPath: '/content/languages/python/basics/01-variables-and-data-types.md',
                order: 1
            },
            {
                id: 'py-basics-02',
                title: 'Control Flow',
                contentPath: '/content/languages/python/basics/02-control-flow.md',
                order: 2
            }
        ]
    },
    'python-pro': {
        courseId: 'python-pro',
        lessons: [
            {
                id: 'py-pro-01',
                title: 'Advanced Concepts',
                contentPath: '/content/languages/python/pro/01-advanced-concepts.md',
                order: 1
            }
        ]
    },
    'react-basics': {
        courseId: 'react-basics',
        lessons: [
            {
                id: 'react-basics-01',
                title: 'Components and JSX',
                contentPath: '/content/languages/react/basics/01-components-and-jsx.md',
                order: 1
            }
        ]
    },
    'react-advanced': {
        courseId: 'react-advanced',
        lessons: [
            {
                id: 'react-adv-01',
                title: 'Advanced Patterns',
                contentPath: '/content/languages/react/advanced/01-advanced-patterns.md',
                order: 1
            }
        ]
    },
    'typescript-basics': {
        courseId: 'typescript-basics',
        lessons: [
            {
                id: 'ts-basics-01',
                title: 'TypeScript Basics',
                contentPath: '/content/languages/typescript/basics/01-basics.md',
                order: 1
            }
        ]
    },
    'css-mastery': {
        courseId: 'css-mastery',
        lessons: [
            {
                id: 'css-01',
                title: 'Selectors and Properties',
                contentPath: '/content/languages/css/basics/01-selectors-and-properties.md',
                order: 1
            }
        ]
    },
    'java-basics': {
        courseId: 'java-basics',
        lessons: [
            {
                id: 'java-basics-01',
                title: 'Variables and Data Types',
                contentPath: '/content/languages/java/basics/01-variables-and-data-types.md',
                order: 1
            }
        ]
    },
    'java-advanced': {
        courseId: 'java-advanced',
        lessons: [
            {
                id: 'java-adv-01',
                title: 'Advanced Concepts',
                contentPath: '/content/languages/java/advanced/01-advanced-concepts.md',
                order: 1
            }
        ]
    }
};

export function getCourseContent(courseId: string): CourseContent | undefined {
    return courseContentMap[courseId];
}

export function getLessonContent(courseId: string, lessonId: string): Lesson | undefined {
    const course = courseContentMap[courseId];
    if (!course) return undefined;
    return course.lessons.find(lesson => lesson.id === lessonId);
}
