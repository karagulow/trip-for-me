import styles from './GuideChat.module.scss';
import { NavGuide } from '../../components/NavGuide';
import { ChatBox } from '../../components/ChatBox';

export const GuideChat = () => {
  return (
    <div className={styles.guide_chat}>
      <NavGuide />
      <ChatBox />
    </div>
  );
};
