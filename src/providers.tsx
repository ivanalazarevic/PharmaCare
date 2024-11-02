import {ThemeProvider} from "@/components/theme/theme-provider.tsx";

export const Providers = ({children}) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}