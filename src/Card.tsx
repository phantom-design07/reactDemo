import React from "react";

type Props = {};

export default function Card({}: Props) {
  return (
    <div className="card">
      <h2>Josephine</h2>
      <img src="https://picsum.photos/200/300" alt="bild" />
      <p>made by Josephine</p>
    </div>
  );
}
