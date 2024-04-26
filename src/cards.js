import a from "./assets/images/a.png";
import b from "./assets/images/b.png";
import c from "./assets/images/c.png";
import d from "./assets/images/d.png";
import e from "./assets/images/e.png";
import f from "./assets/images/f.png";

const cards = [
  { id: 1, name: "a", image: a },
  { id: 2, name: "a", image: a },
  { id: 3, name: "b", image: b },
  { id: 4, name: "b", image: b },
  { id: 5, name: "c", image: c },
  { id: 6, name: "c", image: c },
  { id: 7, name: "d", image: d },
  { id: 8, name: "d", image: d },
  { id: 9, name: "e", image: e },
  { id: 10, name: "e", image: e },
  { id: 11, name: "f", image: f },
  { id: 12, name: "f", image: f },
];

export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));
