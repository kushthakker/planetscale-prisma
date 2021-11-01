import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ManageMode = () => {
  const { theme, setTheme } = useTheme();
  const [getTheme, setGetTheme] = useState("");
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setGetTheme("dark");
    } else setGetTheme("light");
  }, [theme]);

  return { getTheme, theme, setTheme };
};

export default ManageMode;
