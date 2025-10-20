import type { Task } from "../../data/models/task.model";
import axiosInstance from "../axios_instance";

export const taskApi = {
  getAll: async (): Promise<Task[] > => {
const response = await axiosInstance.get('/Tasks');
return response.data;
},

}