import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContext from "./components/MainContext";
import brandsData from "./brands.json";
import { useEffect, useState } from "react";
import Copied from "./components/Copied";
import Collection from "./components/Collection";
import routes from "./routes";
import Content from "./components/Content";

function App() {
  const brandsArray = [];
  Object.keys(brandsData).map((key) => {
    brandsArray.push(brandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) =>
        brand.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };
  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content/>
      </MainContext.Provider>
    </>
        
  );
}

export default App;
