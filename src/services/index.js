import { Api } from "./api/api-contact"

const getAll = async() =>{
    try{
        const {data} = await Api.get('/contact ')

        return data
    }catch(error){
        console.log(error)
    }
}
const getUser = async(id) =>{
    try {
        const {data} = await Api.get(`/contact/${id}`)
        if (data) {
            return data;
          }
        return new Error('Erro ao consultar o registro.');
    } catch (error) {
        return console.log(error)
    }
}


const updateUser = async(id, data) =>{
    try {
         return await Api.get(`contact/${id}`, data)
          

        } catch (error) {
        console.error(error);
    }
}

const updatePhone = async(id, data) =>{
    try {
         return await Api.get(`/phone/${id}`, data)
          

        } catch (error) {
        console.error(error);
    }
}
const createUser = async(data, phone) =>{
    try {
             const resonse = await Api.post(`contact`,data)

            console.log(resonse);
        } catch (error) {
        console.error(error);
    }
}


const createPhone = async(id,data) =>{
    try {
         return await Api.post(`phone/${id}`,data)
          

        } catch (error) {
        console.error(error);
    }
}


const deleteUser = async(id) =>{
    try {
        await Api.delete(`contact/${id}`);
      } catch (error) {
        console.error(error);
        
      }
}

export const ContactServices= {
    getAll,
    getUser,
    updateUser,
    deleteUser,
    createPhone,
    updatePhone,
    createUser
}