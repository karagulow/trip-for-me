import styles from './GuideSupport.module.scss';
import { ChatBox } from '../../components/ChatBox';
import { NavGuide } from '../../components/NavGuide';

export const GuideSupport = () => {
  return (
    <div className={styles.support}>
      <NavGuide />
      <ChatBox />
    </div>
  );
};
