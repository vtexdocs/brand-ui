declare const timeline: {
    '& > *:last-child': {
        '& > *:nth-of-type(2)': {
            pb: number;
        };
        '& > *:first-of-type > *:last-child': {
            display: string;
        };
    };
    width: string;
    maxWidth: string;
    event: {
        pl: number;
        pb: number;
        title: {
            fontSize: number[];
        };
        subtitle: {
            mt: number;
            color: string;
            fontSize: number;
            lineHeight: string;
        };
        content: {
            mt: number;
            fontSize: number;
        };
        icon: {
            display: string;
            flexDirection: string;
            width: string;
            minWidth: string;
            alignItems: string;
            default: {
                width: string;
                height: string;
                p: number;
                '& > div': {
                    backgroundColor: string;
                    borderRadius: string;
                    height: string;
                    width: string;
                };
            };
        };
        line: {
            height: string;
            width: number;
            backgroundColor: string;
        };
    };
};
export default timeline;
