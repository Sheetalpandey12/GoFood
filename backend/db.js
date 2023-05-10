// const mongoose = require('mongoose');
// const mongoURL = ("mongodb+srv://zomato:zpmato123@cluster0.o06j9ry.mongodb.net/?retryWrites=true&w=majority")
// const mongoDB = async () => {
//     await mongoose.connect(mongoURL, { useNewUrlParser: true }, async (err, result) => {
//         if (err) console.log("---", err)
//         else {
// //             console.log("connected");
// //             const fetched_data = await mongoose.connection.db.collection("food_items");
// //             fetched_data.find({}).toArray(function (err, data) {
// //              if (err) console.log(err);
// //                 console.log(data)
// //             })
// //         }
// //     })
// // } 
// // module.exports = mongoDB
// const mongoose = require('mongoose');
// const mongoURL = ("mongodb+srv://zomato:zomato123@cluster0.o06j9ry.mongodb.net/?retryWrites=true&w=majority")
// const mongoDB = async () => {
//     await mongoose.connect(mongoURL, { useNewUrlParser: true });
//     console.log("connected");
//     const fetched_data = await mongoose.connection.db.collection("food_items");
//     fetched_data.find({}).toArray(function (err, data) {
//       if (err) console.log(err);
//       console.log(data)
//     });}
// module.exports = mongoDB;
// const mongoose = require('mongoose');
// //const mongoURL = ("mongodb+srv://zomato:zomato123@cluster0.o06j9ry.mongodb.net/?retryWrites=true&w=majority")
// const mongoURL = ("mongodb://zomato:zomato123@ac-xcrgeko-shard-00-00.o06j9ry.mongodb.net:27017,ac-xcrgeko-shard-00-01.o06j9ry.mongodb.net:27017,ac-xcrgeko-shard-00-02.o06j9ry.mongodb.net:27017/test?ssl=true&replicaSet=atlas-63homh-shard-0&authSource=admin&retryWrites=true&w=majority")

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURL, { useNewUrlParser: true });
//     console.log("connected");
//     const fetched_data = await mongoose.connection.db.collection("fooditems");
//     const data = await fetched_data.find({}).toArray();
//     const foodCategory=await mongoose.connection.db.collection("foodCategory");
//      foodCategory.find({}).toArray(function(err,catData){
//     //})
//     global.fooditems=data 
//     global.foodCategory=catData})
//     // console.log(global.fooditems)
//   } catch (err) {
//     console.log("---", err); 
//   }
// }
// module.exports = mongoDB;
// const mongoose = require('mongoose');
// const mongoURL = ("mongodb+srv://sheetalpandey555:fooddeliver123@cluster0.wy5ewvo.mongodb.net/gofood")
 
// const mongoDB = async () => { 
//   try {
//     await mongoose.connect(mongoURL, { useNewUrlParser: true });
//     console.log("connected");
//     const fetched_data = await mongoose.connection.db.collection("food_items");
//     const data = await fetched_data.find({}).toArray();
//     console.log(data);
//   } catch (err) {
//     console.log("---", err);
//   }
// };

// module.exports = mongoDB;

// const mongoose = require('mongoose');
// const mongoURL = ("mongodb+srv://zomato:zomato123@cluster0.o06j9ry.mongodb.net/?retryWrites=true&w=majority")

// const foodItemSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   price: Number
// });
 
// const FoodItem = mongoose.model('FoodItem', foodItemSchema);

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURL, { useNewUrlParser: true });
//     console.log("connected");
//     const data = await FoodItem.find({});
//     console.log(data);
//   } catch (err) {
//     console.log("---", err);
//   }
// };

// module.exports = mongoDB;



const mongoose = require('mongoose');
const mongoURL = ("mongodb://zomato:zomato123@ac-xcrgeko-shard-00-00.o06j9ry.mongodb.net:27017,ac-xcrgeko-shard-00-01.o06j9ry.mongodb.net:27017,ac-xcrgeko-shard-00-02.o06j9ry.mongodb.net:27017/test?ssl=true&replicaSet=atlas-63homh-shard-0&authSource=admin&retryWrites=true&w=majority")

const mongoDB = () => {
  return mongoose.connect(mongoURL, { useNewUrlParser: true })
    .then(() => {
      console.log("connected");
      const fetched_data = mongoose.connection.db.collection("fooditems");
      return fetched_data.find({}).toArray()
    })
    .then((data) => {
      global.fooditems = data;
      const foodCategory = mongoose.connection.db.collection("foodCategory");
      return foodCategory.find({}).toArray()
    })
    .then((catData) => {
      global.foodCategory = catData;
    })
    .catch((err) => {
      console.log("---", err); 
    });
}

module.exports = mongoDB;

