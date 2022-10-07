import clsx from "clsx";
import "./tag-style.scss";

const Tag = ({ icon, tag, twClasses, twClasses2 }) => {
  return (
    <div className={clsx("tag", twClasses)}>
      <span className={clsx(twClasses2)}>
        {icon}
        {tag}
      </span>
    </div>
  );
};

export default Tag;
