input type="search"

submit --> e.preventDefault() --> znači da forma neće refreshati stranicu

setItems((prev) => {return [...prev, value]}) --> stavlja novi value na kraj arraya iz useState hooka

const filteredItems = useMemo(() => {
return items.filter(item => {
return item.toLowerCase().includes(query.toLowerCase())
})
}, [items, query])
--> useMemo znači da će se ovaj kod obaviti samo ako se promjeni state od items ili query (korisno kad stranica ima puno stateova koji ne ovise jedan o drugome, da se rjeđe mora ponovno provoditi kod koji usporava)
