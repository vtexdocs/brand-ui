import { Theme } from '../theme';
declare const hamburgerMenu: {
    display: string[];
    outline: string;
    border: string;
    bg: string;
    width: string;
    height: string;
    paddingY: number;
    justifyContent: string;
    alignItems: string;
    color: string;
    borderLeft: string;
    borderLeftWidth: string;
    borderLeftColor: string;
    cursor: string;
    open: {
        position: string;
        width: string;
        height: string;
        left: string;
        bottom: string;
        top: string;
        flexDirection: string;
        justifyContent: string;
        backgroundColor: string;
        marginTop: string;
        paddingBottom: string;
    };
    menu: {
        display: string[];
        flexDirection: string;
        overflowY: string;
        paddingY: number;
    };
    links: {
        height: string;
        display: string;
        alignItems: string;
        textDecoration: string;
        transition: string;
        color: string;
        marginY: number;
        paddingX: number;
        fontSize: number;
    };
    activeLink: {
        boxShadow: (theme: Theme) => string;
        height: string;
        display: string;
        alignItems: string;
        textDecoration: string;
        transition: string;
        color: string;
        marginY: number;
        paddingX: number;
        fontSize: number;
    };
    actionButton: {
        zIndex: number;
        borderTop: string;
        borderTopWidth: string;
        borderTopColor: string;
        paddingX: number;
    };
};
export default hamburgerMenu;
