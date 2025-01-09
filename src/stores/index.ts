import { create } from "zustand";
import { createSetState, SetState } from "./util";

interface IGlobalStates {
  showMobileSidebar: boolean;

  readonly setGlobalState: SetState<Omit<IGlobalStates, "setGlobalState">>;
}

const useGlobalStore = create<IGlobalStates>((set) => ({
  showMobileSidebar: false,

  setGlobalState: createSetState<Omit<IGlobalStates, "setGlobalState">>(set),
}));

export default useGlobalStore;
