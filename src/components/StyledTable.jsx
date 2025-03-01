import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);`;

const TableHeader = styled.th`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  text-align: left;`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;  }
`;

const TableCell = styled.td`
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;`;

const TableContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;  overflow-x: auto;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;`;

export default function StyledTable({ data }) {
  if (!data) {
    return <LoadingMessage>Loading data...</LoadingMessage>;
  }

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}
