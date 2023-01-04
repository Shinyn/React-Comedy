import Card from "./Card";

const ComediansList = ({ json, handleDelete }) => {
  return (
    <div className="comedians-list">
      {json?.map((comedian) => {
        return (
          <Card
            key={comedian.id}
            comedian={comedian}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default ComediansList;
