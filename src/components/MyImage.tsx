import * as React from "react";

export const MyImage: React.FC<
  {
    imgId: string;
  } & React.HTMLProps<HTMLImageElement>
> = ({ imgId, ...props }) => {
  const [src, setSrc] = React.useState("");
  async function fetchDishImage() {
    try {
      const response = await fetch(
        `http://localhost:8080/dish/${imgId ? imgId : "1"}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
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
      setSrc(res);
    });
  }, []);

  // 結果をページに出力する
  return <img src={src} {...props} />;
};

export const MyImageV2: React.FC<
  {
    imgId: string;
  } & React.HTMLProps<HTMLImageElement>
> = ({ imgId, ...props }) => {
  const [src, setSrc] = React.useState("");
  async function fetchData() {
    const response = await fetch("http://localhost:8080/dish/1"); // 1はサンプルのidです

    if (!response.ok) {
      console.error("Failed to fetch image");
      return "";
    }

    const data = await response.json();
    const imageData = atob(data.base64_bytes);

    // 取得したデータをUint8Arrayに変換
    const dataArray = new Uint8Array(imageData.length);
    for (let i = 0; i < imageData.length; i++) {
      dataArray[i] = imageData.charCodeAt(i);
    }

    // Blobを作成し、それを元に画像URLを生成
    const blob = new Blob([dataArray], { type: "image/png" });
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  }
  React.useEffect(() => {
    fetchData().then((res) => {
      setSrc(res);
    });
  }, []);

  // 結果をページに出力する
  return <img src={src} {...props} />;
};

export const MyImageMock: React.FC<
  {
    src: string;
  } & React.HTMLProps<HTMLImageElement>
> = ({ src, ...props }) => {
  return <img src={src} {...props} />;
};
