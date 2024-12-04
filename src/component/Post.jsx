import { useEffect, useState } from "react";
import { getPost, deletePost } from "../API/PostApi";
import Form from "./Form";
import { useAuth0 } from "@auth0/auth0-react";
import LoginForm from "./LoginForm";


function  Post ()  {
    const [data, setdata] = useState([])
    const [update, setUpdate] = useState({})

    useEffect(() => {
        getdata();
    }, [])
    const {logout} = useAuth0();

    //get method
    async function getdata() {
        const res = await getPost()
        //const data = res.data
        setdata(() => res.data)
        // console.log(data)
    }

    //delete method
    async function handleDelete(id) {
        const res = await deletePost(id)

        try {
            if (res.status === 200) {
                const newdata = data.filter((item) => item.id !== id)
                setdata(() => newdata)
            }
        } catch (e) {
            console.log("error in deleting")
        }

    }

    function handleUpdate(item) {
        setUpdate(item)

       console.log(update);
    }


    return (
        <>


            <h1 className="text-center">RestAPI using Axios</h1>
             <ol className="d-flex justify-content-center align-item-center flex-wrap " type="1" >
                            <Form data={data} setdata={setdata} update={update} setUpdate={setUpdate} />
                            {/* <div style={{display:"block",width:"100vw",textAlign:"center"}}>                
                                <h3>Welcome {user.name} to your note</h3>
                                <img src={user.picture} alt="userImg"/>

                             </div> */}
                {
                    data?.map((item) => {
                        const { id, title, body } = item;
                        return (

                            <li className="m-3 px-4 py-3" key={id}
                                style={{
                                    width: "28rem",
                                    border: "1px solid #d2d2d2",
                                    borderRadius: "1rem",
                                }}>
                                <div className="card-body" >
                                    <h5 className="card-title" >{title} </h5>
                                    <p className="card-text" >{body}</p>
                                    <button className="btn btn-primary m-3" onClick={() => handleUpdate(item)}>Edit</button>
                                    <button className="btn btn-danger m-3" onClick={() => handleDelete(id)}>Delete</button>
                                </div>
                            </li>


                        )
                    })
                }
                <div style={{display:"block",width:"100vw", textAlign:"center"}} >
                <button className="btn btn-danger px-5" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button>
                </div>
            </ol> 


            


        </>
    )
}

export default Post;