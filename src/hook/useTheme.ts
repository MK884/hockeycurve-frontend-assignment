import React from "react";

type Theme = 'dark' | 'light';

const useTheme = () => {
    const getPreferredTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : ('light' as Theme);

    const initializeTheme = () => {
        const savedTheme = localStorage.getItem('tasks-theme') as Theme;
        if (savedTheme) return savedTheme;
        let preferTheme = getPreferredTheme();
        localStorage.setItem('tasks-theme', preferTheme);
        return preferTheme;
    };

    const [theme, setTheme] = React.useState<Theme>(initializeTheme || 'dark');

    const toggleTheme = () => {
        let newTheme = theme === 'dark' ? 'light' : ('dark' as Theme);
        setTheme(newTheme);
        localStorage.setItem('tasks-theme', newTheme);
    };

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);

        return () => document.documentElement.removeAttribute('data-theme');
    }, [theme]);

    return { theme, toggleTheme };
};

export default useTheme;