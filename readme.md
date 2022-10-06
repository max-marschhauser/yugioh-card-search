-   database page

    -   style cards to look more like real life

-   add deck page

    -   create and save deck (local storage)
    -   draw random hand
    -   add/remove cards to/from deck
    -   deck price and buy cards

local storage and useEffect
const LOCAL_STORAGE_KEY = "todoApp.todos"
useEffect(() => {
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)),
}, [todos])
useEffect(() =>
const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
if (storedTodos) setTodos(storedTodos)
}, [])
