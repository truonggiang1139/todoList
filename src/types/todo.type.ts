export type typePriority = "High" | "Medium" | "Low";
export type typeTodo = {
  id: string;
  name: string | undefined;
  priority: typePriority;
  checked: boolean;
};
