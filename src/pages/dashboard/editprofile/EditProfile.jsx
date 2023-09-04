import IdentificationInfo from "../../../shared/identificationinfo/IdentificationInfo";
import PersonalInformation from "../../../shared/personalinfo/PersonalInformation";
import "./EditProfile.css";
const EditProfile = () => {
  return (
    <div>
      <div
        className="bg-white 
      lg:max-w-5xl rounded-md p-4"
      >
        <div>
          <p className="text-2xl font-bold">
            Please fill up your profile information
          </p>
        </div>
        <PersonalInformation />
        <div className="py-2 my-8 border-b-2 border-blue-700">
          <p className=" font-bold text-base">Identification Information</p>
        </div>
        <IdentificationInfo />
      </div>
    </div>
  );
};

export default EditProfile;
