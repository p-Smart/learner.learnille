import { useTheme } from "@chakra-ui/react"



const useColor = (varName: string) => {
    const theme = useTheme();
    const keys = varName.split('.');
    let color = theme.colors;

    for (const key of keys) {
        color = color?.[key];
        if (!color) return varName;
    }

    return (typeof color)==='string' ? color : varName;
}

const getColor = useColor


export default getColor