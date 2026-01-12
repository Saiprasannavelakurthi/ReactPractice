# Web Application Fundamentals

## Q1. Role of Frontend (FE)

The **Frontend (FE)** is the part of a web application that users directly see and interact with in their web browser. It focuses on presentation, usability, and interaction.

### User Interface
The frontend is responsible for designing and displaying the visual elements of a website such as buttons, forms, text, images, layouts, and colors. Technologies like **HTML, CSS, and JavaScript** are used to create responsive and attractive user interfaces.

### User Interaction
Frontend manages all user interactions including clicking buttons, filling forms, scrolling pages, and navigating between screens. It also performs basic input validation to ensure correct data is entered before sending it to the backend.

### Communication with Backend
The frontend communicates with the backend through **HTTP/HTTPS requests** using APIs. It sends user data to the server and displays responses such as fetched data, success messages, or error messages.

---

## Q2. Role of Backend (BE)

The **Backend (BE)** is the server-side part of a web application that handles data processing, logic, and security. It works behind the scenes and is not visible to the user.

### Server-Side Processing
Backend processes requests received from the frontend, applies business rules, performs calculations, and generates appropriate responses.

### Database Handling
Backend is responsible for interacting with databases to store, retrieve, update, and delete data. Common databases include MySQL, MongoDB, PostgreSQL, and others.

### Security and Authentication
Backend ensures application security by handling user authentication, authorization, password encryption, session management, and protection of sensitive data.

---

## Q3. Business Logic

**Business Logic** refers to the set of rules and decision-making processes that define how a business operates within a web application. It controls how data is processed and ensures that application behavior follows business requirements.

### Real-World Examples

1. **E-commerce Application**  
   - Calculating total price based on quantity  
   - Applying discount coupons  
   - Checking product availability before order confirmation

2. **Banking System**  
   - Verifying account balance before fund transfer  
   - Applying transaction limits  
   - Calculating interest on savings

3. **Online Examination System**  
   - Allowing exam access only during a fixed time window  
   - Automatically submitting answers when time expires  
   - Calculating final scores based on evaluation rules

---

## Q4. Client–Server Model

The **Client–Server Model** is a network architecture where clients request services and servers provide them.

### Client
The client is the user’s device or application, such as a web browser or mobile app, that sends requests and displays responses.

### Server
The server is a system that processes client requests, executes application logic, interacts with databases, and returns responses.

### Communication Process
1. Client sends an HTTP request
2. Server processes the request
3. Server sends a response
4. Client displays the result to the user

---

## Q5. Three-Tier Architecture

**Three-Tier Architecture** divides a web application into three separate layers to improve organization and scalability.

### Presentation Layer
This layer represents the frontend and handles user interaction and display of information.

### Application (Business) Layer
This layer contains the business logic and processes user requests according to rules.

### Data Layer
The data layer manages databases and handles data storage and retrieval.

### Why This Architecture Is Used
- Clear separation of responsibilities  
- Easy maintenance and updates  
- Improved scalability  
- Enhanced security

---

## Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language due to its speed, flexibility, and large ecosystem.

### Performance
Using **Node.js**, JavaScript supports non-blocking and event-driven processing, allowing efficient handling of multiple requests.

### Ecosystem
JavaScript has a vast ecosystem through **npm**, providing thousands of libraries and tools that speed up backend development.

### Popular Backend Frameworks
- **Express.js**  minimal and flexible
- **NestJS**  structured and scalable
- **Fastify**  high-performance backend framework

JavaScript allows developers to use the same language for both frontend and backend, improving development efficiency.

