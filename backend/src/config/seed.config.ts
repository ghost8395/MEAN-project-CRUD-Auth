import CategoryModel from "../model/category.model";
import VendorModel from "../model/vendor.model";
import ProductModel from "../model/product.model";

export const seedData = async () => {
  try {
    console.log('databased seeding started');
    if ((await CategoryModel.find({})).length === 0) {
      console.log('category seeding started');
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
      await ProductModel.deleteMany({});
      console.log('category seeding finished');
    }
    if ((await VendorModel.find({})).length === 0) {
      console.log('vendor seeding started');
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
      await ProductModel.deleteMany({});
      console.log('vendor seeding finished');
    }
    console.log('databased seeding finished');
  } catch (error) {
    console.error(error);
    // Emit an event when there's an error
  }
};
