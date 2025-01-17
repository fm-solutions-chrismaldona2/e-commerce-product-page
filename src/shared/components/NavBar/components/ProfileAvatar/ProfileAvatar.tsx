import styles from "./ProfileAvatar.module.css";
import Avatar from "@assets/images/image-avatar.png";

export const ProfileAvatar = () => {
  return (
    <button className={styles.profileButton} aria-label="Profile">
      <img
        src={Avatar}
        alt="Profile Picture"
        className={styles.profileButton__image}
        width={48}
        height={48}
      />
    </button>
  );
};
