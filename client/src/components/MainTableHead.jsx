import { TableHead, TableRow, TableCell, Grid } from "@material-ui/core";

const MainTableHead = () => {
  const columns = [
    { id: "checkbox", label: "", lg: 1 },
    { id: "id", label: "ID", lg: 2 },
    { id: "category", label: "Category", lg: 2 },
    {
      id: "brand",
      label: "Brand",
      lg: 2,
    },
    {
      id: "model",
      label: "Model",
      lg: 2,
    },
    {
      id: "price",
      label: "Price",
      lg: 2,
    },
  ];

  return (
    <>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.id}>
              <Grid container>
                <Grid lg={column.lg}>{column.label} </Grid>
              </Grid>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};
export default MainTableHead;
