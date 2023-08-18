import { useState } from "react";
import "./DocumentProgress.css";
import { TiTick } from "react-icons/ti";
const DocumentProgress = () => {
    const steps = ["Applied", "In Progress", "Reviewing", "Completed"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mb-10">Please Complete Your Correction Progress</h1>
            <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="btn bg-green-500 w-[70px] p-2 rounded font-bold mt-5"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
            
        </div>
    );
};

export default DocumentProgress;