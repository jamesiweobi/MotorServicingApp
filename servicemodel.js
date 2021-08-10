const serviceSchema = new mongoose.Schema({
 title: {
  type: String,
  required: [true, 'Motor service must have a title'],
  unique: true,
  trim: true
 },
 description: {
  type: String,
  required: [true, 'Motor service must have a description'],
  unique: true,
   trim: true
 },
  otherServices: [{
    title: {
     type: String,
     required: [true, 'service must have a title'],
     unique: true,
      trim: true
     },
     description: {
       type: String,
       required: [true, 'service must have a description'],
       unique:true,
        trim: true
     },
     image: {
      type: String,
      required: [true, 'service must have an image'],
       trim: true
     },
     pricing: {
      type: Number,
      required: [true, 'Motor service must have a price'] 
     }
     
  }] 
});

module.exports = mongoose.model('Service', serviceSchema)


