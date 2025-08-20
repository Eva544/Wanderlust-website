const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js"); 
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js"); // Import cloudinary configuration
const upload = multer({ storage }); // Set the destination for uploaded files

const listingController = require("../controllers/listings.js"); 

//Index Route & Create Route
router
   .route("/")
   .get(wrapAsync(listingController.index))
   .post(
      isLoggedIn,
      validateListing,  
      upload.single('listing[image]'),
      wrapAsync(listingController.createListing)
   );
  
//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);


//Search Route
router.get("/search",  
   wrapAsync(listingController.searchListings)
);

//Show, Update & Delete Route
router
   .route("/:id")
   .get(wrapAsync(listingController.showListing))
   .put( 
   isLoggedIn,
   isOwner, 
   upload.single('listing[image]'),
   validateListing, 
   wrapAsync(listingController.updateListing))
   .delete( 
   isLoggedIn, 
   isOwner, 
   wrapAsync(listingController.destroyListing)
);

//Edit Route
router.get("/:id/edit", 
   isLoggedIn, 
   isOwner, 
   wrapAsync(listingController.renderEditForm)
);


module.exports = router;