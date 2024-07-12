import { extendTheme } from '@chakra-ui/react'
import {CHAKRA_COLORS} from '../theme/color';
import {CHAKRA_STYLES} from '../theme/styles';
import { CHAKRA_RESPONSIVE,CHAKRA_SIZE, CHAKRA_FONTS } from './regular';

export const theme = extendTheme({ 
    colors: CHAKRA_COLORS,
    styles: CHAKRA_STYLES,
    fonts: CHAKRA_FONTS,
    fontWeights: CHAKRA_SIZE,
    breakpoints: CHAKRA_RESPONSIVE,
})
