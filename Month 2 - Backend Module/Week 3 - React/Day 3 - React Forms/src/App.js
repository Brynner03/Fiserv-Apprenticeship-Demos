// 3. Import useState using object destructuring
// Step 1 
import { useState } from "react";
import ListItem from "./components/ListItem.jsx";
import "./App.css";

function App() {
  // 4. Declare boolean state for showing/hiding todo list

  // Step 2
  const [isTodoListVisible, setIsTodoListVisible] = useState(false);

  const data = [
    {
      title: "Have Breakfast",
      description: "2 eggs on toast",
      time: "7am",
    },
    {
      title: "Cardio",
      description: "Jog 5km",
      time: "8am",
    },
    {
      title: "Start Work",
      description: "Log onto machine and open all relevant software",
      time: "9am",
    },
  ];

  return (
    <div className="App">
      {/* 8. Wrap first button in conditional rending with !boolean state and Ternary operator (?) Have a title pop up when the button isn't rendered. */}

      {/* Step 3 */}
      {/* When toDoList is set to false, render a button, to turn it to true. */}
      {!isTodoListVisible ? (
        
        // 6. Create button that will change boolean state to true
        <button onClick={() => setIsTodoListVisible(true)}>
          Show Todo List
        </button>
      ) : (
        <div>
          <h1>Todo List</h1>
          <ol>
          {data.map((itemObj, index) => (
            <ListItem
            // help React update the specific component.
              key={index}
              title={itemObj.title}
              description={itemObj.description}
              time={itemObj.time}
            />
          ))}
          {/* 7. Create button in ol that will change boolean state to false */}
          <button onClick={() => setIsTodoListVisible(false)}>
            Hide Todo List
          </button>
        </ol>
        </div>
      )}
    </div>
  );
}

export default App;