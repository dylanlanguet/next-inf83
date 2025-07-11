"use client";

const ApiButton = () => {
async function getNote() {
    // Appel API
    const res = await fetch("/api/toto").then((res) => res.json()).catch((err) => console.log(err));
    return console.log(res);
  }

  return <button onClick={() => getNote()}> Click </button>;
}

export default ApiButton;