import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-spacing: 16px;
  border-collapse: collapse;
  table-layout: fixed;
`;

const Thead = styled.thead`
  color: ${({ theme }) => theme.colors.gray200};

  td {
    padding: 8px 0;
    padding-bottom: 32px;
  }
`;

const Tbody = styled.tbody`
  tr {
    border-bottom: 1px solid #dfe0eb;
  }

  tr:last-child {
    border-bottom: 0;
  }
`;

const Td = styled.td`
  padding: 16px 8px;
  text-align: ${({ align }) => align || 'left'};
`;

const Tr = styled.tr``;

type TableProps<T> = {
  rows: T[];
  columns: Column<keyof T>[];
};

export default function TableExtended<T>({ rows, columns }: TableProps<T>) {
  return (
    <Table>
      <Thead>
        <Tr>
          {columns.map((column, index) => (
            <Td align={column.align} key={index}>
              {column.headerName}
            </Td>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, index) => (
          <Tr key={index}>
            {columns.map((column, columnIndex) =>
              column.render ? (
                <Td align={column.align} key={columnIndex}>
                  {column.render(row[column.field])}
                </Td>
              ) : (
                <Td align={column.align} key={columnIndex}>
                  {row[column.field]}
                </Td>
              ),
            )}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
