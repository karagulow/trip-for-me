import styles from './TouristSupport.module.scss';
import { ChatBox } from '../../components/ChatBox';
import { NavTourist } from '../../components/NavTourist';

export const TouristSupport = () => {
  return (
    <div className={styles.support}>
      {/* <h1 className={styles.supportTitle}>Поддержка</h1> */}
      <NavTourist />
      <ChatBox />
    </div>
  );
};
