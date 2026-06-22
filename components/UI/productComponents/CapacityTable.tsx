import { TableContainer, Table, TableBody, TableRow, TableCell, Paper } from '@mui/material';


export default function CapacityTable({ dbProductString }: { dbProductString: string }) {
  // 1. Parse the dynamic string into a clean array of objects
  const products = dbProductString
    .split('|') // Split rows by pipe
    .map((item) => item.trim()) // Clean up whitespace/newlines
    .filter((item) => item.length > 0) // Remove empty trailing items
    .map((item, index) => {
      const [name, category] = item.split('::'); // Split columns by double colon
      return { id: index + 1, name, category };
    });

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <Table aria-label="transposed data table">
        <TableBody>
          
          {/* Row 1: Model Name */}
          <TableRow>
            <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', backgroundColor: '#41939C21', width: '20%' }}>
              Model
            </TableCell>
            {products.map((product) => (
              <TableCell key={product.id} sx={{ fontWeight: 'bold' }}>
                {product.name}
              </TableCell>
            ))}
          </TableRow>

          {/* Row 2: Capacity / Category */}
          <TableRow>
            <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', backgroundColor: '#41939C21' }}>
              Capacity
            </TableCell>
            {products.map((product) => (
              <TableCell key={product.id}>
                {product.category}
              </TableCell>
            ))}
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
}