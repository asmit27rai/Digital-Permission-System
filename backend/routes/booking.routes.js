const express = require("express");
const router = express.Router();
const {
  createBooking,
  getBookingById,
  getAllBookings,
  updateBooking,
  deleteBooking,
  getAllVenues,
  getPendingRequests,
  acceptBooking,
  rejectBooking,
} = require("../controllers/booking.controllers");

// Route to create a new booking
router.post("/", createBooking);

// Route to get a booking by its ID
router.get("/:bookingId", getBookingById);

// Route to get all bookings
router.get("/", getAllBookings);

// Route to update a booking by its ID
router.post("/:bookingId", updateBooking);

// Route to delete a booking by its ID
router.post("/delete", deleteBooking);

router.get("/admin/venues", getAllVenues);
router.get("/admin/requests/pending", getPendingRequests);
router.post("/admin/requests/:bookingId/accept", acceptBooking);
router.post("/admin/requests/:bookingId/reject", rejectBooking);

module.exports = router;
