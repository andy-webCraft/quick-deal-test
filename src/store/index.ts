import type { CreateTaskDTO, ITask } from "@/types";
import Vue from "vue";
import Vuex from "vuex";
import { saveStateInLocal } from "./plugins";

Vue.use(Vuex);

export type StoreType = {
  tasks: ITask[];
};

export const store = new Vuex.Store<StoreType>({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasksList: ITask[]) {
      state.tasks = tasksList;
    },

    addTask(state, newTask: CreateTaskDTO) {
      state.tasks = [
        {
          id: Date.now(),
          ...newTask,
        },
        ...state.tasks,
      ];
    },

    updateTask(state, task: ITask) {
      const target = state.tasks.findIndex((item) => item.id === task.id);
      if (target < 0) return;

      state.tasks[target] = task;
    },

    deleteTask(state, taskId: number) {
      state.tasks = state.tasks.filter((item) => item.id !== taskId);
    },
  },
  actions: {
    getStateFromLocal({ commit }) {
      const persistState = localStorage.getItem("qd-tasks");
      if (!persistState) return;

      commit("setTasks", JSON.parse(persistState));
    },
  },
  plugins: [saveStateInLocal],
});

export const useStore = () => store;
