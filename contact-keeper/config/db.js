//config file - default.json
const config = require('config');

// mongo db connection
const mongoose = require('mongoose');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  //   mongoose
  //     .connect(db, {
  //       useNewUrlParser: true,
  //       useCreateIndex: true,
  //       useFindAndModify: false,
  //       useUnifiedTopology: true
  //     })
  //     .then(() => console.log('MongoDB Connected'))
  //     .catch((error) => {
  //       console.error(error.message);
  //       process.exit(1);
  //     });
};

module.exports = connectDB;
