import Image from "next/image";
import styles from "./Actors.module.scss";
import SectionTitle from "../SectionTitle/Sectiontitle";

interface props {
  actors: Array<{ id: number; fullName: string; photo: string }>;
}

const Actors: React.FC<props> = ({ actors }) => {
  return (
    <>
      <div className={styles.actors}>
        {actors?.map((actor) => (
          <div key={actor.id} className={styles.actors_card}>
            <Image
              className={styles.actors__image}
              src={
                actor.photo ||
                "https://archive.org/download/no-photo-available//no-photo-available.png"
              }
              alt={actor.fullName}
              width={60}
              height={60}
            />
            <div className={styles.actors__name}>{actor.fullName}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Actors;
