import style from "./Tutorial.module.css";
import tutoImagen from "@/images/homePage/tutoImagen.png";

export default function Tutorial() {
  return (
    <div className={style.Tutorial}>
      <div className={style.imagencontenedor}>
        <img src={tutoImagen.src} alt="tutorial" />
      </div>
    </div>
  );
}
