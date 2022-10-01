declare const modal: {
    bottomBar: {
        modal: {
            justifyContent: string;
            flexDirection: string;
            marginTop: string[];
            paddingX: string[];
            paddingBottom: string[];
        };
        dialog: {
            justifyContent: string;
            flexDirection: string;
            paddingTop: string[];
            paddingX: string[];
            paddingBottom: string[];
        };
    };
    title: {
        padding: string;
        height: string;
        paddingX: string[];
        borderRadius: string;
        borderBottomWidth: string;
        borderBottomStyle: string;
        borderBottomColor: string;
    };
    closeBar: {
        paddingTop: string[];
        paddingBottom: string[];
        height: string[];
        paddingX: string[];
    };
    backdrop: {
        width: string;
        height: string;
        bg: string;
        position: string;
        top: number;
        left: number;
        flexDirection: string;
        alignItems: string;
        display: string;
        zIndex: number;
    };
    box: {
        modal: {
            bg: string;
            borderRadius: string;
            boxShadow: string;
            outline: string;
            margin: string;
            position: string;
            zIndex: string;
            width: string[];
            justifyContent: string;
        };
        dialog: {
            bg: string;
            borderRadius: string;
            boxShadow: string;
            outline: string;
            margin: string;
            position: string;
            zIndex: string;
            width: string[];
        };
    };
    body: {
        modal: {
            maxWidth: string;
            overflowY: string;
            maxHeight: string;
            paddingX: string[];
            paddingTop: string[];
            fontSize: string;
        };
        dialog: {
            maxWidth: string;
            overflowY: string;
            maxHeight: string[];
            paddingX: string[];
        };
    };
};
export default modal;
