import { useState, useEffect } from "react"

function App() {
  const [items, setItems] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    async function load() {
      const response = await fetch('data.json')
      const items = await response.json()
      setItems(items)
      setFiltered(items)
    }
    load()
  }, [])

  function filter(event) {
    setFiltered(items.filter(item => item.name.includes(event.target.value)))
  }

  /*
      function filter(event) {
          const search_text = event.target.value
          const new_list = items.filter(item => item.name.includes(search_text))
          setFiltered(new_list)
      }
   */

  return <>
    <search>
      <input type="text" onChange={filter} placeholder="Enter search here..." />
    </search>
    <ul>
      {filtered.map(item =>
        <li>
          <p>{item.name} - {item.brand}</p>
        </li>
      )}
    </ul>
  </>
}

export default App