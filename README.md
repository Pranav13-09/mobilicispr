# mobilicispr

This project involves fetching data from a mongoDB database and presenting it in the form of a table in the frontend.

TechStack used  

Frontend : ReactJS  
Backend : NodeJS  
Database : MongoDB  


# Backend  
Backend is divided into different folders such as routes[For Routing], controllers[For Functions] and  models[For Schema]  


## API Reference

#### Get all users  which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.


```http
  GET /api/low5
```

Performs an aggregation operation on the Employee collection, filtering by employees who own a BMW or Mercedes car and have an income less than 5.Code uses the $substr operator to extract a substring of the income field and then convert it to integer for comparison


#### Get all male Users which have phone price greater than 10,000.

```http
  GET /api/phone
```


#### Get all users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

```http
  GET /api/quote
```
Uses regular expressions with the $regex operator to perform three checks on the "Employee" collection: one for email ,one for the length of the quote field and one to check last name.


#### Get all users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.


```http
  GET /api/car
```
Uses the $in operator and regular expressions with the $regex operator to perform two checks on the "Employee" collection: one for the "car" field and one for the absence of digits in the "email" field


#### To Show the data of top 10 cities which have the highest number of users and their average income.



```http
  GET /api/income
```
Performs a complex aggregation operation on the "Employee" collection to calculate the average income per city and returns the top 10 cities with the highest number of employees.Groups the documents by the "city" field and performs several aggregation operations using the $group stage. It calculates the count of documents per city using the $sum operator, and calculates the total numeric income of all employees in each city using the $sum operator with the "numericIncome" field.Finally sort the document and selects top 10.  




## Backend Hosting
Backend is hosted on the vercel.

## Frontend
Frontend dispays the data fetched from the backend in the tabular format  

On the home page, there are 5 options provided for performing 5 different tasks. When a user clicks on any one of the options, an axios request is sent to the backend to fetch the required data. The user is then redirected to a new page where the fetched data is displayed in tabular format.

The backend server is deployed and available at https://mobiserver.vercel.app. To fetch data from the server, we make a dynamic API request to the URL https://mobiserver.vercel.app/api/${id}, where the 'id' parameter is dynamic and changes automatically based on the data that we want to fetch.

For frontend  https://mobiserver.vercel.app  is the host server.

## Screenshots
Home Page  

![App Screenshot](https://i.ibb.co/4sscRmB/home-page.png)

Page showing all  male users having phone price greater than 10000  

![App Screenshot](https://i.ibb.co/Kh7Bcq6/picture1.png)  

Image showing Dynamic URL   

![App Screenshot](https://i.ibb.co/tBVMVKG/url.png)











## Installation

Clone the project

bash
  git clone https://github.com/Pranav13-09/mobilicispr


Go to the project directory

bash
  cd mobilicispr


Install dependencies for the frontend and backend separately
bash
  cd frontend
  npm install

  cd ..

  cd backend
  npm install


## Run Locally

### Front-End

From the root of the project, navigate to the frontend folder:
bash
  cd frontend


Start the frontend app
bash
  npm start


Open your browser and navigate to http://localhost:3000 to view the frontend.

### Back-End

From the root of the project, navigate to the backend folder:
bash
  cd backend


Start the backend server
bash
  nodemon server


The backend will be available at http://localhost:80 Locally
    
