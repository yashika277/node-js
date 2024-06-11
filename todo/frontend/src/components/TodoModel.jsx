import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import  { useState, useEffect, useRef } from 'react'
import { addTodoData, getTodoList, updateTodoData, searchTodos } from '../redux-thunk/action/todoAction'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Dispatch } from 'redux';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: ' rgb(52, 51, 51)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch'
        },
    },
}));


const TodoModel = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { viewId } = useSelector((state) => state.todo)

    const modalRef = useRef(null);
    const [todoData, setTodoData] = useState({})
    function handleChange(e) {
        setTodoData({ ...todoData, [e.target.name]: e.target.value })
    }
    const [searchTodo, setSearchTodo] = useState("")

    function handleSearch(e) {
        setSearchTodo(e.target.value)
    }

    // useEffect(() => {
    //     console.log("searchTodo", searchTodo);
    //     dispatch(searchTodos(searchTodo))

    // }, [searchTodo])



    function addtodos() {
        dispatch(addTodoData(todoData))
    }
    function updateData(id) {
        dispatch(updateTodoData(todoData))
    }
    useEffect(() => {
        if (!open) {
            setTodoData({
                name: ""
            })
        }
    }, [open])

    useEffect(() => {
        dispatch(getTodoList())
    }, [dispatch])

    useEffect(() => {
        if (viewId) {
            axios.get(`http://localhost:6060/v1/todo/viewList/${viewId}`)
                .then((res) => {
                    setTodoData(res.data);
                    setOpen(true)
                })
        }
    }, [viewId])


  return (
    <>
            <div>
                <AppBar position="static" style={{ backgroundColor: "#10161c" }} >
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-7">
                            <Toolbar style={{ marginTop: "150px" }}>
                                <Search className='search'>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        // onChange={handleSearch}
                                        value={searchTodo}
                                        placeholder="Search…"
                                        className='searchInput'
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                                <Button onClick={handleOpen} style={{ backgroundColor: "#33393d", marginLeft: "10px", padding: "10px", color: "white" }}>Add Todos</Button>
                            </Toolbar>
                        </div>
                        <div className="col-2"></div>
                    </div>

                </AppBar>

                <Modal

                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h5>ADD TASK</h5>
                        <br />
                        <input type="text" placeholder='Add Todo Here' name='task' value={todoData.task} onChange={handleChange} style={{ border: "0px", boxShadow: "3px 2px 3px 2px #4e4e4e" }} />
                        <Typography id="modal-modal-description" style={{ marginTop: "30px" }} sx={{ mt: 2 }}>
                            <Button variant="contained" onClick={() => {


                                if (todoData._id && todoData) {
                                    updateData(todoData._id)
                                    setOpen(false)
                                } else {
                                    addtodos()
                                    setOpen(false)
                                }
                            }}>{todoData._id && todoData ? "update" : "add"}</Button>
                            <Button variant="contained" style={{ marginLeft: "10px" }} onClick={() => {
                                setOpen(false)
                            }}>CANCLE</Button>

                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
  )
}

export default TodoModel
