import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // State
  const [heroes, setHeroes] = useState([]);
  const [slug, setSlug] = useState("");
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [color, setColor] = useState("");
  const [isAlive, setIsAlive] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [arrayPower, setArrayPower] = useState([]);

  useEffect(() => {
    fetchHeroes();
  }, []);

  const fetchHeroes = async () => {
    const request = await fetch("http://localhost:5000/heroes");
    const response = await request.json();

    setHeroes(response);
  };

  const handleChangeSlug = (e) => {
    const value = e.target.value;
    setSlug(value);
  };

  const handleChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleChangePower = (e) => {
    const value = e.target.value;
    setPower(value);
  };

  const handleChangeColor = (e) => {
    const value = e.target.value;
    setColor(value);
  };

  const handleCheck = (e) => {
    const isChecked = e.target.checked;
    setIsAlive(isChecked);
  };

  const handleChangeAge = (e) => {
    const value = e.target.value;
    setAge(value);
  };

  const handleChangeImage = (e) => {
    const value = e.target.value;
    setImage(value);
  };

  const handleChangeArray = () => {
    const array = [...arrayPower, power];
    setArrayPower(array);
    setPower("");
  };

  console.log(image);

  return (
    <>
      <ul>
        {heroes.map((heroe) => {
          return (
            <li key={heroe.slug}>
              <Link to={`/${heroe.slug}`}>{heroe.slug}</Link>
            </li>
          );
        })}
      </ul>

      <form>
        <div>
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" onChange={handleChangeSlug} />
        </div>

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleChangeName} />
        </div>

        <div>
          <label htmlFor="power">Power</label>
          <input type="text" name="power" onChange={handleChangePower} />
          <button type="button" onClick={handleChangeArray}>
            +
          </button>
        </div>

        <div>
          <label htmlFor="color">Color</label>
          <input type="text" name="color" onChange={handleChangeColor} />
        </div>

        <div>
          <label htmlFor="isAlive">Alive</label>
          <input type="checkbox" name="isAlive" onChange={handleCheck} />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input type="text" name="age" onChange={handleChangeAge} />
        </div>

        <div>
          <label htmlFor="image">image</label>
          <input type="text" name="image" onChange={handleChangeImage} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Home;
