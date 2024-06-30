import axios  from 'axios';
import React, { useState } from 'react'

const AddBooks = () => {
    const [Data, setData] = useState({
        bookName: "",
        author: "",
        description: "",
        price: "",
        image: ""
    });

   

    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    }

    const submit = async (e) => {
        e.preventDefault();
        await axios
            .post("http://localhost:1000/api/v1/add", Data)
            .then((res) => alert(res.data.message));
        setData({
            bookName: "",
            author: "",
            description: "",
            price: "",
            image: ""
        });
    }

    
    console.log(Data);
    return (
        <div>
            <div className='bg-dark d-flex justify-content-center align-items-center'
                style={{ minHeight: "91.5vh" }}>
                <div className='container p-4'>
                    <div className="mb-3 ">
                        <label for="exampleFormControlInput1" className="form-label text-white">
                            Book Name
                        </label>
                        <input type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter Book Name"
                            name='bookName'
                            value={Data.bookName}
                            onChange={change}
                        />
                    </div>
                    <div className="mb-3 ">
                        <label for="exampleFormControlInput1" className="form-label text-white">
                            Author
                        </label>
                        <input type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter The Name Of Author"
                            name='author'
                            value={Data.author}
                            onChange={change}
                        />
                    </div>
                    <div className="mb-3 ">
                        <label for="exampleFormControlInput1" className="form-label text-white">
                            Description
                        </label>
                        <input type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter Description of Book"
                            name='description'
                            value={Data.description}
                            onChange={change}
                        />
                    </div>
                    <div className="mb-3 ">
                        <label for="exampleFormControlInput1" className="form-label text-white">
                            Image
                        </label>
                        <input type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter The  URL Of The Image"
                            name='image'
                            value={Data.image}
                            onChange={change}
                        />
                    </div>
                    <div className="mb-3 ">
                        <label for="exampleFormControlInput1" className="form-label text-white">
                            Price
                        </label>
                        <input type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Enter The  Price"
                            name='price'
                            value={Data.price}
                            onChange={change}
                        />
                    </div>
                    <button className='btn btn-success' onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddBooks
