import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { FC } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSwiper } from "swiper/react";
import SwiperCore from 'swiper'

interface ISwiperButton extends Omit<IconButtonProps, 'aria-label'> {
    prev?: boolean;
    next?: boolean;
    buttonVariant?: '1' | '2';
    swiperInstance?: SwiperCore;
}


const SwiperButton: FC<ISwiperButton> = ({
    next, prev, buttonVariant='1', swiperInstance,
    ...buttonProps
}) => {
    const parentSwiperInstance = useSwiper()

    const swiper = swiperInstance ||  parentSwiperInstance

    const Icon = prev ? GoArrowLeft : next ? GoArrowRight : null

    return (
        <IconButton
        onClick={() => prev ? swiper.slidePrev() : next ? swiper.slideNext() : null}
        aria-label={`swiper-${prev ? 'prev' : 'next'}-button`}
        w='50px'
        h='50px'
        borderRadius={buttonVariant==='2' ? '3px' : '50%'}
        alignItems='center'
        justifyContent='center'
        color={buttonVariant==='2' ? 'gray.700' : 'primary.main'}
        fontSize='24px'
        bgColor={buttonVariant==='2' ? 'blackAlpha.300' :  'white'}
        zIndex={1}
        shadow='md'
        _hover={{
            bgColor: buttonVariant==='2' ? 'primary.main' : 'whiteAlpha.300',
            color: buttonVariant==='2' ? 'white' : 'primary.main'
        }}
        {...buttonProps}
        >
            <Icon />
        </IconButton>
    )
}

export default SwiperButton