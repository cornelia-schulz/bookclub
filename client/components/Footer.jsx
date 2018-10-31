import { useState } from 'react'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <footer>
      <p>Cornelia Schulz 2018</p>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </footer>
  )
}

export default Footer