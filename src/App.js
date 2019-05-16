import React, { useEffect } from 'react';
import useTabs from "./Components/useTabs";

const content = [
  {
    tab: "Section 1",
    content: "I'm the section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the section 2"
  },
  {
    tab: "Section 3",
    content: "I'm the section 3"
  },
  {
    tab: "Section 4",
    content: "I'm the section 4"
  }
];

function App() {

  const { currentItem, changeItem } = useTabs(0, content);

  const sayHello = () => console.log("hello");

  useEffect(() => {
    sayHello();
  }, []);

  return (
      <div className="App">
        {
          content.map((section, idx) =>(
              <button key={section.tab} onClick={() => changeItem(idx)}>{section.tab}</button>
          ))
        }
        <div>{currentItem.content}</div>
      </div>
  );
}

export default App;
