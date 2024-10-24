
import cvpdf from "../assets/AntoineChartier-CV.pdf";

function CurriculumVitae() {
    return (
<div style={{ height: "100vh", overflow: "hidden" }}>
      <embed
        id="pdfEmbed"
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