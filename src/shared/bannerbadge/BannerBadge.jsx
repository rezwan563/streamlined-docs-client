const BannerBadge = () => {
  return (
    <div className="w-fit cursor-pointer">
      <div className="bg-red-200 px-2 rounded-full flex">
        <div className="bg-red-500 text-slate-100 font-semibold px-1 rounded-xl mr-1">
          <p>New</p>
        </div>
        <span className="text-red-800 font-medium">
          More fast application correction
        </span>
      </div>
    </div>
  );
};

export default BannerBadge;
