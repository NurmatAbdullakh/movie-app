import styles from "./Sectiontitle.module.scss";

const SectionTitle = ({ title }: { title: string }) => {
  return <div className={styles.section_title}>{title}</div>;
};

export default SectionTitle;
