import {
    Modal,
    Box,
    Fade,
    Button,
    Input,
    Backdrop,
} from "@material-ui/core";

import LoadingButton from '@mui/lab/LoadingButton';

import {useState,} from "react";
import "../css/modal.css";

import {useHttp} from "../hook/htttp.hook";

const ModalWindow = (props) => {
    const {open, data, setData, setOpen, mode, checked} = props;
    const [newCategory, setNewCategory] = useState("");
    const [newBrand, setNewBrand] = useState("");
    const [newModel, setNewModel] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [load, setLoad] = useState();
    const {request} = useHttp();


    if (mode === 'edit') {
        let state = 'Edit New Item'
    }
    ;


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
    const handleAddElem = async () => {
        let newData = {
            category: newCategory,
            brand: newBrand,
            model: newModel,
            price: newPrice,
        };

        if (mode === 'add') {
            try {
                newData.id = generateId();
                await request('api/posts', 'POST', {...newData})
                setData([...data, newData]);
                setOpen(false);
            } catch (e) {
                console.log(e);
            }
        }
        if (mode === 'edit') {
            try {
                data.map(async elem => {
                    if (elem._id === checked) {
                        const i = data.indexOf(elem);
                        newData.id = elem.id;
                        newData._id = elem._id;
                        data[i] = newData;
                        setData(data);
                        setLoad(true);
                        await request('api/posts', 'PUT', newData);
                        setLoad(false);
                    }
                    setOpen(false);
                    }
                )
            } catch (e) {
                console.log(e);
            }
        }
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
                    <h3>{mode === 'edit' ? 'Edit New Item' : 'Add New Item'}</h3>
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
                        <container className='container-button-modal'>
                            <LoadingButton
                                variant="contained"
                                loading={load}
                                onClick={handleAddElem}
                                loadingPosition="start"
                                style={{width: '100px', backgroundColor: '#2BA382'}}
                            >
                                {mode === 'edit' ? 'Save' : 'Add'}
                            </LoadingButton>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setOpen(false);
                                }}
                                style={{width: '100px'}}
                            >
                                CANCEL
                            </Button>
                        </container>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default ModalWindow;
