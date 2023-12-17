import React from "react";
import styles from "../styles/RecipePreview.module.css";

type RecipePreviewProps = {
  src: string;
  cooking_name: string;
  comment: string;
  ingredient: string[];
  seasoning: string[];
  instruction: string[];
  detailed_description: string[];
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
        {props.seasoning.map((item) => (
          <li>{item}</li>
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
