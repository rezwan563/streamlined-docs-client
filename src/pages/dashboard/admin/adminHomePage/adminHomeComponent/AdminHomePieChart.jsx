import { PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const AdminHomePieChart = ({info, reviewed, approved}) => {
    const data = [
    { name: 'Pending', value: info.length },
    { name: 'Reviwed', value: reviewed.length },
    { name: 'Approved', value: approved.length }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
    return (
        <div className='bg-white mt-10 p-2'>
            <h1 className='text-2xl font-bold mt-2 mb-2'>Admin Pie Chart</h1>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                   
                </PieChart>
               
            </ResponsiveContainer>
            <div className='grid md:grid-cols-3 ml-10'>
                  <p className='text-[#0088FE]'>Pending </p>
                  <p className='text-[#00C49F]'>Reviwed</p>
                  <p className='text-[#FFBB28]'>Approved</p>
                </div>
        </div>
    );
};

export default AdminHomePieChart;