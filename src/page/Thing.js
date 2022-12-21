import { Link, useParams } from 'react-router-dom';
import mememer from "../meme"


export default function Thing() {
    const memesArray = mememer.data.memes
    const { memesId } = useParams();
    const meme = memesArray.find((mymeme) => mymeme.id === memesId);
    return (
        <section className='section product'>
          <h5>{meme.name}</h5>
          <img src={meme.url} alt={meme.name} height={meme.height} width={meme.width} />
          <h5>{meme.name}</h5>
          <Link to='/mything'>back to My Thing</Link>
        </section>
      );
}