Coontexts

The contexts folder is a bare minimum folder only containing the state 
which has to be shared across these components. 
Each page can have several nested contexts, 
with each context only passing the data forward in a downward direction. 
But to avoid complexity, it is best to only have a single context file.

Ref: https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/


Using context, we can avoid passing props through intermediate elements


[Simple Context]
ตัวอย่างที่ง่ายที่สุดในการใช้งาน context
โดยที่ context ที่ส่งออกไปนั้นจะเป็น { state, setState }
ทำให้ component ผ่านนอกสามารถเข้าถึง และแก้ไข state ได้อย่างอิสระ

//---------------------------
// MenuContext.js
//---------------------------
import React, { createContext, useState } from "react"

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [active, setActive] = useState(true);
  return (
    <MenuContext.Provider value={{active,setActive}}>
      {children}
    </MenuContext.Provider>
  );
};

//---------------------------
// App.js
//---------------------------

const App = () => {
    return (
      <MenuProvider>
        <Menu />
      </MenuProvider>
  );
}

//---------------------------
// Menu.js
//---------------------------

const {active, setActive} = useContext(MenuContext)

const clickHandler = () => {
    setActive(!active);
}

<div className={(active ? `open` : `close`)} onClick={clickHandler}></div>