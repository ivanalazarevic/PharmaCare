import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {Pie, PieChart} from "recharts";
import {ChartPie} from "lucide-react";
import ChartCard from "@/components/cards/chart-card";
import {cn} from "@/lib/utils";
interface BarDisplayChartProps {
    chartConfig: ChartConfig,
    chartData: any[],
    title: string,
    description?: string,
    footer: string

}
function PieDisplayChart({chartConfig, chartData,title,description,footer}: BarDisplayChartProps) {
    console.log(chartConfig)
    console.log(chartData)
    return (
        <ChartCard title={title}
                   description={description}
                   content={<PieChartBody chartData={chartData}
                                          chartConfig={chartConfig}
                   />}
                   footer={
                       <div className={cn('flex items-center gap-2 leading-none text-muted-foreground')}>
                           {footer}
                           <ChartPie className={cn('h-4 w-4')}/>
                       </div>
                }
        />
    )
}
interface PieChartBodyProps{
    chartConfig: ChartConfig,
    chartData: any[]
}
export const PieChartBody=({chartConfig,chartData}: PieChartBodyProps)=>{
    return(
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-96 pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
            <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel/>}/>
                <Pie data={chartData} dataKey="value" label nameKey="label"/>
            </PieChart>
        </ChartContainer>
    )
}
export default PieDisplayChart;