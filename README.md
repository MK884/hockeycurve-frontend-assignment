# This repository represents the assignment given by **HockeyCurve** team for **Frontend** role.

## Task List

- [x] **Milestone 1 (Basic - Must Complete)**
    - [x] Task List Display:
        * Create a simple list to display tasks with title and description.
        * Implement basic add and delete functionality for tasks.
    - [x] Task Form:
        * Create a form to add new tasks with title and description fields.
        * Implement basic form validation (e.g., title and description cannot be empty).
    - [x] State Management:
        * Use React&#39;s useState hook to manage the list of tasks.
    - [x] Styling:
        * Apply basic CSS to make the application presentable.
        * Addition of Accordion is not compulsory. User can directly click on the task and go the the Edit popup.
- [x] **Milestone 2 (Intermediate)**
    - [x] Enhanced Task Properties:
        * Add due date and priority (Low, Medium, High) to tasks.
        * Implement edit functionality for existing tasks.
    - [x] Advanced Validation:
        * Ensure task titles are unique.
        * Validate that due dates are today or in the future.
    - [x] Task Interactions:
        * Add a &quot;Completed/ Done task&quot; feature with visual distinction for completed tasks.
        * Implement a basic search functionality to filter tasks by title.
    - [x] Improved State Management:
        * Use useReducer or Context API for more complex state management.
    - [x] Responsive Design:
        * Ensure the application works well on both desktop and mobile devices.
- [ ] **Good to Have (Advanced)**
    - [ ] Performance Optimization:
        * Implement virtualization for the task list to handle large numbers of tasks.
        * Use React.memo() and useCallback() to optimize re-renders.
    - [ ] Advanced Features:
        * Implement a &quot;snooze&quot; feature to postpone due dates.
        * Add a &quot;priority sort&quot; function to arrange tasks by priority and due date.
        * Addition of Accordion as shown in the UI
    - [ ] UI/UX Enhancements:
        * Create a dark mode toggle with smooth transition.
        * Implement drag-and-drop functionality to reorder tasks.
    - [ ] Data Persistence:
        * Use localStorage to save tasks between page reloads.
    - [ ] Error Handling:
        * Implement error boundaries and display user-friendly error messages.
    - [ ] Analytics:
        * Create a simple dashboard showing task completion rates and overdue tasks.