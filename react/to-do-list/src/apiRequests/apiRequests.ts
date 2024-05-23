// import { axios } from 'axios';

import { RequestOptions } from "http";

export const apiRequest = async (url: string, requestOptions: RequestInit, errMsg = null) =>{
    try{
        const response = await fetch(url, requestOptions);
        if(!response.ok) throw Error("Please reload the page");
        return await response.json();
    }catch(err){
        console.log(err);
    }finally{

    }
}
