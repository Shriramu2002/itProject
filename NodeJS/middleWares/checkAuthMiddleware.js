//shriamu
let checkAuthenticationV2 = (request,response,next) => {
   console.log(request);
   if(request.session!=null && request.session.username!= null){
       console.log("condition satisfied");
        next();
    } else {
      response.send("Not Authenticated").status(501);
      console.log("not authenticated");
   }
}

module.exports = checkAuthenticationV2;