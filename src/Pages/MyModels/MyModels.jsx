import { use, useEffect, useState } from "react";
import { ModelCard } from "../../Components/ModelCard";
import { AuthContext } from "../../Context/AuthContext";

const MyModels = () => {
  const { user } = use(AuthContext);

  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://dragon-ball-server.vercel.app/my-models?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    ).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setModels(data);

        setLoading(false);
      });
    });
  }, []);

  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <div className="text-2xl text-center font-bold mt-25">My Models</div>
      <p className=" text-center mb-10 ">Explore 3d models.</p>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
          {models.map((model) => (
            <ModelCard key={model._id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyModels;
