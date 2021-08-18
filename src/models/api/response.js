const responseModel=(status="success",message="OK",data=null)=>{
    //status -success or faile or error
    return {
        status:status,
        message:message,
        data:data
    }
}
module.exports=responseModel;