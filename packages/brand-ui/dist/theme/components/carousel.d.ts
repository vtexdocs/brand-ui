declare const _default: {
    position: string;
    overflow: string;
    flexDirection: string;
    width: string;
    slidesContainer: {
        transition: string;
        crossfade: {
            '@keyframes crossfade': {
                '0%': {
                    opacity: number;
                };
                '50%': {
                    opacity: number;
                };
                '100%': {
                    opacity: number;
                };
            };
            animated: {
                transition: string;
                animation: string;
                zIndex: number;
                height: string;
                width: string;
            };
            default: {
                transition: string;
                zIndex: number;
                height: string;
                width: string;
            };
        };
        zIndex: number;
        height: string;
        width: string;
    };
    slide: {
        flexShrink: number;
        alignItems: string;
        justifyContent: string;
    };
    navigationContainer: {};
    next: {
        small: {
            marginRight: number;
            height: number;
            width: number;
            cursor: string;
            border: string;
            borderRadius: string;
            backgroundColor: string;
            color: string;
            boxShadow: string;
            ':hover': {
                backgroundColor: string;
            };
            '&:focus': {
                outline: string;
            };
        };
        regular: {
            marginRight: number;
            height: number;
            width: number;
            cursor: string;
            border: string;
            borderRadius: string;
            backgroundColor: string;
            color: string;
            boxShadow: string;
            ':hover': {
                backgroundColor: string;
            };
            '&:focus': {
                outline: string;
            };
        };
    };
    previous: {
        small: {
            marginLeft: number;
            height: number;
            width: number;
            cursor: string;
            border: string;
            borderRadius: string;
            backgroundColor: string;
            color: string;
            boxShadow: string;
            ':hover': {
                backgroundColor: string;
            };
            '&:focus': {
                outline: string;
            };
        };
        regular: {
            marginLeft: number;
            height: number;
            width: number;
            cursor: string;
            border: string;
            borderRadius: string;
            backgroundColor: string;
            color: string;
            boxShadow: string;
            ':hover': {
                backgroundColor: string;
            };
            '&:focus': {
                outline: string;
            };
        };
    };
    indicatorBar: {
        default: {
            position: string;
            left: number;
            right: number;
            bottom: number;
            justifyContent: string;
            marginX: number;
            button: {
                marginRight: number;
            };
            'button:last-child': {
                marginRight: number;
            };
            marginBottom: number;
        };
        overlay: {
            position: string;
            left: number;
            right: number;
            bottom: number;
            justifyContent: string;
            marginX: number;
            button: {
                marginRight: number;
            };
            'button:last-child': {
                marginRight: number;
            };
            marginBottom: number;
        };
    };
    indicator: {
        active: {
            opacity: number;
            height: number;
            width: number;
            minHeight: number;
            minWidth: number;
            padding: number;
            border: string;
            borderRadius: string;
            backgroundColor: string;
            cursor: string;
            ':hover': {
                opacity: number;
                backgroundColor: string;
            };
            '&:focus': {
                outline: string;
            };
        };
        height: number;
        width: number;
        minHeight: number;
        minWidth: number;
        padding: number;
        border: string;
        borderRadius: string;
        backgroundColor: string;
        cursor: string;
        opacity: number;
        ':hover': {
            opacity: number;
            backgroundColor: string;
        };
        '&:focus': {
            outline: string;
        };
    };
};
export default _default;
