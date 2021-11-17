import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Modal, Box } from "@material-ui/core";
/* import Box from "@mui/material/Box"; */
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import "../css/mainTable.css";

import MainTableHead from "./MainTableHead";
const MainTable = () => {
    const [newCategory, setNewCategory] = useState("");
    const [newBrand, setNewBrand] = useState("");
    const [newModel, setNewModel] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [currentId, setCurrentId] = useState("");
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const handleAddElem = (event) => {
        event.preventDefault();
        const newData = {
            id: 9,
            category: newCategory,
            brand: newBrand,
            model: newModel,
            price: newPrice,
        };

        setData([...data, newData]);
    };

    const handleAdd = () => {
        handleOpen();
    };
    const handleDelete = () => {
        return null;
    };
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="container">
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <form onSubmit={handleAddElem}>
                                <input
                                    required
                                    onChange={(event) => {
                                        setNewCategory(event.currentTarget.value);
                                    }}
                                />
                                <input
                                    required
                                    onChange={(event) => {
                                        setNewBrand(event.currentTarget.value);
                                    }}
                                />
                                <input
                                    required
                                    onChange={(event) => {
                                        setNewModel(event.currentTarget.value);
                                    }}
                                />
                                <input
                                    required
                                    onChange={(event) => {
                                        setNewPrice(event.currentTarget.value);
                                    }}
                                />
                                <Button variant="contained" type="submit">
                                    SAVE
                                </Button>
                                <Button variant="contained">CANCEL</Button>
                            </form>

                            {/*    <TextField id="2" label="Outlined" variant="outlined" />
              <TextField id="3" label="Outlined" variant="outlined" />
              <TextField id="4" label="Outlined" variant="outlined" /> */}

                            {/*  <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"s
              >
                Text in a modal
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography> */}
                        </Box>
                    </Fade>
                </Modal>
                <TableContainer>
                    <Table aria-label="simple table">
                        <MainTableHead> </MainTableHead>
                    </Table>
                </TableContainer>
                <div className="container-button">
                    <Button variant="contained" onClick={handleAdd}>
                        ADD
                    </Button>
                    <Button variant="contained">EDIT</Button>
                    <Button variant="contained" onClick={handleDelete}>
                        DELETE
                    </Button>
                </div>
            </div>
        </>
    );
};

export default MainTable;
