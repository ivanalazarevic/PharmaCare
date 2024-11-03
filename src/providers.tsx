import {ThemeProvider} from "@/components/theme/theme-provider";

export const Providers = ({children}) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}