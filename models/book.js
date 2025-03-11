import { Schema, model } from 'mongoose';


const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  publishedYear: { type: Number },
  genre: { 
    type: String, 
    enum: [
      "Fiction", "Non-Fiction", "Mystery", "Fantasy",
      "Science Fiction", "Biography", "History", 
      "Romance", "Thriller", "Horror"
    ], 
    required: true 
  },
  isbn: { type: String, unique: true },
  summary: { type: String },
  language: { type: String, default: "English" },
  pageCount: { type: Number },
  publisher: { type: String },
  coverImage: { type: String },
  availabilityStatus: { 
    type: String, 
    enum: ["Available", "Borrowed", "Reserved", "Lost"], 
    default: "Available" 
  },
  availableCopies: { type: Number, default: 1, min: 0 },
  ratings: { type: Number, default: 0, min: 0, max: 5 },
  addedBy: { type: Schema.Types.ObjectId, ref: "User"}, // ID of the user who added the book / to be made required in the future
}, { timestamps: true });


// Add any other necessary methods for the Book model here...
bookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    returnedObject.createdAt = returnedObject.createdAt?.toISOString();
    returnedObject.updatedAt = returnedObject.updatedAt?.toISOString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export const Book = model("Book", bookSchema);