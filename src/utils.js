import { dirname } from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import { faker } from "@faker-js/faker";
import jwt from "jsonwebtoken";
import config from "./config/config.js"
const SECRET_KEY_JWT = config.secret_jwt


export const __dirname = dirname(fileURLToPath(import.meta.url));


export const hashData = async (data) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(data, salt);
  };
  
export const compareData = async (data, hashedData) => {
  return bcrypt.compare(data, hashedData);
};

export const generateToken = (user) => {
  const token = jwt.sign(user, config.secret_jwt, { expiresIn: 300 });
  console.log("token", token);
  return token;
};


export function generateMockProducts(quantity) {
  const products = [];

  for (let i = 0; i < quantity; i++) {
      const product = {
          
          status:faker.datatype.boolean(2),
          code: faker.string.alphanumeric(),
          stock: faker.number.int(100),
          category:faker.commerce.department(),
          title: faker.commerce.productName(),
          price: faker.commerce.price(),
          description: faker.lorem.sentence(),

      };
      products.push(product);
  }

  return products;
}