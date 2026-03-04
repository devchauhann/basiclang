# Content Folder Structure

This folder contains all the learning content for the BasicLang study app, organized by programming language and difficulty level.

## Directory Structure

```
content/
└── languages/
    ├── javascript/
    │   ├── basics/
    │   │   ├── 01-variables-and-types.md
    │   │   └── 02-operators.md
    │   └── advanced/
    ├── python/
    │   ├── basics/
    │   │   ├── 01-variables-and-data-types.md
    │   │   └── 02-control-flow.md
    │   └── pro/
    ├── react/
    │   ├── basics/
    │   │   └── 01-components-and-jsx.md
    │   └── advanced/
    ├── typescript/
    │   └── basics/
    │       └── 01-basics.md
    ├── css/
    │   └── basics/
    │       └── 01-selectors-and-properties.md
    └── java/
        ├── basics/
        │   └── 01-variables-and-data-types.md
        └── advanced/
```

## Course Mapping

Each course is mapped to its content files through the `courseContent.ts` file in `src/utils/`:

### JavaScript Courses

- **js-basics**: `/content/languages/javascript/basics/`
  - Variables and Types
  - Operators

- **js-advanced**: `/content/languages/javascript/advanced/`

### Python Courses

- **python-basics**: `/content/languages/python/basics/`
  - Variables and Data Types
  - Control Flow

- **python-pro**: `/content/languages/python/pro/`

### React Courses

- **react-basics**: `/content/languages/react/basics/`
  - Components and JSX

- **react-advanced**: `/content/languages/react/advanced/`

### TypeScript Course

- **typescript-basics**: `/content/languages/typescript/basics/`
  - TypeScript Basics

### CSS Course

- **css-mastery**: `/content/languages/css/basics/`
  - Selectors and Properties

### Java Courses

- **java-basics**: `/content/languages/java/basics/`
  - Variables and Data Types

- **java-advanced**: `/content/languages/java/advanced/`

## Adding New Content

When adding new lessons:

1. Create a markdown file in the appropriate language and level folder
2. Name it with a number prefix (e.g., `03-functions.md`)
3. Add the lesson to the `courseContentMap` in `src/utils/courseContent.ts`
4. Follow the markdown format: headings, code examples, and practice exercises

## Markdown File Format

Each lesson file should follow this structure:

```markdown
# Topic Name

## Basic Concepts

Explain the fundamental concepts...

## Code Examples

### Subtitle

\`\`\`language
// Code example
\`\`\`

## Practice Exercises

1. Exercise 1
2. Exercise 2
```

## Content Guidelines

- Keep lessons focused on one main topic
- Include practical code examples
- Provide practice exercises at the end
- Use clear, beginner-friendly language
- Include both theory and hands-on examples
