import { ReactNode } from 'react';
import { SxStyleProp } from 'theme-ui';
export interface CarouselProps {
    children: ReactNode[];
    indicators?: boolean;
    size?: 'regular' | 'small';
    sx?: SxStyleProp;
    crossfade?: boolean;
    buttonAlign?: 'top' | 'center';
    loop?: boolean;
    slidesPerPage?: number;
    slidesPerScroll?: number;
    overlaySlides?: boolean;
    initialSlide?: number;
}
export declare const Carousel: ({ children: slides, indicators, size, crossfade, buttonAlign, sx, loop, slidesPerPage, slidesPerScroll, overlaySlides, initialSlide, }: CarouselProps) => JSX.Element;
export default Carousel;
