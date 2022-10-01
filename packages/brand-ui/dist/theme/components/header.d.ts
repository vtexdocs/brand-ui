import { Theme } from '../theme';
declare const header: {
    display: string[];
    width: string;
    height: string;
    position: string;
    top: string;
    left: string;
    alignItems: string;
    justifyContent: string;
    gridTemplateColumns: string;
    gridTemplateAreas: string;
    backgroundColor: string;
    borderBottom: string;
    borderBottomWidth: string;
    borderBottomColor: string;
    brand: {
        width: string;
        justifyContent: string;
        gridArea: string;
        marginLeft: number[];
        marginBottom: number;
        '> svg': {
            width: string;
        };
    };
    leftLinks: {
        display: string[];
        gridArea: string;
        width: string;
        height: string;
        marginLeft: string;
        links: {
            active: {
                color: string;
                boxShadow: (theme: Theme) => string;
                display: string;
                height: string;
                minWidth: string;
                textDecoration: string;
                transition: string;
                marginX: string;
                '&:hover': {
                    color: string;
                };
                alignItems: string;
                fontSize: number;
            };
            noActive: {
                color: string;
                display: string;
                height: string;
                minWidth: string;
                textDecoration: string;
                transition: string;
                marginX: string;
                '&:hover': {
                    color: string;
                };
                alignItems: string;
                fontSize: number;
            };
        };
    };
    rightLinks: {
        display: string[];
        gridArea: string;
        width: string;
        justifyContent: string;
        textTransform: string;
        '> a': {
            display: string;
            minWidth: string;
            textDecoration: string;
            transition: string;
            color: string;
            marginX: number;
            paddingX: number;
            fontSize: number;
            fontVariationSettings: string;
            '&:hover': {
                color: string;
            };
        };
    };
    actionButton: {
        gridArea: string;
        height: string;
        alignItems: string;
        justifyContent: string;
    };
};
export default header;
