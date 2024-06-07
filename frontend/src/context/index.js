import React, { useState } from 'react'

import { createContext } from 'react'

export const dayContext = createContext({
    completedDays: [],
    setDaycompleted: () => { },
    setDayNotcompleted: () => { }
})
export default function ContextProvider({ children }) {
    const [completedDays, setcompletedDays] = useState([])

    const setDaycompleted = (day) => {
        if (completedDays.includes(day))
            return
        setcompletedDays([...completedDays, day])

    }


    const setDayNotcompleted = (day) => {
        console.log("it works")

        const newDays = completedDays.filter(function (item) {
            return item !== day;
        });
        setcompletedDays([...newDays])
        console.log(newDays)
        console.log(completedDays)
        // if (completedDays.includes(day)) {
        //     const index = completedDays.indexOf(day)
        //     console.log(index)
        //     setcompletedDays(completedDays.splice(index, 1))
        //     // console.log("after delete ",completedDays)
        // }

    }


    let value = {
        completedDays: completedDays,
        setDaycompleted,
        setDayNotcompleted

    }
    return (
        <>
            <dayContext.Provider value={value}>
                {children}
            </dayContext.Provider>
        </>
    )
}
