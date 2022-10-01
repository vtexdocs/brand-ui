declare const popover: {
    backgroundColor: string;
    outline: string;
    boxShadow: string;
    borderRadius: number;
    maxWidth: string;
    close: {
        position: string;
        right: number;
        top: number;
    };
    content: {
        paddingX: number;
        paddingY: number;
        position: string;
    };
    arrow: {
        top: {
            filter: string;
            fill: string;
        };
        right: {
            filter: string;
            fill: string;
        };
        bottom: {
            filter: string;
            fill: string;
        };
        left: {
            filter: string;
            fill: string;
        };
    };
};
export default popover;
