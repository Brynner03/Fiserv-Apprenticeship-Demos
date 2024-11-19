# Todo List App

A simple React application that demonstrates the use of **state management** with the `useState` hook. The app allows users to toggle the visibility of a Todo List and dynamically render tasks from a dataset.

---

## Features

- Toggle the visibility of the Todo List using buttons.
- Dynamically render a list of tasks with titles, descriptions, and times.
- Uses the `useState` hook for state management to control the visibility of the Todo List.

---

## Technologies Used

- **React**: For building the user interface.
- **JavaScript (ES6)**: For application logic.
- **CSS**: For basic styling.

---

## How It Works

### 1. State Management

The app uses the `useState` hook to manage a boolean `isTodoListVisible`, which determines whether the Todo List is shown or hidden.

```javascript
const [isTodoListVisible, setIsTodoListVisible] = useState(false);
```

### 2. Conditional Rendering

A button is displayed when the Todo List is hidden (isTodoListVisible === false), allowing the user to show the list.
The Todo List is rendered with an <ol> element when isTodoListVisible === true, along with a button to hide the list.

```javascript
{
  !isTodoListVisible ? (
    <button onClick={() => setIsTodoListVisible(true)}>Show Todo List</button>
  ) : (
    <div>
      <h1>Todo List</h1>
      <ol>{/* List of tasks */}</ol>
      <button onClick={() => setIsTodoListVisible(false)}>
        Hide Todo List
      </button>
    </div>
  );
}
```

### 3. Dynamic List Rendering

The app maps through an array of task objects and renders each item using the ListItem component.

```javascript
const data = [
  { title: "Have Breakfast", description: "2 eggs on toast", time: "7am" },
  { title: "Cardio", description: "Jog 5km", time: "8am" },
  { title: "Start Work", description: "Log onto machine", time: "9am" },
];
```

# Components

### `App.jsx`

- The main component that manages the app's state and handles the rendering logic for the Todo List.

### `ListItem.jsx`

- A child component used to display individual items in the Todo List.
- **Props**:
  - `title` (string): The title of the task.
  - `description` (string): A short description of the task.
  - `time` (string): The time for the task.

---

# Key Concepts Covered

### **useState Hook**

- Managing state in functional components.
- Triggering UI updates by changing state.

### **Conditional Rendering**

- Using ternary operators and `&&` for dynamic UI changes.

### **Dynamic Rendering**

- Mapping through data to render lists in React.

---

# Resources

- [React Documentation - State](https://react.dev/learn/state-a-component-s-memory)
- [React Documentation - Conditional Rendering](https://react.dev/learn/conditional-rendering)
