import { create } from "zustand";
import { createSetState, SetState } from "./util";

interface IChatStates {
  screen: "chat-ui" | "messages";

  readonly setChatState: SetState<Omit<IChatStates, "setChatState">>;
}

const useChatStore = create<IChatStates>((set) => ({
  screen: "messages",

  setChatState: createSetState<Omit<IChatStates, "setChatState">>(set),
}));

export default useChatStore;
