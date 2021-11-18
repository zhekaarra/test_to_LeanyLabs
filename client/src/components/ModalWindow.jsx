import {
  Modal,
  Box,
  Fade,
  Button,
  Typography,
  Input,
  Backdrop,
} from "@material-ui/core";

import { useState, useEffect } from "react";
import "../css/modal.css";
import {useHttp} from "../hook/htttp.hook";

const ModalWindow = (props) => {
  const { open, data, setData, setOpen, mode, checked } = props;
  const [newCategory, setNewCategory] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [editData, setEditData] = useState({});
  const {request} = useHttp();


  const generateId = () => {
    const id = Math.floor(Math.random() * (1000 - 1) + 1);
    data.map((e) => {
      if (e.id === id) generateId();
    });
    return id;
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddElem = async (event) => {
    event.preventDefault();
    const newData = {
      id: generateId(),
      category: newCategory,
      brand: newBrand,
      model: newModel,
      price: newPrice,
    };
    const dataUp = await request('api/posts','POST',{...newData})
    console.log(dataUp);
    setData([...data, newData]);
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
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
          <form autoComplete="off" onSubmit={handleAddElem}>
            <Input
              id="standard-basic"
              placeholder="Category"
              variant="standard"
              required
              onChange={(event) => {
                setNewCategory(event.currentTarget.value);
              }}
            />

            <Input
              id="standard-basic"
              placeholder="Brand"
              variant="standard"
              required
              onChange={(event) => {
                setNewBrand(event.currentTarget.value);
              }}
            />

            <Input
              id="standard-basic"
              placeholder="Model"
              variant="standard"
              required
              onChange={(event) => {
                setNewModel(event.currentTarget.value);
              }}
            />

            <Input
              id="standard-basic"
              placeholder="Price"
              variant="standard"
              required
              onChange={(event) => {
                setNewPrice(event.currentTarget.value);
              }}
            />

            <Button variant="contained" type="submit">
              SAVE
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(false);
              }}
            >
              CANCEL
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalWindow;
