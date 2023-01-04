import { useEffect, useState } from "react";
import ComediansList from "./ComedianList";

const Comedians = () => {
  const [json, setJson] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3001/comedians");
      const data = await res.json();
      setJson(data);
    };
    getData();
  }, []);

  const handleDelete = (id) => {
    const getData = async () => {
      await fetch(`http://localhost:3001/comedians/${id}`, {
        method: "DELETE",
      }).then(() => {
        window.location.reload(true);
      });
    };
    getData();
  };

  return (
    <div>
      <div>{<ComediansList json={json} handleDelete={handleDelete} />}</div>
    </div>
  );
};

export default Comedians;
