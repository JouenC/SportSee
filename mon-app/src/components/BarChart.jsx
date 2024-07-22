// react
import { useState,useEffect } from 'react';
import { useParams } from 'react-router';

// graph
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip, ResponsiveContainer} from "recharts";

// datas
import getData from '../data/getData'

// component
import ActivityTool from './ActivityTool';

/**
 * Render a BarChart with user activity Data
 */

function BarCharts() {
    const [data, setData] = useState(null);
	const {id} = useParams();

    useEffect(() => {
		const fetchData = async () => {
            const request = await getData("USER_ACTIVITY",id);
			if (!request) return alert('data error');
			setData(request.data.sessions);
		};
		fetchData();
	}, [id]);
    
	if (!data) return null;
    
	//format data.day
	for (let i = 0 ; i < data.length ; i ++)
        {data[i].day = i + 1;}
    
    return (  
        <div>
            <div>
                <div>Activité quotidienne</div>
                <div>
					<div>
						<div color='#282D30' />
						<div>Poids (kg)</div>
					</div>
					<div>
						<div color='#E60000' />
						<div>Calories brûlées (kCal)</div>
					</div>
				</div>
            </div>
            <ResponsiveContainer  height={200} >
                <BarChart data={data} barGap={8} barCategoryGap={1}>
                    <CartesianGrid vertical={false} strokeDasharray="1 1"/>
                    <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14}} dy={15} stroke="1 1"/>
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15}/>
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
                    <Tooltip content={<ActivityTool/>}/>
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarCharts;