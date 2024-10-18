const Booking = require("../models/booking.model.js"); // import Booking model

// Create a new booking
module.exports.createBookingService = async (bookingData) => {
  try {
    const { email, phoneNumber } = bookingData;

    // Check if the email ends with "@itbhu.ac.in"
    if (!email.endsWith("@itbhu.ac.in")) {
      throw new Error("Please use your institute email ID");
    }

    // Validate phone number (example: must be 10 digits and numeric)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      throw new Error("Please provide a valid 10-digit phone number");
    }

    const newBooking = new Booking(bookingData);
    await newBooking.save();
    return newBooking;
  } catch (error) {
    throw new Error("Error creating booking: " + error.message);
  }
};

// Get a booking by its ID
module.exports.getBookingById = async (bookingId) => {
  try {
    const booking = await Booking.findById(bookingId);
    return booking;
  } catch (error) {
    throw new Error("Error retrieving booking: " + error.message);
  }
};

// Get all bookings
module.exports.getAllBookings = async () => {
  try {
    const bookings = await Booking.find({});
    return bookings;
  } catch (error) {
    throw new Error("Error retrieving bookings: " + error.message);
  }
};

// Update a booking by its ID
module.exports.updateBooking = async (bookingId, updatedData) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      updatedData,
      { new: true }
    );
    return updatedBooking;
  } catch (error) {
    throw new Error("Error updating booking: " + error.message);
  }
};

// Delete a booking by its ID
module.exports.deleteBooking = async (bookingId) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    return deletedBooking;
  } catch (error) {
    throw new Error("Error deleting booking: " + error.message);
  }
};

module.exports.getAllVenues = async () => {
  try {
    const venues = await Booking.find();
    return venues;
  } catch (error) {
    throw new Error("Error retrieving venues: " + error.message);
  }
};

module.exports.getPendingRequests = async () => {
  try {
    const pendingRequests = await Booking.find({ status: "pending" });
    return pendingRequests;
  } catch (error) {
    throw new Error("Error retrieving pending requests: " + error.message);
  }
};

module.exports.acceptBooking = async (bookingId) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "accepted" },
      { new: true }
    );
    return updatedBooking;
  } catch (error) {
    throw new Error("Error accepting booking: " + error.message);
  }
};

module.exports.rejectBooking = async (bookingId) => {
  try {
    const rejectedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: "rejected" },
      { new: true }
    );
    return rejectedBooking;
  } catch (error) {
    throw new Error("Error rejecting booking: " + error.message);
  }
};