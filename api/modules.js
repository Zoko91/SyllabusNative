import React from "react";

const modules = [
  {
    id: "1",
    year: "1A",
    name: "Introduction à la programmation",
    teacher: "B. Pesquet",
    description: "Module d'initiation à la programmation procédurale",
    imageUrl: "https://img.icons8.com/nolan/64/computer.png",
  },
  {
    id: "2",
    year: "2A",
    name: "Mathématiques",
    teacher: "J.Saracco",
    description: "Statistiques et probabilités",
    imageUrl: "https://img.icons8.com/nolan/64/math.png",
  },
  {
    id: "3",
    year: "3A",
    name: "Robotique",
    teacher: "J.M.Salotti",
    description: "Initiation à la robotique avec Nao",
    imageUrl: "https://img.icons8.com/nolan/64/robot-3.png",
  },
  {
    id: "4",
    year: "1A",
    name: "Outils de communication",
    teacher: "B. Le Blanc",
    description: "Communication et découverte des bases de données",
    imageUrl: "https://img.icons8.com/plasticine/100/000000/database.png",
  },
];

// Load all modules asynchronously
const getAllModules = () => {
  return new Promise((resolve) => {
    resolve(modules);
  });
};

export default getAllModules;
