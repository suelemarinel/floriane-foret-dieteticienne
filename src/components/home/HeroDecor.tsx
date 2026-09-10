export default function HeroDecor() {
  return (
    <>
      {/* ---- Calque arrière ---- */}

      {/* Fougère horizontale — réduite et descendue pour dégager le logo */}
      <img
        src="/illustrations/fougere-horizontale.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -left-[2%] top-[6%] hidden w-[14%] lg:block"
      />

      {/* Carotte — réduite et inclinée */}
      <img
        src="/illustrations/carotte.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[36%] top-[20%] hidden w-[6%] rotate-[30deg] lg:block"
      />

      {/* Choux-fleur — réduite et décalée hors du texte */}
      <img
        src="/illustrations/choufleur.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[1%] top-[48%] hidden w-[5%] lg:block"
      />

      {/* Tomate rose */}
      <img
        src="/illustrations/tomate-pink.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[20%] top-[80%] hidden w-[5%] lg:block"
      />

      {/* Tomate verte */}
      <img
        src="/illustrations/tomate-green.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[23%] top-[86%] hidden w-[4%] lg:block"
      />

{/*

      <img
        src="/illustrations/fougere-verticale.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[3%] top-[80%] hidden w-[7%] lg:block"
      />


      <img
        src="/illustrations/fougere-oblique.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[34%] top-[75%] z-20 hidden w-[19%] lg:block"
      /> */}
      {/* ---- Calque avant : par-dessus la photo ---- 

      <img
        src="/illustrations/oignon.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[87%] top-[10%] z-20 hidden rotate-[30deg] w-[10%] lg:block"
      />

      <img
        src="/illustrations/radis.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-[85%] top-[73%] z-20 hidden rotate-[-30deg] w-[15%] lg:block"
      />
      */}
    </>
  );
}