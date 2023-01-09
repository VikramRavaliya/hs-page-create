import axios from "axios";
import fetch from "node-fetch";
import dotenv from 'dotenv';

// let id = process.env.ACCESS_TOKEN_LIVE;
// let ACCESS_TOKEN = process.env.LIVE_PAGE_ID;

const id = '';
const ACCESS_TOKEN = '';


class UserModel {
    getPage = async (response) => {

        const response1 = await axios({
            method: 'GET',
            url: `https://api.hubapi.com/content/api/v2/pages/${id}`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        })
            // .then((response1) => {
            //     return response.json();
            // })
            .then(function (response1) {
                return new Promise(resolve => {
                    resolve(response1, null, 2);
                });

            })
            .catch(function (error) {
                return error;
            })
        return response1
    };

    createPage = async (data) => {

        console.log(data)

        // fetch(`https://api.hubapi.com/content/api/v2/pages`, {
        //     method: 'POST',
        //     // body: { data },
        //     body: JSON.stringify({ data }),
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${ACCESS_TOKEN}`,
        //     },
        // })
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         return 'data insert successfully !';
        //     })
        //     .catch(error => console.error(error));
    }
}


export default new UserModel;