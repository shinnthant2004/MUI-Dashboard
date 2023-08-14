import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import useCurrentNav from "../hooks/useCurrentNav";
import navlinks from "../assets/navlinks";

interface ActiveLink {
  index: number;
  color: string;
}

const Sidebar = () => {
  const theme = useTheme();

  const [activeLink, setActiveLink] = useState<ActiveLink | null>(null);

  const { currentNav, activeTab, setActiveTab } = useCurrentNav();

  useEffect(() => {
    if (currentNav) {
      setActiveLink({
        index:
          (navlinks &&
            navlinks[activeTab].findIndex(
              (item) => item.label === currentNav.label
            )) ||
          0,
        color: currentNav.color,
      });
    }
  }, [currentNav, activeTab]);

  return (
    <Box width={200} height="100%">
      {navlinks.conversation.map((item) => {
        return <Typography key={item.title}>{item.title}</Typography>;
      })}
    </Box>
  );
};

export default Sidebar;
