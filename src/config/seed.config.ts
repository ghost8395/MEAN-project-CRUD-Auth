import CategoryModel from "../model/category.model";
import VendorModel from "../model/vendor.model";

export const seedData = async () => {
  try {
    console.log('databased seeding started');
    await CategoryModel.deleteMany({});
    await CategoryModel.insertMany([
      {
        name: "Food",
      },
      {
        name: "Pet",
      },
      {
        name: "Fruits",
      },
      {
        name: "Electronics",
      },
      {
        name: "Media",
      },
      {
        name: "Books",
      },
      {
        name: "Sports",
      },
    ]);

    await VendorModel.deleteMany({});
    await VendorModel.insertMany([
      {
        name: "DMart",
      },
      {
        name: "Costco",
      },
      {
        name: "Amazon",
      },
      {
        name: "Seven-11",
      },
      {
        name: "BigBasket",
      },
      {
        name: "Zomato",
      },
      {
        name: "Ola",
      },
    ]);
    console.log('databased seeding finished');
  } catch (error) {
    console.error(error);
    // Emit an event when there's an error
  }
};
