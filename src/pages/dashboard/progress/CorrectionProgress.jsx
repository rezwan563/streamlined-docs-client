import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import usePending from "../../../hooks/usePending";
import useApproved from "../../../hooks/useApproved";
import useReview from "../../../hooks/useReview";

const CorrectionProgress = () => {
    const [progress, setProgress] = useState('Not Applied'); // Default state
    //const { user } = useContext(AuthContext);
    const [Pending] = usePending();
    const [Approve] = useApproved();
    const [Review] = useReview();  
 //console.log(Pending);
    useEffect(() => {
        // Check if the user's email is in any of the JSON files
        if (Pending) {
            setProgress('Applied');
        }
        if (Review) {
          setProgress('Reviewed');
        } 
        if (Approve) {
            setProgress('Approved');
        } 
     
    }, []);


    return (
        <div>
           
            <ProgressBar progress={progress} />


        </div>
    );
};

const ProgressBar = ({ progress }) => {
    // Determine the width of the progress bar based on the progress step
    let progressBarWidth = '0%';

    switch (progress) {
        case 'Applied':
            progressBarWidth = '33%';
            break;
        case 'Reviewed':
            progressBarWidth = '66%';
            break;
        case 'Approved':
            progressBarWidth = '100%';
            break;
        default :
            progressBarWidth = '100%';
    }

    return (
        <>
               <h1 className="text-center text-4xl font-bold mb-10">Check Your NID Correction Progress</h1>
            <div className="mb-6 h-8 w-full border shadow-md bg-white dark:bg-neutral-600">
              { progress ==='Not Applied'? (  <div className="px-2 py-1  shadow-md font-bold bg-white"  style={{ width: progressBarWidth }}>{progress} </div>)
             : (  <div className="px-2 py-1  shadow-md text-white font-bold bg-green-500"  style={{ width: progressBarWidth }}>{progress} </div>)
    }
            </div>
            <div className="flex justify-between items-center ">
                 <p className="font-bold ">Applied </p>
                 <p className="font-bold ">Reviewed</p>
                 <p className="font-bold ">Approved</p>
            </div>
        </>
    );
};
export default CorrectionProgress;