import "./App.css";

import { TableContainer, Table, Button, Input } from "@material-ui/core";

import MainTableHead from "./components/MainTableHead";
import MainTableRow from "./components/MainTableRow";
import ModalWindow from "./components/ModalWindow";
import {useState, useEffect} from "react";
import Header from "./components/Header";
import {useHttp} from "./hook/htttp.hook";

 function App() {
    const {request} = useHttp();
    const [data, setData] = useState([]);
    const [checked, setChecked] = useState(null);
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState("");
    useEffect( async () => {
    const res = await request('api/posts','GET');
        setData(res);
    },[])

    const handleAdd = () => {
        setMode("add");
        setOpen(true);
    };
    const handleDelete = async () => {
        await request(`api/posts/${checked}`,'DELETE')
        const newData = await data.filter((elem) => elem._id !== checked);
        setData([...newData]);
    };
    const handleEdit = () => {
        setMode("edit");
        setOpen(true);
    };
    return (
        <>
          <Header/>
            <ModalWindow
                checked={checked}
                open={open}
                data={data}
                setData={setData}
                setOpen={setOpen}
                mode={mode}
            />
            <main className="container">
                <TableContainer>
                    <Table aria-label="simple table">
                        <MainTableHead />
                        <MainTableRow
                            data={data}
                            setData={setData}
                            checked={checked}
                            setChecked={setChecked}
                        />
                    </Table>
                </TableContainer>
                <div className="container-button">
                    <Button variant="contained" onClick={handleAdd}>
                        ADD
                    </Button>
                    <Button variant="contained" onClick={handleEdit}>
                        EDIT
                    </Button>
                    <Button variant="contained" onClick={handleDelete}>
                        DELETE
                    </Button>
                </div>
            </main>
        </>
    );
}

export default App;
