import "./App.css";
import "./css/MuiButton-contained.css";
import {TableContainer, Table, Button} from "@material-ui/core";

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

    useEffect(async () => {
        const res = await request('api/posts', 'GET');
        setData(res);
    }, [])

    const handleAdd = async () => {
        setMode("add");
        setOpen(true);
    };
    const handleDelete = async () => {
        await request(`api/posts/${checked}`, 'DELETE')
        const newData = await data.filter((elem) => elem._id !== checked);
        setChecked(false)
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
                        <MainTableHead/>
                        <MainTableRow
                            data={data}
                            setData={setData}
                            checked={checked}
                            setChecked={setChecked}
                        />
                    </Table>
                </TableContainer>
                <div className="container-button">
                    <Button
                        style={{backgroundColor: '#2BA382'}}
                        color='primary'
                        variant="contained"
                        onClick={handleAdd}
                    >
                        ADD
                    </Button>
                    <Button
                        style={{backgroundColor: '#2BA382'}}
                        color='primary'
                        variant="contained"
                        onClick={handleEdit}
                        disabled={!checked}
                    >
                        EDIT
                    </Button>
                    <Button
                        style={{backgroundColor: '#D25F5F'}}
                        color='primary'
                        variant="contained"
                        onClick={handleDelete}
                        disabled={!checked}
                    >
                        DELETE
                    </Button>
                </div>
            </main>
        </>
    );
}

export default App;
