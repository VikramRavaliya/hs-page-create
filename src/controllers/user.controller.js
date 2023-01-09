import CircularJSON from 'circular-json';
import dotenv from 'dotenv';
import fetch from "node-fetch";
import PageModel from '../models/getpage.model.js';


class UserController {

    create = async (req, res, next) => {
        res.render('add', {
            name: '',
            author: '',
            key: ''
        });
    };
    post = async (req, res, next) => {

        const data = await PageModel.getPage();
        const str = CircularJSON.stringify(data);
        const a = JSON.parse(str)
        console.log(a)
        
        // if (str !='') {
        //     const post = await PageModel.createPage(str);
        //     console.log(post)

        // } else {
        //     console.log('somthing wrong')   
        // }
    };




}

export default new UserController;