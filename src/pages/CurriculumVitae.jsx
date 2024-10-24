

function CurriculumVitae() {
    return (
<div style={{ height: "100vh", overflow: "hidden" }}>
      <embed
        id="pdfEmbed"
        src="src\assets\AntoineChartier-CV.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>

    );
}

export default CurriculumVitae;