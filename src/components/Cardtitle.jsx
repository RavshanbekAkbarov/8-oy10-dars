
function Cardtitle({
  name,
  logo,
  position,
  location,
  postedAt,
  contract,
  tavsiya,
  holat,
  texnologiyalar,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white w-full md:w-[750px] lg:w-[1120px] mx-auto my-5 shadow-lg rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 border-l-4 border-teal-500 relative cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      <img
        src={logo}
        className="w-16 h-16 rounded-full object-cover"
        alt="Company Logo"
      />

      <div className="flex flex-col flex-grow text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <span className="text-teal-600 font-semibold text-lg">{name}</span>

          {holat && (
            <span className="bg-teal-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {holat}
            </span>
          )}

          {tavsiya && (
            <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full">
              {tavsiya}
            </span>
          )}
        </div>

        <h2 className="text-xl font-bold text-gray-800 mt-1">{position}</h2>
        <p className="text-gray-500 text-sm mt-1">
          {postedAt} * {contract} * {location}
        </p>

        <div className="w-full h-0.5 bg-gray-300 mt-2 md:hidden"></div>
      </div>

      {/* API dan kelgan texnologiyalarni chiqarish */}
      <div className="flex flex-wrap space-x-2">
        {texnologiyalar.map((tag) => (
          <span className="bg-teal-100 text-teal-600 px-3 py-1 text-sm rounded-md font-medium mb-2 md:mb-0">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Cardtitle;
