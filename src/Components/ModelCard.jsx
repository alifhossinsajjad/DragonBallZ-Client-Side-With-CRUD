import { Link } from "react-router";

export const ModelCard = ({ model }) => {
  const { name, thumbnail, category, description, _id } = model;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.3)] transition-all duration-700 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Soft gradient bottom to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-all duration-700"></div>
      </div>

      {/* Floating content box */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:bg-white/30">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-500 transition-all duration-500">
              {name}
            </h2>
            <span className="px-3 py-1 text-[11px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium">
              {category}
            </span>
          </div>

          <p className="text-sm text-gray-200 line-clamp-2">{description}</p>

          <div className="mt-4">
            <Link
              to={`/model-details/${_id}`}
              className="inline-flex items-center justify-center w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium py-2 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,0,100,0.5)] hover:scale-[1.03]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>

      {/* Highlight light reflection effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-all duration-700 bg-[radial-gradient(circle_at_30%_30%,white,transparent_70%)]" />
    </div>
  );
};
