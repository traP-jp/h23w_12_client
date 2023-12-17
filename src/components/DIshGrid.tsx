import { useState } from "react";
import { MyImageMock } from "./MyImage";
import styles from "../styles/DishImage.module.css";

export const DishGrid: React.FC = () => {
  const [dishes, setDishes] = useState<
    { name: string; imgSrc: string }[] | undefined
  >(undefined);

  return (
    <div className={styles.dish_grid}>
      {dishes &&
        dishes.map((dish) => (
          <div className={styles.dish}>
            <MyImageMock src={dish.imgSrc} />
            <div className={styles.dish_name}>{dish.name}</div>
          </div>
        ))}
    </div>
  );
};

export const DishGridMock: React.FC<{
  dishes: { dishId?: number; name: string; imageSrc: string }[];
}> = ({ dishes }) => {
  return (
    <div className={styles.dish_grid}>
      {dishes &&
        dishes.map((dish, i) => (
          <a className={styles.dish} key={i} href={`/recipe?id=${i}`}>
            <MyImageMock src={dish.imageSrc} />
            <div className={styles.dish_name}>{dish.name}</div>
          </a>
        ))}
    </div>
  );
};
