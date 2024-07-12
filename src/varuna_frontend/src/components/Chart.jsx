import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = () => {
    const chartContainerRef = useRef(null);

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 300,
            layout: {
                textColor: '#000000', // Color del texto
                background: { type: 'solid', color: '#ffffff' }, // Color de fondo blanco
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: false,
            },
        });

        const areaSeries = chart.addAreaSeries({
            lineColor: '#2962FF',
            topColor: 'rgba(41, 98, 255, 0.56)',
            bottomColor: 'rgba(41, 98, 255, 0.04)',
        });

        const data = [
            { time: '2020-01-01', value: 30.50 },
            { time: '2020-02-01', value: 31.00 },
            { time: '2020-03-01', value: 32.10 },
            { time: '2021-01-01', value: 33.50 },
            { time: '2021-02-01', value: 34.00 },
            { time: '2021-03-01', value: 35.10 },
            { time: '2022-01-01', value: 36.50 },
            { time: '2022-02-01', value: 37.00 },
            { time: '2022-03-01', value: 38.10 },
        ];

        areaSeries.setData(data);

        chart.timeScale().fitContent();

        return () => {
            chart.remove();
        };
    }, []);

    return <div ref={chartContainerRef} style={{ position: 'relative', width: '100%', height: '300px' }} />;
};

export default Chart;