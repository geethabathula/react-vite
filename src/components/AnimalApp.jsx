/* eslint-disable no-undef */
import { useState } from "react";
import AnimalDisplay from "./AnimalDisplay";
import "bulma/css/bulma.css";
import deer from "../assets/images/deer.svg";
import elephant from "../assets/images/elephant.svg";
import giraffe from "../assets/images/giraffe.svg";
import tiger from "../assets/images/tiger.svg";
import bird from "../assets/images/bird.svg";
import cow from "../assets/images/cow.svg";
import dog from "../assets/images/dog.svg";
import horse from "../assets/images/horse.svg";
import "../assets/css/AnimalDisplay.css";
const animals = [
  { name: "deer", src: deer },
  { name: "elephant", src: elephant },
  { name: "giraffe", src: giraffe },
  { name: "tiger", src: tiger },
  { name: "cow", src: cow },
  { name: "dog", src: dog },
  { name: "bird", src: bird },
  { name: "horse", src: horse },
];

function getRandomAnimal() {
  return animals[Math.floor(Math.random() * animals.length)];
}

function AnimalApp() {
  const [animalList, setAnimalList] = useState([]);

  const handleClick = () => {
    const newAnimal = getRandomAnimal();
    setAnimalList([...animalList, newAnimal]);
  };

  const renderedAnimals = animalList.map((animal, index) => (
    <AnimalDisplay key={index} type={animal.name} src={animal.src} />
  ));

  return (
    <>
      <section className="hero is-danger">
        <div className="hero-body is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
          <p className="title has-text-centered is-1">
            &quot;Show your love to animals&quot;
          </p>
          <p className="has-text-centered">
            <button className="button is-rounded is-2" onClick={handleClick}>
              Add Animal
            </button>
          </p>
        </div>
      </section>
      <div className="animal-list">{renderedAnimals}</div>
    </>
  );
}

export default AnimalApp;
