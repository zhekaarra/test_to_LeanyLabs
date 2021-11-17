import {
  Modal,
  Box,
  Fade,
  Button,
  Typography,
  Input,
  Backdrop,
} from "@material-ui/core";

import { useState } from "react";

import "../css/modal.css";
const ModalAdd = (props) => {
  const { open, data, setData, setOpen, style } = props;
  const [newCategory, setNewCategory] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newPrice, setNewPrice] = useState("");

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
  const handleAddElem = (event) => {
    event.preventDefault();
    const newData = {
      id: generateId(),
      category: newCategory,
      brand: newBrand,
      model: newModel,
      price: newPrice,
    };
    setData([...data, newData]);
    setOpen(false);
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

export default ModalAdd;
