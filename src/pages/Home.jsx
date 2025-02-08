import { useState, useEffect } from "react";
import Cardtitle from "../components/Cardtitle";
import { useNavigate } from "react-router-dom";

function Home() {
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filterTexn, setFilterTexn] = useState([]);

  useEffect(() => {
    fetch("https://json-api.uz/api/project/job-list/jobs")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleFilterClick = (texn) => {
    setFilterTexn((prev) =>
      prev.includes(texn)
        ? prev.filter((item) => item !== texn)
        : [...prev, texn]
    );
  };

  const filteredProducts =
    filterTexn.length > 0
      ? products.filter((job) =>
          filterTexn.every((filter) =>
            [...job.languages, ...job.tools].includes(filter)
          )
        )
      : products;

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Ish o‘rinlari</h1>

      <div className="flex gap-2 mb-4">
        {["HTML", "CSS", "JavaScript", "React", "Python"].map((texn) => (
          <button
            key={texn}
            className={`px-4 py-2 rounded-md ${
              filterTexn.includes(texn)
                ? "bg-teal-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleFilterClick(texn)}
          >
            {texn}
          </button>
        ))}

        <button
          className="px-4 py-2 rounded-md bg-red-500 text-white"
          onClick={() => setFilterTexn([])}
        >
          Clear All
        </button>
      </div>
      <ul>
        {filteredProducts.map((data) => (
          <Cardtitle
            key={data.id}
            name={data.company}
            logo={data.logo}
            position={data.position}
            location={data.location}
            postedAt={data.postedAt}
            tavsiya={data.featured ? "FEATURED" : ""}
            holat={data.new ? "New!" : ""}
            texnologiyalar={[
              data.role,
              data.level,
              ...data.languages,
              ...data.tools,
            ]}
            // onClick={() => navigate("/about")}
          />
        ))}
      </ul>
    </>
  );
}

export default Home;
