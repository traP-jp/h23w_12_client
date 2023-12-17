import React, { useEffect, useState } from "react";
import styles from "../styles/RecipePreview.module.css";
import { apis } from "../utils/apis";
import type { GetRecipeResponce } from "../fetch-apis";

type RecipePreviewProps = {
  src: string;
  cooking_name: string;
  comment: string;
  ingredient: string[];
  seasoning: string[];
  instruction: string[];
};

export const RecipePreviewMock: React.FC<RecipePreviewProps> = (props) => {
  return (
    <React.Fragment>
      <img src={props.src} />
      <h1>{props.cooking_name}</h1>
      <p>{props.comment}</p>

      <h2>材料 2人前</h2>
      <ul className={styles.ingredient_list}>
        {props.ingredient.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>調味料 2人前</h2>
      <ul className={styles.seasoning_list}>
        {props.seasoning.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>作り方</h2>
      <ol className={styles.instruction_list}>
        {props.instruction.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </React.Fragment>
  );
};

export const RecipePreviewMockV2: React.FC = () => {
  const [val, setVal] = useState<string>("");
  useEffect(() => {
    // 現在のURLからクエリ文字列を取得
    const queryString = window.location.search;

    // URLSearchParamsを使用してクエリ文字列を解析
    const urlParams = new URLSearchParams(queryString);

    // 'id'クエリパラメータの値を取得
    const recipeId = urlParams.get("id");
    console.log("called", recipeId);
    setVal(recipeId! || "");
  }, []);
  return <>{val}</>;
};

export const RecipePrevie: React.FC<RecipePreviewProps> = (props) => {
  const [data, setData] = useState<RecipePreviewProps | undefined>(undefined);
  useEffect(() => {
    // 現在のURLからクエリ文字列を取得
    const queryString = window.location.search;

    // URLSearchParamsを使用してクエリ文字列を解析
    const urlParams = new URLSearchParams(queryString);

    // 'id'クエリパラメータの値を取得
    const recipeId = urlParams.get("id");
    apis.recipe
      .getRecipe({
        recipeId: parseInt(recipeId! || ""),
      })
      .then((res: GetRecipeResponce) => {
        const imageData = atob(res.image as string);

        // 取得したデータをUint8Arrayに変換
        const dataArray = new Uint8Array(imageData.length);
        for (let i = 0; i < imageData.length; i++) {
          dataArray[i] = imageData.charCodeAt(i);
        }

        // Blobを作成し、それを元に画像URLを生成
        const blob = new Blob([dataArray], { type: "image/png" });
        const imageUrl = URL.createObjectURL(blob);
        const a: RecipePreviewProps = {
          src: imageUrl,
          comment: res.comment,
          cooking_name: res.name,
          ingredient: res.ingredient as string[],
          seasoning: res.seasoning as string[],
          instruction: res.instruction as string[],
        };
      });
  }, []);
  return (
    <React.Fragment>
      <img src={props.src} />
      <h1>{props.cooking_name}</h1>
      <p>{props.comment}</p>

      <h2>材料 2人前</h2>
      <ul className={styles.ingredient_list}>
        {props.ingredient.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>調味料 2人前</h2>
      <ul className={styles.seasoning_list}>
        {props.seasoning.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2>作り方</h2>
      <ol className={styles.instruction_list}>
        {props.instruction.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </React.Fragment>
  );
};
