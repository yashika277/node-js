
import React from 'react'
const BookSection = ({ data }) => {


    // console.log(data);
    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap '>
            {data && data.map((item, index) =>
                <div className='m-3' style=
                    {{
                        height: "350px",
                        width: "230px",
                        border: "1px solid white",
                        borderRadius: "10px"
                    }}>
                    <div>
                        <img style=
                            {{
                                width: "230px",
                                height: "210px",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px"
                            }}
                            className='img-fluid' src={item.image} alt="/" />
                    </div>

                    <h6 style={{ fontSize: "17px" }} className='text-white px-3 my-1'>{item.bookName.slice(0, 20)}...</h6>
                    <b style={{ fontSize: "30px", color: "red" }} className='mb-2 px-3'>Rs. {item.price}</b>
                    <div className='d-flex justify-content-around align-items-center'>
                        <button className='btn btn-success' >UPDATE</button>
                        <button className='btn btn-danger ' >DELETE</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BookSection
