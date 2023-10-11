import { Breakpoint, useTheme, useMediaQuery } from "@mui/material";

/**
 * @returns current screen breakpoint on from ["xl","lg","md","sm","xs"]
 */
export const useCurrentBreakpoint = () => {
    const theme = useTheme();

    const keys = [...theme.breakpoints.keys].reverse();

    return (
        keys.filter((key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));

            if (matches) return true;
            return false;
        })[0] || "xs"
    );
};
