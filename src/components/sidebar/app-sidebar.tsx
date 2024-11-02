import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import './app-sidebar.scss'
import {ChartPie, HeartPulse, Info, Pill} from "lucide-react";
import {NavLink} from "react-router-dom";
import {cn} from "@/lib/utils";


export function AppSidebar() {
    const sidebarItems = [
        {url: '/', name: 'Products', icon: Pill},
        {url: '/stats', name: 'Statistics', icon: ChartPie},
        {url: '/about', name: 'About application', icon: Info},
    ];
    const title = 'PharmaCare'

    return (
        <Sidebar collapsible={'icon'}>
            <Header/>
            <Content>
                {sidebarItems.map((item) => (
                    <AppSidebarItem key={item.name}
                                    item={item}/>
                ))}
            </Content>
        </Sidebar>
    )
}

interface SidebarItem {
    url: string;
    name: string;
    icon: React.ComponentType;
}

interface AppSidebarItemProps {
    item: SidebarItem;
}

export const Header = () => {
    return (
        <SidebarHeader>
            <SidebarMenu >
                <SidebarMenuItem>
                    <SidebarMenuButton asChild className={'sidebar-header'}>
                        <div>
                            <HeartPulse />
                            <span className={cn('text-3xl font-bold text-accent-foreground')}>
                                {'PharmaCare'}
                            </span>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
    )
}
export const Content = ({children}) => {
    return (
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {children}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    )
}

export function AppSidebarItem({item}: AppSidebarItemProps) {

    return (
        <SidebarMenuItem className={'sidebar-item'}>
            <SidebarMenuButton  className={'sidebar-item-button'} asChild>
                <NavLink to={item.url}>
                    <item.icon/>
                    <span className={cn('text-xl text-accent-foreground')}>{item.name}</span>
                </NavLink>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}