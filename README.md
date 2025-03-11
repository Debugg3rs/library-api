Book Schema Fields

Field Name
Type
Required
Default Value
Description


id
ObjectId
✅ Yes (Auto-generated)
N/A
Unique identifier for the book.


title
String
✅ Yes
N/A
Title of the book. Must be unique.


author
String
✅ Yes
N/A
Author of the book.


publishedYear
Number
❌ No
N/A
Year the book was published.


genre
String (Enum)
✅ Yes
N/A
Genre of the book. Must be one of: "Fiction", "Non-Fiction", "Mystery", "Fantasy", "Science Fiction", "Biography", "History", "Romance", "Thriller", "Horror".


isbn
String
❌ No
N/A
Unique ISBN number of the book.


summary
String
❌ No
N/A
A short summary of the book.


language
String
❌ No
"English"
Language the book is written in.


pageCount
Number
❌ No
N/A
Total number of pages in the book.


publisher
String
❌ No
N/A
Publisher of the book.


coverImage
String (URL)
❌ No
N/A
URL to the book’s cover image.


availabilityStatus
String (Enum)
❌ No
"Available"
Status of the book. Must be one of: "Available", "Borrowed", "Reserved", "Lost".


availableCopies
Number
❌ No
1
Number of copies available in the library. Minimum value: 0.


ratings
Number
❌ No
0
Average user rating (range: 0 - 5).


addedBy
ObjectId (Ref: User)
❌ No
N/A
ID of the user who added the book. Will be required in the future.


createdAt
Date
✅ Yes (Auto-generated)
N/A
Timestamp when the book was added.


updatedAt
Date
✅ Yes (Auto-generated)
N/A
Timestamp when the book was last updated.




Library API Documentation (Book Management)
Base URL:
http://localhost:3001/api/v1


Add a New Book
➡️ Endpoint:
POST /books
 Request Body (JSON):
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925,
  "genre": "Fiction",
  "isbn": "9780743273565",
  "summary": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
  "language": "English",
  "pageCount": 180,
  "publisher": "Scribner",
  "coverImage": "https://example.com/great-gatsby.jpg",
  "availabilityStatus": "Available",
  "availableCopies": 5,
  "ratings": 4.5,
  "addedBy": "65df2b3c89a23e0012abcd78"
}

Response (Success - 201 Created)
{
  "message": "Book added successfully",
  "book": {
    "id": "65df3e2b89a23e0012abcd79",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "genre": "Fiction",
    "isbn": "9780743273565",
    "summary": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    "language": "English",
    "pageCount": 180,
    "publisher": "Scribner",
    "coverImage": "https://example.com/great-gatsby.jpg",
    "availabilityStatus": "Available",
    "availableCopies": 5,
    "ratings": 4.5,
    "addedBy": "65df2b3c89a23e0012abcd78",
    "createdAt": "2025-03-11T12:00:00.000Z",
    "updatedAt": "2025-03-11T12:00:00.000Z"
  }
}


Get All Books
➡️ Endpoint:
GET /books
 Response (Success - 200 OK)
[
  {
    "id": "65df3e2b89a23e0012abcd79",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "genre": "Fiction",
    "isbn": "9780743273565",
    "summary": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    "language": "English",
    "pageCount": 180,
    "publisher": "Scribner",
    "coverImage": "https://example.com/great-gatsby.jpg",
    "availabilityStatus": "Available",
    "availableCopies": 5,
    "ratings": 4.5,
    "addedBy": "65df2b3c89a23e0012abcd78",
    "createdAt": "2025-03-11T12:00:00.000Z",
    "updatedAt": "2025-03-11T12:00:00.000Z"
  }
]

Count all books
➡️ Endpoint:
GET /books/count
Response (Success - 200 OK)

Get a Single Book by ID
➡️ Endpoint:
GET /books/:id
Response (Success - 200 OK)
{
  "id": "65df3e2b89a23e0012abcd79",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925,
  "genre": "Fiction",
  "isbn": "9780743273565",
  "summary": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
  "language": "English",
  "pageCount": 180,
  "publisher": "Scribner",
  "coverImage": "https://example.com/great-gatsby.jpg",
  "availabilityStatus": "Available",
  "availableCopies": 5,
  "ratings": 4.5,
  "addedBy": "65df2b3c89a23e0012abcd78",
  "createdAt": "2025-03-11T12:00:00.000Z",
  "updatedAt": "2025-03-11T12:00:00.000Z"
}

Update a Book
➡️ Endpoint:
PATCH /books/:id
 Request Body (JSON - Only fields that need updating)
{
  "availableCopies": 3,
  "availabilityStatus": "Borrowed"
}

Response (Success - 200 OK)
{
  "message": "Book updated successfully",
  "updatedBook": {
    "id": "65df3e2b89a23e0012abcd79",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "genre": "Fiction",
    "isbn": "9780743273565",
    "summary": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    "language": "English",
    "pageCount": 180,
    "publisher": "Scribner",
    "coverImage": "https://example.com/great-gatsby.jpg",
    "availabilityStatus": "Borrowed",
    "availableCopies": 3,
    "ratings": 4.5,
    "addedBy": "65df2b3c89a23e0012abcd78",
    "createdAt": "2025-03-11T12:00:00.000Z",
    "updatedAt": "2025-03-11T12:30:00.000Z"
  }
}


Delete a Book
➡️ Endpoint:
DELETE /books/:id
Response (Success - 200 OK)
{
  "message": "Book deleted successfully"
}










