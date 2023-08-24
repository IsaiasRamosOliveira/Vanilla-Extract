import { IMessage } from "../../interfaces/IMessage";

class MessageService {
    getAllMessages = async (): Promise<IMessage[]> => {
        const resJSON = await fetch("http://localhost:3001/messages");
        const res = await resJSON.json();
        return res;
    }
}

export default new MessageService;