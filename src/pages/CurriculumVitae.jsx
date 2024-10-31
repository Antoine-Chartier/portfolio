import { useEffect, useState } from "react";
import cvpdf from "/AntoineChartier-CV.pdf";

function CurriculumVitae() {

  const [screenSize, setScreenSize] = useState(window.innerWidth);
console.log(screenSize);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <iframe
        // id="pdfIframe"
        src={cvpdf}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ width: screenSize, height: "100%", border: "none" }}
      />
      <p style={{ color: "red", padding: "var(--clampRacine)" }}>stuff</p>
    </div>
  );
}

export default CurriculumVitae;
