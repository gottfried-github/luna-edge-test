import { createContext, Dispatch } from 'react'

export const ErrorContext = createContext<Dispatch<unknown>>(() => {})
