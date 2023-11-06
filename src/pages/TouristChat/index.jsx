import styles from './TouristChat.module.scss';
import { NavTourist } from '../../components/NavTourist';
import { ChatBox } from '../../components/ChatBox';

export const TouristChat = () => {
  return (
    <div className={styles.tourist_chat}>
      <NavTourist />
      <ChatBox />
    </div>
  );
};
