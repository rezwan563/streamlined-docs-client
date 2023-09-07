
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';

const AdminHomeChart = () => {
    const data = [
        {
            name: 'Page A',
            Pending: 4000,
            Aproved: 240,
            Reviwed: 2400,
        },
        {
            name: 'Page B',
            Pending: 2000,
            Aproved: 3400,
            Reviwed: 400,
        },
        {
            name: 'Page C',
            Pending: 400,
            Aproved: 2000,
            Reviwed: 2400,
        },
        {
            name: 'Page D',
            Pending: 400,
            Aproved: 200,
            Reviwed: 2400,
        },
        {
            name: 'Page E',
            Pending: 5500,
            Aproved: 2400,
            Reviwed: 240,
        },
        {
            name: 'Page F',
            Pending: 400,
            Aproved: 400,
            Reviwed: 200,
        },
        {
            name: 'Page G',
            Pending: 3000,
            Aproved: 2400,
            Reviwed: 2900,
        },
    ];
    console.log(data);
        return (
            <div className='mt-10 bg-white'>
                <h1 className='text-2xl font-bold mt-2 mb-2'>Admin Bar Chart</h1>

                <div> <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Pending" fill="blue" />
                        <Bar dataKey="Aproved" fill="red" />
                        <Bar dataKey="Reviwed" fill="orange" />
                    </BarChart>
                </ResponsiveContainer></div>
            </div>
        );
    };

export default AdminHomeChart
