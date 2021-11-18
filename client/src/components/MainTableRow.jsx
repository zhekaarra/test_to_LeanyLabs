import {
  TableRow,
  TableCell,
  Grid,
  Typography,
  Checkbox,
} from "@material-ui/core";

const MainTableRow = (props) => {
  const { data, checked, setChecked } = props;

  return (
    <>
      {data.map((elem) => {
        return (
          <TableRow key={elem._id}>
            <TableCell>
              <Grid container>
                <Grid>
                  <Checkbox
                    checked={elem._id === checked}
                    onClick={(event) => {
                      if (!event.currentTarget.checked) {
                        setChecked(elem._id);
                      }
                    }}
                    id={elem.id}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                  />
                </Grid>
              </Grid>
            </TableCell>
            <TableCell>
              <Grid container>
                <Grid lg={3}>
                  <Typography>{elem.id}</Typography>
                </Grid>
              </Grid>
            </TableCell>
            <TableCell>
              <Grid container>
                <Grid lg={3}>
                  <Typography>{elem.category}</Typography>
                </Grid>
              </Grid>
            </TableCell>
            <TableCell>
              <Grid container>
                <Grid lg={3}>
                  <Typography>{elem.brand}</Typography>
                </Grid>
              </Grid>
            </TableCell>
            <TableCell>
              <Grid container>
                <Grid lg={3}>
                  <Typography>{elem.model}</Typography>
                </Grid>
              </Grid>
            </TableCell>
            <TableCell>
              <Grid container>
                <Grid lg={3}>
                  <Typography>{elem.price}</Typography>
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
export default MainTableRow;
