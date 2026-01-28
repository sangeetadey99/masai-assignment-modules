# Assignment: Schema Design Fundamentals – Theory
## Explain schema design in the context of relational databases.
Schema design is the process of planning how data is organized in a relational database. It defines tables, columns, data types, relationships, and rules that control how data is stored.

A database schema acts like a blueprint of the database. It shows what data will exist and how different pieces of data are connected.

Schema design is done before writing backend code so that the application can store, retrieve, and update data correctly. A good schema prevents data duplication, ensures consistency, and makes the system easy to maintain and scale.

Databases enforce validations such as PRIMARY KEY, NOT NULL, UNIQUE, and DEFAULT to keep data accurate and reliable.

In short, schema design helps build a database that is clean, efficient, and reliable.

----
## 1. What schema design is and what a database schema represents
Schema design is the process of planning and defining how data will be organized, stored, and related inside a relational database. It focuses on identifying entities (such as users, orders, or products), their attributes (columns), and the relationships between them.

A **database schema** is the blueprint of the database. It represents:
* Tables and their columns  
* Data types of each column  
* Relationships between tables (foreign keys)  
* Constraints and rules (such as primary keys, unique constraints, and not-null rules)
-----
## 2. Why schema design is required before writing backend code
Schema design must be completed before backend development because backend logic depends directly on how data is stored and accessed.

Reasons:
* Backend APIs rely on table and column definitions  
* Relationships affect queries and joins  
* Database constraints influence error handling  
* A stable schema prevents frequent backend refactoring 

Without proper schema design, backend code becomes unreliable and difficult to maintain. Designing the schema first creates a clear foundation for application logic.

----
## 3. How poor schema design impacts data consistency, maintenance, and scalability

### Data consistency
* Duplicate data may exist in multiple tables  
* Updates may not reflect everywhere  
* Conflicting records can occur  

### Maintenance
* Queries become complex and error-prone  
* Small schema changes require large code changes  
* Debugging data issues becomes time-consuming  

### Scalability
* Poor structure slows queries as data grows  
* Indexing becomes inefficient  
* System performance degrades under load  

Poor schema design often leads to costly redesigns in production systems.

---
## 4. What validations are in schema design and why databases enforce validations (for example: NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY)
Validations (constraints) are rules enforced by the database to ensure data accuracy and integrity.
Common validations:
- **NOT NULL** – Prevents empty values  
  Example: user email should not be NULL  
- **UNIQUE** – Prevents duplicate values  
  Example: email address must be unique  
- **DEFAULT** – Assigns a value if none is provided  
  Example: status DEFAULT 'active'  
- **PRIMARY KEY** – Uniquely identifies each record  
  Example: user_id  

Databases enforce validations to:
* Prevent invalid data  
* Maintain integrity across applications  
* Reduce dependency on application-level checks  
---
## 5. Difference between a database schema and a database table
* A **database schema** is the overall structure that defines all tables, relationships, and constraints.
* A **database table** is a single structure within the schema that stores data for one entity.

Example:
* Schema: ecommerce
* Tables: users, orders, products

The schema is the blueprint; tables are the actual implementations.

---
## 6. Why a table should represent only one entity
Each table should represent only one entity to follow normalization principles.

Benefits:
* Clear data organization  
* Reduced duplication  
* Easier updates and deletes  

Example:
* users table → user details  
* orders table → order details  

This separation keeps data logical and consistent.

---
## 7. Why redundant or derived data should be avoided in table design
Redundant data is repeated information. Derived data is data that can be calculated from existing values.

Problems:
* Data inconsistency  
* Extra storage usage  
* Complicated update logic  

Example:
* Storing total price when it can be calculated from quantity into price

Avoiding redundancy ensures:
* Single source of truth  
* Easier maintenance  
* Reliable data  
---
## 8. The importance of choosing correct data types while designing tables
Correct data types improve performance, accuracy, and storage efficiency.

Examples:
* INTEGER for IDs and counts  
* VARCHAR or TEXT for names  
* DATE or TIMESTAMP for time values  
* Avoid TEXT for numeric data  

Benefits:
* Faster queries  
* Automatic validation  
* Reduced storage waste  