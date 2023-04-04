export const actionCreators = {

    sendMessage() { return { type: "SEND-MESSAGE" } },
    changesNewMessage(text) {
        return {
            type: "CHANGES-NEW-MESSAGE",
            text,
        }
    },
}


