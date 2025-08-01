import React from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
type AppProviderProps = {
    children: React.ReactNode
}

export const AppProviderProps = ({ children }: AppProviderProps) => {
    const [queryClient] = React.useState(
        () => new QueryClient({
            defaultOptions: 
        })
    )
    return (
        {children}
    )
}