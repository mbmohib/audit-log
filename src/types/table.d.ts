type Column<T> = {
  field: T;
  headerName: string;
  render?: (item: any) => React.ReactNode;
  align?: 'left' | 'right';
};
