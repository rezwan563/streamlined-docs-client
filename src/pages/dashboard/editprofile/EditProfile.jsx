import AddressInfo from "../../../shared/addressinfo/AddressInfo";
import IdentificationInfo from "../../../shared/identificationinfo/IdentificationInfo";
import PersonalInformation from "../../../shared/personalinfo/PersonalInformation";
const EditProfile = () => {
  return (
    <div>
      <div
        className="bg-white w-full md:max-w-5xl 
      md:mx-auto rounded-md md:p-12 px-4"
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
        <div className="py-2 my-8 border-b-2 border-blue-700">
          <p className="font-bold text-base">Address Information</p>
        </div>
        <AddressInfo />
        <div className="flex items-center justify-between pt-4">
          <input type="file" name="profile-picture" id="" />
          <button className="bg-blue-700 px-4 py-2 mt-4 text-end rounded-md text-white font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
