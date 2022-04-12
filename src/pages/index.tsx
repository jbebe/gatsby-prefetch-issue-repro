import { Link } from "gatsby"
import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <ul>
        {['a', 'b', 'c'].map(x => <li><Link to={'/' + x}>{x}</Link></li>)}
      </ul>
    </main>
  )
}

export default IndexPage
