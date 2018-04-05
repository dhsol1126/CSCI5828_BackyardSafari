var mongoose = require('mongoose');
var Schema = mongoose.Schema;

detailSchema = new Schema( {
    // user_id:{type:Mixed, required:true, unique:true}
	image_id:Number,
	image1:String,
    Description: String,
	added_date:{
		type: Date,
		default: Date.now
	}
});

Detail = mongoose.model('images', detailSchema);

module.exports = Detail;