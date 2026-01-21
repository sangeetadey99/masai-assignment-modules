# Database Fundamentals – Conceptual Understanding
## 1. Why is db.json not suitable as a database for real projects?
### Explain the limitations of file-based storage
**Answer:-**  
db.json is a file-based storage system where data is stored in a single JSON file. It is simple to use but has many limitations when used in real-world applications. The entire file must be read and rewritten for every operation, making it inefficient and unsafe for large or multi-user systems.
### Performance issues
**Answer:-**  
* Reading and writing requires loading the whole file into memory  
* No indexing support, so data lookup is slow  
* Performance decreases significantly as data size increases  
### Scalability issues
**Answer:-**  
* Cannot handle large amounts of data efficiently  
* Not suitable for applications with many users  
* Difficult to scale as the application grows  
### Reliability issues
**Answer:-**  
* Risk of data corruption if the server crashes during a write operation  
* No transaction support (no rollback or atomic operations)  
* No built-in backup or recovery mechanism  
Because of these issues, db.json is suitable only for learning or small demos, not for production-level projects.
## 2. What are the ideal characteristics of a database system (apart from just storage)?
### Performance
**Answer:-**  
A good database provides fast data access using indexing, caching, and optimized queries, even with large datasets.
### Concurrency
**Answer:-**  
The database should support multiple users accessing and modifying data at the same time without conflicts or data loss.
### Reliability
**Answer:-**  
The system should protect data during crashes or failures and provide backup and recovery features.
### Data Integrity
**Answer:-**  
A database must ensure accuracy and consistency of data using rules like primary keys, foreign keys, and constraints.
### Scalability
**Answer:-**  
The database should be able to handle increasing data size and user traffic without performance degradation.
### Fault Tolerance
**Answer:-**  
The system should continue functioning even if some components fail, using replication and failover mechanisms.
## 3. How many types of databases are there? What are their use cases or applications?

Databases are mainly classified into two types:

### Relational Databases (SQL)

**Answer:-**  
Relational databases store data in tables with fixed schemas and use SQL for querying. They follow ACID properties to ensure strong consistency.

**Examples:-**
* MySQL  
* PostgreSQL  
* Oracle  
* SQL Server  

**Real-world use cases:-**
* Banking and financial systems  
* E-commerce applications  
* Student and employee management systems  
* Applications requiring strict data consistency  
### Non-Relational Databases (NoSQL)
**Answer:-**  
Non-relational databases store data in flexible formats such as documents, key-value pairs, columns, or graphs. They are designed for high scalability and performance.
**Examples:-**
* MongoDB (Document-based)  
* Redis (Key-value)  
* Cassandra (Column-based)  
* Neo4j (Graph-based)  
**Real-world use cases:-**
* Social media platforms  
* Real-time analytics systems  
* Large-scale web applications  
* Applications with frequently changing data structures  

