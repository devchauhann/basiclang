import React, { useEffect, useState } from 'react';
import { useTheme } from './src/ThemeContext';
import { Theme } from './types';
import Header from './src/frontend/Header';
import Footer from './src/frontend/Footer';
import StudyLanding from './src/frontend/Landing';
import CoursesPage from './src/frontend/CoursesPage';
import PythonIndexPage from './content/languages/python/PythonIndexPage';
import PythonLessonPage from './content/languages/python/PythonLessonPage';

type ViewType = 'landing' | 'courses' | 'topics' | 'lesson';

// Helper function to parse initial view from URL
const parseInitialView = (): [ViewType, string, string] => {
  if (typeof window === 'undefined') return ['landing', '', ''];

  const path = window.location.pathname;

  if (path === '/' || path === '') {
    return ['landing', '', ''];
  } else if (path === '/courses') {
    return ['courses', '', ''];
  } else if (path.startsWith('/courses/')) {
    const parts = path.split('/courses/')[1].split('/');
    const courseId = parts[0];
    const lessonSlug = parts[1];

    if (lessonSlug) {
      return ['lesson', courseId, lessonSlug];
    } else {
      return ['topics', courseId, ''];
    }
  }

  return ['landing', '', ''];
};

const App: React.FC = () => {
  const [initialView, initialCourseId, initialLessonSlug] = parseInitialView();
  const [view, setView] = useState<ViewType>(initialView);
  const [selectedCourseId, setSelectedCourseId] = useState<string>(initialCourseId);
  const [selectedLessonSlug, setSelectedLessonSlug] = useState<string>(initialLessonSlug);
  const { theme } = useTheme();
  const bgClass = theme === Theme.DARK ? 'bg-[rgb(27,27,31)] text-white' : 'bg-white text-[rgb(60,60,67)]';
  const isDark = theme === Theme.DARK;

  // Disable browser scroll restoration and always scroll to top
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Navigate to view
  const navigateTo = (newView: ViewType, courseId?: string, lessonSlug?: string) => {
    if (courseId) {
      setSelectedCourseId(courseId);
    }
    if (lessonSlug) {
      setSelectedLessonSlug(lessonSlug);
    }

    // @ts-ignore - View Transition API is new
    if (document.startViewTransition) {
      // @ts-ignore
      document.startViewTransition(() => {
        // Update URL
        const urlMap: { [key in ViewType]: string } = {
          'landing': '/',
          'courses': '/courses',
          'topics': courseId ? `/courses/${courseId}` : '/courses',
          'lesson': courseId && lessonSlug ? `/courses/${courseId}/${lessonSlug}` : '/courses',
        };

        window.history.pushState({}, '', urlMap[newView]);

        // Update state
        setView(newView);

        // Scroll to top
        window.scrollTo(0, 0);
      });
    } else {
      // Fallback for older browsers
      const urlMap: { [key in ViewType]: string } = {
        'landing': '/',
        'courses': '/courses',
        'topics': courseId ? `/courses/${courseId}` : '/courses',
        'lesson': courseId && lessonSlug ? `/courses/${courseId}/${lessonSlug}` : '/courses',
      };

      window.history.pushState({}, '', urlMap[newView]);
      setView(newView);
      window.scrollTo(0, 0);
    }
  };

  // Handle browser navigation (back/forward buttons)
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleNavigation = () => {
      const [newView, newCourseId, newLessonSlug] = parseInitialView();
      setView(newView);
      setSelectedCourseId(newCourseId);
      setSelectedLessonSlug(newLessonSlug);
      window.scrollTo(0, 0);
    };

    // Listen for browser back/forward
    window.addEventListener('popstate', handleNavigation);

    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 selection:bg-pink-500/30 ${bgClass}`}>
      <Header onNavigate={(view) => {
        if (view === 'landing') navigateTo('landing');
        else if (view === 'courses') navigateTo('courses');
      }} />

      <main className="flex-1">
        <div className="animate-fade-in">
          {view === 'landing' && (
            <StudyLanding
              onGetStarted={() => navigateTo('courses')}
            />
          )}
          {view === 'courses' && (
            <CoursesPage
              onSelectCourse={(courseId) => navigateTo('topics', courseId)}
            />
          )}
          {view === 'topics' && selectedCourseId && (
            <PythonIndexPage
              onSelectLesson={(slug) => navigateTo('lesson', selectedCourseId, slug)}
              onBack={() => navigateTo('courses')}
            />
          )}
          {view === 'lesson' && selectedCourseId && selectedLessonSlug && (
            <PythonLessonPage
              slug={selectedLessonSlug}
              onBack={() => navigateTo('topics', selectedCourseId)}
            />
          )}
        </div>
      </main>

      <Footer onNavigate={(view) => {
        if (view === 'landing') navigateTo('landing');
        else if (view === 'courses') navigateTo('courses');
      }} />
    </div>
  );
};

export default App;