import axios from 'axios';
import dotenv from 'dotenv';
import fetch from "node-fetch";

const id = 96710367119;
const ACCESS_TOKEN = 'pat-na1-8c5d00c7-b8de-4604-9871-d524f4a74d44';


var config = {
    method: 'get',
    url: `https://api.hubapi.com/content/api/v2/pages/${id}`,
    headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
};

async function getPageFunction() {
    await axios(config)
        .then(function (response) {
            return new Promise(resolve => {
                resolve(resolve);
                // console.log(response)
            });
        })
        .catch(function (error) {
            console.log(error);
        });

}

export default getPageFunction();