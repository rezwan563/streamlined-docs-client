
const DashboardSummary = () => {
    return (
        <div className=" w-3/4  mx-auto bg-white p-4 rounded-md">
        {/* ---- content goes here */}
        <p className="text-2xl font-bold cursor-default mb-4">Summary</p>
        <div className="flex flex-wrap justify-between">
          <div className=" bg-orange-300  w-52 h-28 rounded-md text-center">
            <p className="text-2xl p-2 font-bold">Applied</p>
            <p className="text-center text-4xl font-bold">0</p>
          </div>
          <div className=" bg-yellow-300  w-52 h-28 rounded-md text-center">
            <p className="text-2xl p-2 font-bold">Pending</p>
            <p className="text-center text-4xl font-bold">0</p>
          </div>
          <div className=" bg-blue-300  w-52 h-28 rounded-md text-center">
            <p className="text-2xl p-2 font-bold">Reviewed</p>
            <p className="text-center text-4xl font-bold">0</p>
          </div>
          <div className=" bg-green-300  w-52 h-28 rounded-md text-center">
            <p className="text-2xl p-2 font-bold">Completed</p>
            <p className="text-center text-4xl font-bold">0</p>
          </div>
        </div>
      </div>
    );
};

export default DashboardSummary;