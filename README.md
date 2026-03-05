## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-02

---

# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements

### ✅ Navbar

- Website name/logo on the **left**.
- Menu items and **New Ticket** button on the **right**.

### ✅ Banner

- Banner section designed according to Figma.
- Shows a **linear gradient** background.
- Displays ticket statistics:
  - **In Progress Count**
  - **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **
   - Created **10–15 tickets** with the following properties:
     - `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**
   - Display all ticket information in a **card layout**.
   - Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**
   - Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   - Task Status shows:
     - Ticket Title
     - **Complete Button**

   - Clicking **Complete Button**:
     - show alert

### ✅ Footer

- Designed according to Figma.

### ✅ Responsiveness

- The entire website is **responsive** for mobile devices.

### ✅ Readme:

Create a README file to answer the following question-

- What is JSX, and why is it used?
- What is the difference between State and Props?
- What is the useState hook, and how does it work?
- How can you share state between components in React?
- How is event handling done in React?

#### **Answers:**

**1. What is JSX, and why is it used?**

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React code more readable and intuitive by enabling developers to describe UI structure in a declarative way.

**Why is it used?**

- **Declarative Syntax:** JSX makes it easier to visualize the UI structure.
- **JavaScript Integration:** You can embed JavaScript expressions directly inside JSX using curly braces `{}`.
- **Component-Based:** JSX works seamlessly with React's component architecture.
- **Compiled to JavaScript:** JSX is transformed into `React.createElement()` calls by tools like Babel.

**Example:**

```jsx
const element = <h1>Hello, {name}!</h1>;
```

---

**2. What is the difference between State and Props?**

| Feature        | State                                                   | Props                                              |
| -------------- | ------------------------------------------------------- | -------------------------------------------------- |
| **Definition** | Internal data managed by the component                  | Data passed from parent to child component         |
| **Mutability** | Mutable (can be changed using `setState` or `useState`) | Immutable (read-only)                              |
| **Ownership**  | Owned and managed by the component itself               | Owned by the parent component                      |
| **Purpose**    | To manage dynamic data within a component               | To pass data and event handlers between components |

**Example:**

```jsx
// Props
<ChildComponent name="John" />;

// State
const [count, setCount] = useState(0);
```

---

**3. What is the useState hook, and how does it work?**

`useState` is a React Hook that allows functional components to manage state. It returns an array with two elements:

1. The current state value
2. A function to update the state

**Syntax:**

```jsx
const [state, setState] = useState(initialValue);
```

**How it works:**

- When you call `setState`, React re-renders the component with the updated state.
- The state persists between re-renders.

**Example:**

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

**4. How can you share state between components in React?**

There are several ways to share state between components:

**a) Lifting State Up:**
Move the state to the closest common parent component and pass it down as props.

```jsx
function Parent() {
  const [data, setData] = useState("");
  return (
    <>
      <ChildA data={data} setData={setData} />
      <ChildB data={data} />
    </>
  );
}
```

**b) Context API:**
Create a context to share state across multiple components without prop drilling.

```jsx
const MyContext = React.createContext();

function Parent() {
  const [data, setData] = useState("");
  return (
    <MyContext.Provider value={{ data, setData }}>
      <ChildA />
      <ChildB />
    </MyContext.Provider>
  );
}
```

**c) Custom Hooks:**
Create reusable hooks to share stateful logic across components.

**d) State Management Libraries:**
Use libraries like Redux, Zustand, or Recoil for complex state management.

---

**5. How is event handling done in React?**

In React, event handling is done using camelCase naming conventions and passing functions as event handlers.

**Key Points:**

- Use camelCase (e.g., `onClick`, `onChange`)
- Pass a function reference, not a function call
- Event handlers receive a synthetic event object

**Example:**

```jsx
function Button() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

**Passing Arguments:**

```jsx
<button onClick={() => handleClick(id)}>Delete</button>
```

**Common Events:**

- `onClick` - Mouse click
- `onChange` - Input value change
- `onSubmit` - Form submission
- `onKeyDown` - Keyboard key press

---

## 📌 Challenge Requirements

### 🔔 React-Toastify

- Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic

Clicking **Complete Button**:

1. It is **removed from Task Status**.
2. It is added to the **Resolved List**.
3. The **In Progress count decreases**.
4. The **Resolved count increases**.
5. It is removed from the **Customer Tickets list**.

## 🧰 Required Technology Stack

- **HTML**
- **CSS** (Vanilla / Tailwind / DaisyUI)
- **JavaScript**
- **React.js** (Mandatory)

> ⚠️ **Important:** The project must be built using **React.js**. Other frameworks such as Vue are not permitted.

---

## 📌 Project Rules

- ✅ At least **5 meaningful commits** are required.
- ❌ Do not use dummy text where real data can be displayed.

---

## 🔗 Submission

**Live Link :** YOUR_DEPLOYED_URL_HERE

**GitHub Repository:** YOUR_REPO_URL_HERE

### 📅 Deadline For 60 marks: 5th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks: 6th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 30 marks: Until the next assignment is published.

---
