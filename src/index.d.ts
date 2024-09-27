type tabs = 'all' | 'high' | 'medium' | 'low' | 'done';

interface tabsProps {
    label: tabs;
    content: React.ReactNode;
}

interface TabListProps {
    data: tabsProps[];
}