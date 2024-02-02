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
        let response= await Api.get(`/contact/${id}`)
        if (response) {
            return response.data;
          }
        
    } catch (error) {
        return new Error(`Erro ao consultar o registro ${error}.`);
    }
}


const updateUser = async(id, name, age, phone_number) =>{
    try {
         const response =  await Api.path(`contact/${id}`, {name, age, phone_number})
         updatePhone(id,phone_number)
          return response

        } catch (error) {
        return error
    }
}

const updatePhone = async(id,phone_number) =>{
    try {
         return await Api.patch(`/phone/${id}`, phone_number)
          

        } catch (error) {
        console.error(error);
    }
}
 const createUser = async(name, age, phone_number) =>{
    try {
        // console.log(name, age)
        // const data=[ name, age]
             let response = await Api.post(`contact`,{name, age})
             const id = response.data.id;
             const phone_data  = await createPhone(id,phone_number)
             console.log(phone_number);
             console.log(response.data);
             console.log(phone_data)
             return response.status , response.statusText

        } catch (error) {
            return error;
    }
}



const createPhone = async(id,phone_number) =>{
    try {
        
        let response =  await Api.post(`phone/${id}`,{phone_number})
          
        return response
        } catch (error) {
        return error
    }
}


const deleteUser = async(id) =>{
    try {
        let response =   await Api.delete(`contact/${id}`);
        return response;
      } catch (error) {
        return error;
        
      }
}

export const ContactServices= {
    getAll,
    getUser,
    updateUser,
    deleteUser,
    updatePhone,
    createUser
}