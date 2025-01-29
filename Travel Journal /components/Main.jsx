import data from "../data"
import Entry from "./Entry"
export default function Main(){
    const entryArr = data.map(el => <Entry key={el.id} {...el} />)
    return(
        <main>
            {entryArr}
        </main>
    )
}