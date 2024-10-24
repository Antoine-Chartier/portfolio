
import cvpdf from "../../public/AntoineChartier-CurriculumVitae.pdf";

function CurriculumVitae() {
    return (
<div style={{ height: "100vh", overflow: "hidden" }}>
      <object
        id="pdfEmbed"
        data={cvpdf}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>

    );
}

export default CurriculumVitae;