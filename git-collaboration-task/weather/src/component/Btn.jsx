import React from 'react'

const Btn = () => {
    const [weather, setweather] = useState(0)
    useEffect(() => {
        console.log("today is sunny day")
    }, [])

    useEffect(() => {
        console.log("today is rainy day")
    }, [])

    useEffect(() => { 
        console.log("today is combine day")
     }, [])

    return (
        <>
            <div>
                <Botton> Display Weather </Botton>
            </div>
        </>
    )
}

export default Btn