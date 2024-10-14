import {API} from './API.js'
import { useEffect, useState } from 'react';



export async function encurtar (inputValue) {
    let data = null, error = null;
    
    try {
        const response = await fetch(`${API}`, {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({URL: inputValue})
        });

        if(!response.ok) {
            throw new Error("Erro ao buscar dados");
        }

        const result = await response.json();
        data = result;

    } catch (err) {
        console.log("Erro no GET: ", err)
        error = err;
    } 

    return {data, error}
}