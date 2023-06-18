export interface CreateTaskDTO {
  title: string;
  body: string;
}

export interface ITask extends CreateTaskDTO {
  id: number;
}
