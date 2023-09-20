
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';

const AdminHomeChart = ({info, reviewed, approved}) => {

    const data = [
      {  pending: info.length,
        reviewed:reviewed.length, 
        approved:approved.length
    }];
   
        return (
            <div className='mt-10 p-2 bg-white'>
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
                        <Bar dataKey="pending" fill="blue" />
                        <Bar dataKey="approved" fill="red" />
                        <Bar dataKey="reviewed" fill="orange" />
                    </BarChart>
                </ResponsiveContainer></div>
            </div>
        );
    };

export default AdminHomeChart
