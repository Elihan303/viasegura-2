export interface IGenericTableProps<T> {
  title: string;
  headers: string[];
  fetchData: () => Promise<T[]>;
  deleteItem: (id: string) => Promise<void>;
  navigateToEdit: (item: T) => void;
  createButtonPath: string;
}
