import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart";
import {Bar, BarChart, CartesianGrid, Rectangle, XAxis, YAxis} from "recharts";
import ChartCard from "@/components/cards/chart-card";
import {ChartColumnDecreasing} from "lucide-react";
import {cn} from "@/lib/utils";

interface BarDisplayChartProps {
    chartConfig: ChartConfig,
    chartData: any[],
    title: string,
    description?: string,
    footer: string

}

function BarDisplayChart({chartConfig, chartData,title,description,footer}: BarDisplayChartProps) {

    return (
        <ChartCard title={title}
                   description={description}
                   content={<BarChartBody chartData={chartData}
                                          chartConfig={chartConfig}
                   />}
                   footer={
                       <div className={cn('flex items-center gap-2 leading-none text-muted-foreground')}>
                           {footer}
                           <ChartColumnDecreasing className={cn('h-4 w-4')}/>
                       </div>
                   }
        />
    );
}

interface BarChartBodyProps {
    chartConfig: ChartConfig,
    chartData: any[]
}

export const BarChartBody = ({chartConfig, chartData}: BarChartBodyProps) => {
    return (
        <ChartContainer config={chartConfig}
        >
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey='label'
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 10)}
                />
                <YAxis
                    dataKey='value'
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <ChartLegend content={<ChartLegendContent nameKey={'name'}/>}/>
                    <Bar
                        dataKey='value'
                        strokeWidth={2}
                        radius={8}
                        activeBar={({ ...props }) => {
                            return (
                                <Rectangle
                                    {...props}
                                    fillOpacity={0.8}
                                    stroke={props.payload.fill}
                                    strokeDasharray={4}
                                    strokeDashoffset={4}
                                />
                            )
                        }}
                    />
                ))

            </BarChart>
        </ChartContainer>
    )
}
export default BarDisplayChart;


