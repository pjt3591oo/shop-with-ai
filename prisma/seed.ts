import { PrismaClient } from '../src/generated/prisma';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Clean the database
  await prisma.cartItem.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.review.deleteMany();
  await prisma.image.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.address.deleteMany();
  await prisma.user.deleteMany();

  // Create admin user
  const adminPassword = await hash('admin123', 10);
  await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  // Create regular user
  const userPassword = await hash('user123', 10);
  const user = await prisma.user.create({
    data: {
      name: 'Regular User',
      email: 'user@example.com',
      password: userPassword,
      role: 'USER',
    },
  });

  // Create categories
  const categories = await Promise.all(
    [
      { name: 'Electronics', slug: 'electronics' },
      { name: 'Clothing', slug: 'clothing' },
      { name: 'Home & Kitchen', slug: 'home-kitchen' },
      { name: 'Books', slug: 'books' },
    ].map(category =>
      prisma.category.create({
        data: category,
      })
    )
  );

  // Create products
  const products = await Promise.all(
    [
      {
        name: 'Smartphone X',
        description: 'Latest smartphone with advanced features',
        price: 699.99,
        inventory: 50,
        categoryId: categories[0].id,
      },
      {
        name: 'Laptop Pro',
        description: 'Powerful laptop for professionals',
        price: 1299.99,
        inventory: 30,
        categoryId: categories[0].id,
      },
      {
        name: 'Men\'s T-shirt',
        description: 'Comfortable cotton t-shirt',
        price: 24.99,
        inventory: 100,
        categoryId: categories[1].id,
      },
      {
        name: 'Women\'s Jeans',
        description: 'Stylish and durable jeans',
        price: 49.99,
        inventory: 80,
        categoryId: categories[1].id,
      },
      {
        name: 'Coffee Maker',
        description: 'Automatic coffee maker for your kitchen',
        price: 89.99,
        inventory: 40,
        categoryId: categories[2].id,
      },
      {
        name: 'Blender',
        description: 'High-speed blender for smoothies and more',
        price: 59.99,
        inventory: 35,
        categoryId: categories[2].id,
      },
      {
        name: 'Bestselling Novel',
        description: 'The latest bestselling fiction novel',
        price: 14.99,
        inventory: 200,
        categoryId: categories[3].id,
      },
      {
        name: 'Cookbook',
        description: 'Collection of delicious recipes',
        price: 29.99,
        inventory: 150,
        categoryId: categories[3].id,
      },
    ].map(product =>
      prisma.product.create({
        data: product,
      })
    )
  );

  // Add product images
  await Promise.all(
    products.map(product =>
      prisma.image.create({
        data: {
          url: `https://placehold.co/400x300?text=${encodeURIComponent(product.name)}`,
          alt: product.name,
          productId: product.id,
        },
      })
    )
  );

  // Add user address
  await prisma.address.create({
    data: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345',
      country: 'USA',
      isDefault: true,
      userId: user.id,
    },
  });

  // Add product reviews
  await Promise.all(
    products.slice(0, 4).map((product, i) =>
      prisma.review.create({
        data: {
          rating: 4 + (i % 2),
          comment: `Great product! Very satisfied with the ${product.name}.`,
          userId: user.id,
          productId: product.id,
        },
      })
    )
  );

  console.log('Database has been seeded');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 