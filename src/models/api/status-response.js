const appConfig=require("../../config/app-config");
const statusResponseModel=(message,data)=>{
    let dateTime=new Date();
    let timestamp=new Date().getTime();
    return{
        program:appConfig.program,
        version:appConfig.version,
        release:appConfig.version,
        datetime:dateTime,
        timestamp:timestamp,
        status:"success",
        code: 200,
        message:"OK",
        data:"The service is healthy"}
}
module.exports=statusResponseModel;