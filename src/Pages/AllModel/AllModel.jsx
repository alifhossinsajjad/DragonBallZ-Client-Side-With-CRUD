import React from "react";
import { useLoaderData } from "react-router";
import { ModelCard } from "../../Components/ModelCard";

const AllModel = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="text-2xl text-center font-bold">All Models</div>
      <p className=" text-center mb-10 ">Explore 3d models.</p>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
          {data.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllModel;
