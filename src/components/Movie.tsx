import * as React from "react";

const Movies: React.FC = () => {
  const [url, setUrl] = React.useState("");
  async function fetchDishImage() {
    try {
      const response = await fetch(`http://localhost:8080/dish/1`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("aaa", response);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      return url;
    } catch (error) {
      console.error("Error fetching image:", error);
      return "";
    }
  }
  React.useEffect(() => {
    fetchDishImage().then((res) => {
      console.log("done");
      setUrl(res);
    });
  }, []);

  // 結果をページに出力する
  return (
    <div>
      <img src={url} />
      <div>dd</div>
    </div>
  );
};

export default Movies;
