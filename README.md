# Irevox Technical Test

This project is a technical test for Irevox. The goal of this project was to implement a system with Role-Based Access Control (RBAC) with two roles: Admin and Customer.

### Disclaimer

I continued a previous project I was developing about vehicle e-commerce platform, as the tech stack is similar, and I was given freedom in theme/concept. I initiated the project about 3 weeks ago and the development has only reached the stage of creating admin authentication and some simple admin CRUD. Therefore, I think I can use this project in this test because it is still in its early stages.

## Tech Stack

- **TypeScript**
- **React**
- **Next.js**
- **TailwindCSS**
- **ShadCN/UI**
- **Supabase (PostgreSQL)** -> In the test requirements, it is recommended to use MySQL or SQLite. However, I had difficulty hosting both database services because in some places my free limit had run out, so as an alternative I used PostgreSQL from Supabase with Prisma ORM.
- **Prisma ORM**
- **Lucia Auth**
- **Zustand**
- **Tanstack Query**
- **Vercel**

## Features

- **Vehicle E-Commerce Web-Based Platform**
- **Role-Based Access Control (RBAC)**:
  - **Admin**: Can perform CRUD operations on products, brands, categories, and locations.
  - **Customer**: Can perform CRUD operations on catalogs and orders.

## Endpoints & Pages

### For Signin In

| Method | Endpoint           | Function     | Page             |
| ------ | ------------------ | ------------ | ---------------- |
| GET    | /sign-in           | For customer | Customer Sign-In |
| GET    | /dashboard/sign-in | For admin    | Admin Sign-In    |

### Other Endpoints

| Method | Endpoint                        | Function                                 | Page                  |
| ------ | ------------------------------- | ---------------------------------------- | --------------------- |
| GET    | /                               | Get all products, brands, and categories | Customer's home       |
| GET    | /catalogs                       | Get all products, brands, and categories | Product catalogs      |
| POST   | /api/catalog                    | Apply catalog's filters                  | - (catalog's filters) |
| GET    | /catalogs/detail-product/{id}   | Get product's detail by ID               | Product's detail      |
| GET    | /carts                          | Get customer's cart list                 | Customer's cart       |
| GET    | /dashboard                      | Get data                                 | Admin's dashboard     |
| GET    | /dashboard/categories           | Get all categories                       | Categories management |
| POST   | /dashboard/categories/create    | Create new category                      | Create category       |
| POST   | /dashboard/categories/edit/{id} | Update a category                        | Edit category         |
| GET    | /dashboard/locations            | Get all locations                        | Locations management  |
| POST   | /dashboard/locations/create     | Create new location                      | Create location       |
| POST   | /dashboard/locations/edit/{id}  | Update a location                        | Edit location         |
| GET    | /dashboard/brands               | Get all brands                           | Brands management     |
| POST   | /dashboard/brands/create        | Create new brand                         | Create brand          |
| POST   | /dashboard/brands/edit/{id}     | Update a brand                           | Edit brand            |
| GET    | /dashboard/products             | Get all products                         | Products management   |
| POST   | /dashboard/products/create      | Create new product                       | Create product        |
| POST   | /dashboard/products/edit/{id}   | Update a product                         | Edit product          |
| GET    | /dashboard/orders               | Get all orders                           | Orders management     |
| GET    | /dashboard/customers            | Get all customers                        | Customers management  |

## Deployment

You can access the deployed application at the following URL:

[Public URL](https://ecommerce-fullstack-nextjs.vercel.app/)

You can use these accounts for testing:
| Email | Password | Role |
|--------------------|---------------------------|--------------------|
| admin@admin.com | admin1234 | Admin |
| alif@example.com | alif1234 | Customer |

## Demo

Watch the 10 minutes demo video of me showcasing the functionality of the project here:

[Demo Video](https://drive.google.com/file/d/10TTyXV2mZe2W5RsTbpO19oF0DSg92bU9/view?usp=sharing)

## Conclusion

I developed this web-based application or service by paying attention to the requirements of the test given and trying my best to fulfill them, although there are some requirements that I use alternatives. I haven't finished developing this application yet, but I think it's enough for me to collect it as my technical test project. These results still have many shortcomings due to time constraints and other factors. Hopefully this result is as expected and meets all the criteria needed for the role I am applying for.
