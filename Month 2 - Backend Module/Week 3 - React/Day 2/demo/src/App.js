import { useState } from "react"
import ListItem from "./components/ListItem.jsx";
import "./App.css";

function App() {

  // State to track whether the todo list is visible or not
  const [isTodoListVisible, setIsTodoListVisible] = useState(false)


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
      {/* If isTodoListVisible is false, show the button to display the todo list */}
      {!isTodoListVisible ? (
        <button onClick={() => {setIsTodoListVisible(true)}}>Show Todo List</button>
      ): (
        // If isTodoListVisible is true, display the todo list and the hide button
        <div>
          <h1>Todo List</h1>
          <ol>
            {data.map((itemObj, index) => (
              <ListItem
              // Key helps React track items in the list
              key={index}
              title={itemObj.title}
              description={itemObj.description}
              time={itemObj.time}
              />
            ))}
          </ol>
          <button onClick={() => {setIsTodoListVisible(false)}}> Hide Todo List</button>
        </div>
      )}
    </div>
  );
}

export default App;