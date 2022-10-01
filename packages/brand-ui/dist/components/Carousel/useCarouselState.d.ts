interface CarouselStateProps {
    totalSlides: number;
    slidesPerPage: number;
    slidesPerScroll: number;
    initialSlide: number;
}
declare const useCarouselState: ({ totalSlides, slidesPerPage, slidesPerScroll, initialSlide, }: CarouselStateProps) => {
    totalSteps: number;
    currentStep: number;
    transition: boolean;
    handleChangeStep: (newStep: number) => void;
    handleNext: () => void;
    handlePrevious: () => void;
    swipeHandlers: import("react-swipeable").SwipeableHandlers;
};
export default useCarouselState;
