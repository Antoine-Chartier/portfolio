import image from "../assets/imgLourde.jpg?optimized";
import ImageOp from "../utils/imageOp";

function UneAutrePage() {
    return (
        <div>
            <ImageOp src={image} alt="test" />
        </div>
    );
}

export default UneAutrePage;