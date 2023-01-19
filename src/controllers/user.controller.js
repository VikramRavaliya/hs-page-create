import CircularJSON from 'circular-json';
import dotenv from 'dotenv';
import fetch from "node-fetch";
import PageModel from '../models/getpage.model.js';



class UserController {

    showPage = async (req, res, next) => {
        res.render('add');
    };
    post = async (req, res) => {

        const data = await PageModel.getPage();
        const str = JSON.stringify(data);
        // const a = JSON.parse(str)
        // const data = getPageFunction();
        // console.log(str)
        
        if (data !=='') {
            const post = await PageModel.createPage(str);
            console.log('post submited')

        } else {
            console.log('somthing wrong')   
        }
    };




}

export default new UserController;