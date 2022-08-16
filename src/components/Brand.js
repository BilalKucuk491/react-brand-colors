import { useContext } from "react";
import { getContrastYIQ } from "../helpers";
import MainContext from "./MainContext";
import ClipboardButton from "react-clipboard.js";

function Brand({ brand }) {
  const { setSelectedBrands, selectedBrands, setCopied } =
    useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <div onClick={toggleSelected}
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <h5 >{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color, key) => (
          <ClipboardButton
            key={key}
            onSuccess={() => setColor(color)}
            data-clipboard-text={color}
            component="span"
            style={{
              "--bgColor": `#${color}`,
              "--textColor": `${getContrastYIQ(color)}`,
            }}
          >
            {color}
          </ClipboardButton>
        ))}
      </div>
    </div>
  );
}

export default Brand;
