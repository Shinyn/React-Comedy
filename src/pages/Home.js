const Home = () => {
  return (
    <>
      <h1>Uppgiften:</h1>
      <p>
        <strong>Det som skall byggas</strong> En applikation som listar data
        enligt en viss typ, och där det går att lägga till nya dataenheter.
        Detta kan vara t.ex. en lista på användare, restauranger, produkter,
        eller annat valfritt.
        <br />
        <br />
        <strong>Krav för Godkänt</strong> Applikationen är byggd med ett
        ramverk, såsom React, Vue, Angular, Svelte, etc. Applikationen skall ha
        minst två routes. På ena routen skall det finnas ett formulär för att
        lägga till en ny “enhet”. Denna skall sparas i någon typ av datakälla,
        såsom JSON Server. På den andra routen skall alla inlagda “enheter”
        listas. Applikationen skall använda sig av någon typ av styling-library.
        Detta kan vara SASS, styled-components eller något UI-library, eller en
        kombination av dem.
        <br />
        <br />
        <strong>Krav för Väl Godkänt</strong> Det skall finnas en route där man
        kan se en enskild “enhet” Det skall vara möjligt att ta bort enheten,
        antingen från “enskild”-sidan, eller från listan På routen där enheterna
        listas skall det finnas möjlighet att filtrera vilka som syns. Detta kan
        vara baserat på saker som produktkategori eller användarroll eller
        dylikt. Det skall också vara möjligt att välja olika sorteringar på
        listan, på tex produktnamn eller pris.
      </p>
    </>
  );
};

export default Home;
