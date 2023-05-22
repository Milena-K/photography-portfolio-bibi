import { createContext, ReactNode, useEffect, useState } from "react";


export const Context = createContext<FileInfo[]>()

const ContextProvider = ({ children }: { children: ReactNode }) => {

    return (
        <Context.Provider value={[]}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider


