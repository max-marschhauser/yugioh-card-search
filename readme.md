-   add landing page

    -   maybe use react router

-   add deck page

    -   create and save deck (local storage)
    -   draw random hand
    -   add/remove cards to/from deck
    -   deck price and buy cards

-   database page

    -   add filters
    -   remove unneded cards
    -   style cards to look more like real life
    -   try add card images

-   useRef služi da bi se donijela referenca na html element, nešto poput querry selectora
-   uz element se stavi atribut ref={todoNameRef}
-   zatim se doda varijabla const todoNameRef = useRef();
-   elementu se pristupi s todoNameRef.current (ako je npr. input onda dodam još i .value)

local storage and useEffect
const LOCAL_STORAGE_KEY = "todoApp.todos"
useEffect(() => {
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)),
}, [todos])
useEffect(() =>
const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
if (storedTodos) setTodos(storedTodos)
}, [])
