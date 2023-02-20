
import { useEffect, useState } from "react"

export default function Cards(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // async function fetchData(){
    //     const res = await fetch("../../public/data/housing.json")
    //     const data = await res.json()
    //     setData(data)
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    useEffect(() => {
        fetch("./data/housing.json")
            .then((res) => {
                if(!res.ok) {
                    throw new Error(`This is an HTTP error: The status is ${res.status}`)
                }
                const response = res.json()
                return response
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
            <ul className="cards__items">
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