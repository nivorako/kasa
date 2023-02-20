
import { useEffect, useState } from "react"

export default function Cards(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("..src/datas/housing.json")
            .then((res) => {
                if(!res.ok) {
                    throw new Error(`This is an HTTP error: The status is ${res.status}`)
                }
                console.log("actualData :", res.json())
                return res.json()
            })
            .then((actualData) => {
                console.log("actualData :", actualData)
                setData(actualData)
                setError(null)
            })
            .catch((err) => {
                setError(err.message)
                setData(null)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    return(
        <section className="cards" >
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <ul>
                {data &&
                data.map(({ id, title }) => (
                    <li key={id}>
                    <h3>{title}</h3>
                    </li>
                ))}
            </ul>
        </section>
    )
}