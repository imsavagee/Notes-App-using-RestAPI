import React, { useEffect, useState } from 'react'
import { post, put } from '../API/PostApi'

function Form({ data, setdata, update, setUpdate }) {
    const [input, setInput] = useState({
        title: "",
        body: "",
    })

    useEffect(() => {
        update && setInput({
            id: update.id || "",
            title: update.title || "",
            body: update.body || ""
        })
    }, [update])

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        setInput((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    // hitting API ,adding data api
    async function addData(addData) {
        const res = await post(addData);
        if (res.status === 201) {
            // console.log(res.data)
            setdata([...data, res.data])
        }
    }

    //post mehtod
    function handleSubmitPost(e) {
        e.preventDefault()
        if (Object.keys(update).length != 0) {
            updateData(update.id, input)
            setInput(() => {
                return {
                    title: "",
                    body: "",
                }
            })
            setUpdate(() => {
                return {
                    id:"",
                    title: "",
                    body: "",
                }
            })
        } else {
            if(input.title!=""&&input.body!=""){
                addData(input)
                setInput(() => {
                    return {
                        title: "",
                        body: "",
                    }
                })
                alert("Data successfully Added")

            }else{
                alert("Enter a valid data")
            }
           
        }


    }

    //put Mehtod or update
    async function updateData(id, updateData) {
        const res = await put(id, updateData);
        try {
            if (res.status === 200) {
                setdata((prev) => {
                    return prev.map(items => {
                        return items.id === res.data.id ? res.data : items
                    })
                })
            }
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <>
            <div className="w-4 p-5 text-center" style={{ width: "100vw", margin: "0 auto" }}>
                <form onSubmit={handleSubmitPost}>
                    <div className="form-floating me-3 d-inline-block">
                        <input type="text" className="form-control" id="title" name='title' placeholder="Enter Title"
                            value={input.title} onChange={(e) => handleChange(e)} />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="form-floating me-3 d-inline-block">
                        <input type="text" className="form-control" id="body" name='body' placeholder="Enter text..."
                            value={input.body} onChange={(e) => handleChange(e)} />
                        <label htmlFor="body">Body</label>
                    </div>
                    {
                        Object.keys(update).length === 0 ?
                            <button className='btn btn-primary  px-4' type='submit' >ADD</button> : <button className='btn btn-primary  px-4' type='submit' >UPDATE</button>
                    }

                </form>
            </div>
        </>
    )
}

export default Form