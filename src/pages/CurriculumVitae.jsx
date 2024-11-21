import { useEffect, useState } from "react";
import cvpdf from "/AntoineChartier-CV.pdf";

function CurriculumVitae() {

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div style={{width:screenSize, height: "100%", overflow: "hidden" }}>
      <embed
        src={cvpdf}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}

export default CurriculumVitae;
