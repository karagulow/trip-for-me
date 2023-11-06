import styles from './TouristSupport.module.scss';
import { ChatBox } from '../../components/ChatBox';
import { NavTourist } from '../../components/NavTourist';

export const TouristSupport = () => {
  return (
    <div className={styles.support}>
      <NavTourist />
      <ChatBox />
    </div>
  );
};
