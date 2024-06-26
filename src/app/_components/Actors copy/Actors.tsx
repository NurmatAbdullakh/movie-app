import Image from "next/image";
import styles from "./Actors.module.scss";

interface props {
    actors: Array<{ id: number; fullName: string; photo: string }>;
}

const Actors: React.FC<props> = ({ actors }) => {
    return (
        <>
            <div className={styles.section_title}>Актеры</div>
            <div className={styles.movie_details__actors}>
                {actors
                    ?.filter((a) => a.photo)
                    ?.map((actor) => (
                        <div
                            key={actor.id}
                            className={styles.movie_details__actors_card}
                        >
                            <Image
                                className={styles.actors__image}
                                src={actor.photo}
                                alt={actor.fullName}
                                width={60}
                                height={60}
                            />
                            <div className={styles.actors__name}>{actor.fullName}</div>
                        </div>
                    ))}
            </div>
        </>
    )

};

export default Actors;