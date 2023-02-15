import { useState, useEffect } from "react"

export default function HelloWorld({search = 42}) {
    console.log("dffsd", search);
    const [h1Text, setH1Text] = useState("Milo Mannaro")
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(prev => prev+1)
        console.log(count);
    }, [h1Text])

    useEffect(() => {
        setCount(prev => prev+1)
        console.log("primoMount", count);
    }, [])


    return <h1 onClick={() => {setH1Text(prev => prev === "mimmo" ? "Milo Mannaro" : "mimmo")}} style={{color: "white"}}>Hello {h1Text}</h1>
}