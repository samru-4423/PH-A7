'use client'
import { Pie, PieChart } from "recharts";


function Stats() {
    const data = [
        { name: 'Group A', value: 400, fill: "#0088FE" },
        { name: 'Group B', value: 300, fill: "#00C49F" },
        { name: 'Group C', value: 300, fill: "#FFBB28" },
        { name: 'Group D', value: 200, fill: "#FF8042" },
    ];
    return (
        <div>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true} />
                
            </PieChart>
        </div>
    );
}

export default Stats;