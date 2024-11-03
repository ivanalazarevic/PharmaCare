import {cn} from "@/lib/utils";
import PieDisplayChart from "@/components/charts/pie-display-chart";
import BarDisplayChart from "@/components/charts/bar-display-chart";
import {useSelector} from "react-redux";
import {selectProductCountByManufacturer, selectTopAndBottomProducts} from "@/store/products.slice";
import {ChartConfig} from "@/components/ui/chart";
import {useEffect, useState} from "react";
import {colorGenerator} from "@/core/utils/colorGenerator";

export type ChartData = {
    label: string,
    value: number,
    fill: string,
}

function Statistics() {
    const products = useSelector(selectTopAndBottomProducts)
    const manufacturersProductCount = useSelector(selectProductCountByManufacturer)
    const [barChartData,setBarChartData] = useState<ChartData[]>([])
    const [barChartConfig, setBarChartConfig] = useState<ChartConfig>()
    const [pieChartConfig, setPieChartConfig] = useState<ChartConfig>()
    const [pieChartData,setPieChartData] = useState<ChartData[]>([])
    useEffect(() => {
        if (products) {
            setBarChartData(mapToChartData(products));
            setBarChartConfig(getChartConfig(products))

        }
    }, [products]);

    useEffect(()=>{
        if(manufacturersProductCount){
            setPieChartData(mapToChartData(manufacturersProductCount));
            setPieChartConfig(getChartConfig(manufacturersProductCount))
        }
    },[manufacturersProductCount])

    const mapToChartData = (list: { label: string; value: number }[]): ChartData[] => {
        return list.map((item) => ({
           ...item,
            fill: `var(--color-${item.label.replace(/\s+/g, '-').toLowerCase()})`

        }))};

    function getChartConfig(list: { label: string; value: number }[]): ChartConfig {
        return list.reduce((config, item) => {
            const key = item.label.replace(/\s+/g, '-').toLowerCase();
            config[key] = {
                label: item.label,
                color: `${colorGenerator()}`,
            };
            return config;
        }, {} as ChartConfig);
    }

if(!barChartData || !barChartConfig || !pieChartConfig || !pieChartData)
    return (<div>Wait up</div>)

    return (
        <div className={cn('flex flex-col w-full gap-5')}>
            <div className={cn('flex flex-row justify-between')}>
                <h1 className={cn('text-4xl font-bold')}>{'Statistics'}</h1>
            </div>
            <div className={cn('flex flex-col gap-3 justify-center w-full px-9')}>
                <BarDisplayChart chartConfig={barChartConfig}
                                 title={'Price of medicine'}
                                 footer={'Top 5 most expensive and top 5 least expensive products'}
                                 chartData={barChartData}
                />
                <PieDisplayChart chartData={pieChartData}
                                 chartConfig={pieChartConfig}
                                 footer={'Manufacturer product count'}
                                 title={'Manufacturer-wise Product Distribution'}/>
            </div>
        </div>
    );
}

export default Statistics;