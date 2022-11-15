let mongoose  = require("mongoose");

// Getters : rootDirectory/images/<imageName>
const imageRootPath = "rootDirectory/images"
const blogSchema = new mongoose.Schema({
   title: String,
   content: String,
   author: {type: String}, // username of user creating this blog
   createdDate: {type: Date, default: Date.now},
   subTitle: String,
   image:
    {
        data: Buffer,
        contentType: String
    },
   comments: [{
      postedBy: String,
      body: String,
      date: {type: Date, default: Date.now}
   }],
   likes: Number,
});

module.exports = mongoose.model("Blog",blogSchema);
// new Blog ({ path: "mypic.jpg"})

