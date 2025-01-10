import { Box, Flex, Text } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { IconType } from "react-icons";


interface ITextIcon {
    text: string | ReactNode;
    Icon: IconType;
    iconColor: string;
}

const TextIcon:FC<ITextIcon> = ({Icon, text, iconColor}) => {

    return (
        <Flex alignItems='center' gap='5px'>
            <Box
            as={Icon}
            color={iconColor}
            fontSize='24px'
            />
            {
            typeof text==='string' ?
            <Text fontWeight='600'>{text}</Text> : text
            }
        </Flex>
    )
}


export default TextIcon