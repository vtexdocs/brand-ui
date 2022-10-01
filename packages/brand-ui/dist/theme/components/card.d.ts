declare const card: {
    media: {
        vertical: {
            borderRadius: number;
            bg: string;
            '& > img': {
                padding: number;
            };
        };
        horizontal: {
            borderRadius: number;
            bg: string;
            '& > img': {
                padding: number;
            };
            maxWidth: string[];
        };
    };
    noMedia: {
        display: string;
        bg: string;
        flexDirection: string;
        borderRadius: number;
        header: {
            title: {
                fontSize: number;
                fontVariationSettings: string;
                color: string;
                paddingBottom: number;
                paddingTop: number;
                marginLeft: number;
                marginRight: number;
                justifyContent: string;
            };
            subtitle: {
                fontSize: number;
                fontVariationSettings: string;
                color: string;
                paddingTop: number;
                paddingBottom: number;
                marginLeft: number;
                marginRight: number;
            };
            fontSize: number;
            paddingBottom: number;
            paddingTop: number;
            marginLeft: number;
            marginRight: number;
        };
        body: {
            fontSize: number;
            color: string;
            alignItems: string;
            marginLeft: number;
            marginRight: number;
            paddingBottom: number;
            paddingTop: string;
        };
        footer: {
            paddingTop: number;
            paddingBottom: number;
            fontSize: number;
            marginLeft: number;
            marginRight: number;
            justifyContent: string;
            position: string;
        };
    };
    small: {
        '& > div': {
            paddingX: number;
        };
        paddingBottom: number;
        paddingTop: number;
        display: string;
        bg: string;
        flexDirection: string;
        borderRadius: number;
        boxShadow: string;
        '& > img': {
            padding: number;
        };
    };
    regular: {
        '& > div': {
            paddingX: number;
        };
        paddingBottom: number;
        paddingTop: number;
        display: string;
        bg: string;
        flexDirection: string;
        borderRadius: number;
        boxShadow: string;
        '& > img': {
            padding: number;
        };
    };
    vertical: {
        '& > div': {
            paddingX: number;
        };
        display: string;
        bg: string;
        flexDirection: string;
        borderRadius: number;
        boxShadow: string;
        '& > img': {
            padding: number;
        };
    };
    horizontal: {
        flexDirection: string[];
        '& > div': {
            paddingX: number;
        };
        display: string;
        bg: string;
        borderRadius: number;
        boxShadow: string;
        '& > img': {
            padding: number;
        };
    };
};
export default card;
