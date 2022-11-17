
let checkAuthenticationV2 = (request,response,next) => {
   if(request.session!=null && request.session.username!= null){
       console.log("condition satisfied");
        next();
    } else {
      response.send("Not Authenticated");
   }
}

module.exports = checkAuthenticationV2;