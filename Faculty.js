var mongoose=require('mongoose');
var schema=mongoose.Schema({
	 	id:String,
	   FacultyName:String,
	   FacultyDesignation:String
});
module.exports=mongoose.model("Faculty",schema);
