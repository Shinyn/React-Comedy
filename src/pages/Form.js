import { useState } from "react";
import styles from "../Form.module.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComedian = {
      name,
      image,
    };

    const res = await fetch("http://localhost:3001/comedians", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComedian),
    });

    console.log(res);

    if (res.ok) {
      setName("");
      setImage("");
    }
  };

  return (
    <>
      <h2>ADD COMEDIAN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.textField}
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className={styles.url}
            placeholder="Image URL"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <button className={styles.submitBtn}>Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
