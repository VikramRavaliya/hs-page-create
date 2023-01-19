import axios from "axios";
import fetch from "node-fetch";
import dotenv from 'dotenv';


const id = ;
const ACCESS_TOKEN = '';


class UserModel {
    getPage = async () => {

        let data = await fetch(`https://api.hubapi.com/content/api/v2/pages/${id}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'charset': 'utf-8',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            }
        })

        let JsonData = await data.json();
        return JsonData;
    };

    createPage = async (data) => {

        console.log(data)

        //     fetch(`https://api.hubapi.com/content/api/v2/pages`, {
        //         method: 'POST',
        //         body: { data },
        //         // body: JSON.stringify({ data }),
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json',
        //             Authorization: `Bearer ${ACCESS_TOKEN}`,
        //         },
        //     })
        //         .then((response) => {
        //             return response.json();
        //         })
        //         .then((data) => {
        //             return 'data insert successfully !';
        //         })
        //         .catch(error => console.error(error));
    }
}


export default new UserModel;