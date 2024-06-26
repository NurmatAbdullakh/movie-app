import styles from "./Badges.module.scss";

interface props {
  data: Array<{ id: number; title: string }>;
}
const Badges: React.FC<props> = ({ data }) => {
  return (
    <div className={styles.badges}>
      {data?.map((genre) => (
        <p key={genre.id} className={`${styles.badge} xs`}>
          {genre.title}
        </p>
      ))}
    </div>
  );
};

export default Badges;
