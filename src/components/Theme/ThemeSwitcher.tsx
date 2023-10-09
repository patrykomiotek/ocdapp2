import { Text, Button } from "@ui/atoms";
import { useThemeContext } from "./ThemeContext"

export const ThemeSwitcher = () => {
  const context = useThemeContext();

  return (
    <div>
      <Text>Theme: {context.theme}</Text>
      <Button
        label="Toggle"
        onClick={() => context.toggle()}
      />
    </div>
  );
}