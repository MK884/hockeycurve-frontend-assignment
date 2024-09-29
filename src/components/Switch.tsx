import useTheme from "../hook/useTheme";
import style from "../styles/switch.module.scss";

export const Switch = ({
  id = "",
  styles = {},
  onChange,
  isChecked,
  ...props
}: SwitchProps) => {
  return (
    <input
      type="checkbox"
      onChange={onChange}
      id={id}
      style={styles}
      checked={isChecked}
      className={`${style.switch}`}
      {...props}
    />
  );
};

const ThemeSwitch = () => {
  const theme = useTheme();
  const checked = theme?.theme === "dark";

  return <Switch onChange={theme?.toggleTheme} isChecked={checked} />;
};

export default ThemeSwitch;
