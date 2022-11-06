import React, {useState, useEffect} from "react"

const useTyping = (typedText) => {

    const [typing, setTyping] = useState('')

    useEffect(() => {
        const nextText = typedText[0].slice(
            0,
            typing.length + 1
        )

        if (nextText === typing) return

        const timeout = setTimeout(() => {
            setTyping(typedText[0].slice(0, typing.length + 1))
        },200)

        return () => clearTimeout(timeout)
    }, [typedText, typing])

    return typing
}

export default useTyping