import styles from '../styles/[FTName].module.scss';

export type[FTName]T = {

};

const [FTName] = ({ }: [FTName]T): JSX.Element => {
  return (
    <div classNames={styles.container}>
      my component
    </div>
  );
};

export default [FTName];
