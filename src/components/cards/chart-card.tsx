import {ReactNode} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

interface ChartCardProps{
    title: string;
    description: string;
    content:ReactNode;
    footer:ReactNode;
}
function ChartCard({title, description, content,footer}: ChartCardProps) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                {content}
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                {footer}
            </CardFooter>
        </Card>
    );
}
export default ChartCard;