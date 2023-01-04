import { Link, useLocation } from "react-router-dom";

const Solo = () => {
  const location = useLocation();
  console.log(location);
  //   const { comedian } = location.state;
  //   console.log(comedian);

  return (
    <>
      <Link to={"/comedians"}>Back</Link>
      <h3>Cute dog</h3>
      <img src={"https://picsum.photos/id/237/536/354"} alt="" />
    </>
  );
};

export default Solo;
