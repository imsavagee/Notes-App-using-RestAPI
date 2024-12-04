import axios from 'axios'

    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/",
    })

    // get method
    export const getPost =()=>{
        return api.get("/posts");
    }

    // delete method
    export const deletePost=(id)=>{
        return api.delete(`/posts/${id}`)
    }

    //post method
    export const post=(data)=>{
        return api.post("/posts",data)
    }

    //put
    export const put=(id,data)=>{
        return api.put(`/posts/${id}`,data );
    }
   