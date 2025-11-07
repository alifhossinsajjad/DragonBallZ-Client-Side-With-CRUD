import { useState } from "react";
import { useLoaderData } from "react-router";
import { ModelCard } from "../../Components/ModelCard";

const AllModel = () => {
  const data = useLoaderData();
  console.log(data);

  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handdleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setLoading(true);
    console.log(search);
    fetch(`https://dragon-ball-server.vercel.app/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setSearchData(data);
        setLoading(false);
      });
  };

  return (
    <div className="mt-25">
      <div className="text-2xl text-center font-bold">All Models</div>
      <p className=" text-center mb-10 ">Explore 3d models.</p>

      <div>
        <form
          onSubmit={handdleSearch}
          className="flex justify-center my-10 gap-3"
        >
          <label className="input rounded-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button className="btn btn-secondary rounded-full">
            {loading ? "searching..." : "search"}
          </button>
        </form>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
          {searchData.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllModel;
