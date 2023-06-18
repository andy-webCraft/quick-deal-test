import type { Store } from "vuex";
import type { StoreType } from ".";

export const saveStateInLocal = (store: Store<StoreType>) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === "setTasks") return;

    localStorage.setItem("qd-tasks", JSON.stringify(state.tasks));
  });
};
