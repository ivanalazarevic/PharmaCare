import {ReactNode} from "react";
import {AppSidebar} from "@/components/sidebar/app-sidebar";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {cn} from "@/lib/utils";

function Layout({children}:{children:ReactNode}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className={cn('flex flex-row gap-2 w-full py-3 pr-3')}>
                <SidebarTrigger/>
                {children}
            </main>
        </SidebarProvider>
    );
}

export default Layout;