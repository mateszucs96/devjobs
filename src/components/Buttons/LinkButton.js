import styles from './linkButton.module.scss';

const LinkButton = ({ link, text, bgColor, color }) => {
  return (
    <div
      className={`applyButton  ${styles.linkButton}`}
      style={{ backgroundColor: bgColor }}
    >
      <a style={{ color: color }} href={link}>
        {text}
      </a>
    </div>
  );
};

export default LinkButton;
