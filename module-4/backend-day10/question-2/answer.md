# Database Relationships

## What is a Database Relationship?

A **database relationship** refers to the connection between two or more
tables in a database.\
It explains how data stored in one table is related to data stored in
another table.

These relationships are created using: - **Primary Key (PK)** --
uniquely identifies a record. - **Foreign Key (FK)** -- links one table
to another.

Database relationships help in maintaining: - Data accuracy - Data
consistency - Proper data organization

---

## Types of Database Relationships

### 1. One-to-One Relationship (1:1)

In a one-to-one relationship, one record in a table is linked to only
one record in another table.

#### E-commerce Example

Each user has only one account profile.

**Tables:** - Users - Profiles

**Explanation:** One user can have only one profile that stores personal
details like address and phone number.

---

### 2. One-to-Many Relationship (1:M)

In this relationship, one record in a table can be related to many
records in another table.

#### E-commerce Example

One customer can place many orders.

**Explanation:** A single customer may place multiple orders, but each
order belongs to only one customer.

---

### 3. Many-to-One Relationship (M:1)

This is the opposite of one-to-many.

#### E-commerce Example

Many products belong to one category.

**Tables:** - Products - Categories

**Explanation:** Multiple products like laptops and phones can belong to
the same category such as "Electronics".

---

### 4. Many-to-Many Relationship (M:M)

In this relationship, many records in one table are related to many
records in another table.\
This requires a **junction table**.

#### E-commerce Example

An order can contain many products, and a product can be included in
many orders.

**Tables:** - Orders - Products - OrderDetails (junction table)

**Junction Table Example:**

orderId productId quantity

---

**Explanation:** The OrderDetails table connects orders and products and
stores extra information like quantity.

---

## Why Database Relationships are Important

- Reduce data redundancy
- Maintain data integrity
- Improve data management
- Make complex queries easier using JOIN
- Reflect real-world business logic

---

## Relationship Summary

Type Example

---

One-to-One User → Profile
One-to-Many Customer → Orders
Many-to-One Products → Category
Many-to-Many Orders ↔ Products

---

## Conclusion

Database relationships play a vital role in designing a well-structured
database.\
They help connect related data, avoid duplication, and ensure that
e-commerce applications work efficiently and reliably.
