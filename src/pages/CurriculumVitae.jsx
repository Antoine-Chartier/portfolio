import cvpdf from "/AntoineChartier-CV.pdf";

function CurriculumVitae() {
  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <iframe
        // id="pdfIframe"
        src={cvpdf}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ width: "100%", height: "100%", border: "none" }}
      />

      <p style={{ color: "red", padding: "var(--clampRacine)" }}>stuff</p>
    </div>
  );
}

export default CurriculumVitae;
