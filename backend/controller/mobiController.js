const Employee = require("../models/employee");

exports.getAllProduct = async (req, res, next) => {
  let product = await Employee.find({ first_name: "Inglis" });
  res.status(200).json({
    message: "All products fetched successfully",
    product,
  });
};

exports.createProduct = async (req, res, next) => {
  const product = await Employee.create({
    first_name: "Pranav",
    last_name: "More",
    email: "abcd@gmail.com",
    gender: "Male",
    income: "$30",
    city: "Dharashiv",
    car: "BMW",
    quote: "live and let live",
    phone_price: "9000",
  });
  res.status(200).json({
    message: "All products fetched successfully",
    product,
  });
};

exports.phonePriceGet = async (req, res, next) => {
  try {
    const employees = await Employee.find({
      gender: "Male",
      $expr: { $gt: [{ $toDouble: "$phone_price" }, 10000] },
    });
    res
      .status(200)
      .json({ message: "All Users fetched Sucessfully", employees });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Unusual", err });
  }
};

exports.quoteGet = async (req, res, next) => {
  try {
    const employees = await Employee.find({
      last_name: /^M/,
      quote: { $regex: /^.{16,}$/ },
      email: {
        $regex: /M/i,
        $regex: new RegExp(
          `.*${/^M/.test(this.last_name) ? this.last_name : "M"}.*`,
          "i"
        ),
      },
    });
    res
      .status(200)
      .json({ message: "All Users fetched Sucessfully", employees });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "something unusal", err });
  }
};

exports.carGet = async (req, res, next) => {
  try {
    const employees = await Employee.find({
      car: { $in: ["BMW", "Mercedes", "Audi"] },
      email: { $not: { $regex: /\d/ } },
    });
    res
      .status(200)
      .json({ message: "All Users fetched Sucessfully", employees });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Unusual", err });
  }
};

exports.incomeGet = async (req, res, next) => {
  try {
    const employees = await Employee.aggregate([
      {
        $addFields: {
          numericIncome: { $toDouble: { $substr: ["$income", 1, -1] } },
        },
      },
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          totalIncome: { $sum: "$numericIncome" },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
      {
        $project: {
          _id: 1,
          id: 1,
          count: 1,
          avgIncome: { $round: [{ $divide: ["$totalIncome", "$count"] }, 2] },
        },
      },
    ]);
    res
      .status(200)
      .json({ message: "All Users fetched Sucessfully", employees });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Unusual", err });
  }
};

exports.lowUserGet = async (req, res, next) => {
  console.log("i am present here");
  try {
    const employees = await Employee.aggregate([
      {
        $match: {
          $and: [
            { car: { $in: ["BMW", "Mercedes"] } },
            {
              $expr: {
                $lt: [{ $toDouble: { $substr: ["$income", 1, -1] } }, 5],
              },
            },
          ],
        },
      },
    ]);
    res
      .status(200)
      .json({ message: "All Users fetched Sucessfully", employees });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Something Unusual", err });
  }
};
