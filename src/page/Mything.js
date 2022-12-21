import { Link } from "react-router-dom"
import meme from "../meme"

export default function Mything() {
    const memesArray = meme.data.memes
    return (
      <div >
      <h1>My thing</h1>
      <div>
      {memesArray.map((meme) => {
          return (
            <article key={meme.id}>
              <h5>{meme.name}</h5>
              <Link to={`/mything/${meme.id}`}> See MEME ???</Link>
            </article>
          );
        })}
      </div>
      </div>
    )
}