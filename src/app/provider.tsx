import React from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryConfig } from "@/lib/react-query";
import BaseSpinner from "@/components/ui/spinner";
import { ErrorBoundary } from 'react-error-boundary';
import MainErrorFallback from "@/components/errors/main";
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


type AppProviderProps = {
    children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [queryClient] = React.useState(
        () => new QueryClient({
            defaultOptions: queryConfig
        }),
    )
    return (
        <React.Suspense
            fallback={
                <div className="flex h-screen w-screen items-center justify-center">
                    <BaseSpinner size="xl" />
                </div>
            }
        >
            <ErrorBoundary FallbackComponent={MainErrorFallback} >
                <HelmetProvider>
                    <QueryClientProvider client={queryClient}>
                        {import.meta.env.DEV && <ReactQueryDevtools />}
                        {children}
                    </QueryClientProvider>
                </HelmetProvider>
            </ErrorBoundary>
        </React.Suspense>
    )
}