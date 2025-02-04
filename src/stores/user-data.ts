import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createSetState, SetState } from "./util";

export type IUserData = {
  title?: string;
  id: string;
  slug?: string;
  firstName: string;
  lastName: string;
  email: string;
  about?: string;
  telephone?: string;
  verified: boolean;
  roles: string[];
  createdAt: string;
  updatedAt: string;
};

interface IUserDataStates {
  userData: Partial<IUserData>;

  readonly setUserDataState: SetState<
    Omit<IUserDataStates, "setUserDataState">
  >;
}

const localStorageKey = "user-data-store";
const initialPersistedState = (() => {
  const storedData =
    typeof window !== "undefined"
      ? localStorage.getItem(localStorageKey)
      : null;

  return storedData ? JSON.parse(storedData).state : { userData: {} };
})();

const useUserDataStore = create<IUserDataStates>()(
  persist(
    (set) => ({
      userData: initialPersistedState.userData || {},
      setUserDataState:
        createSetState<Omit<IUserDataStates, "setUserDataState">>(set),
    }),
    {
      name: localStorageKey,
      partialize: (state) => ({ userData: state.userData } as IUserDataStates),
    }
  )
);

export default useUserDataStore;
