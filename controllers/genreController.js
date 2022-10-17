// Import express-validar library for validating forms
const { body, validationResult } = require('express-validator')

const Book = require('../models/book')
const async = require('async')
const Genre = require('../models/genre')

// To prevent an error with req.params.id, we import mongoose and use the Types.ObjectId() method to convert the string to a MongoDB ObjectId.
const mongoose = require('mongoose')

// Display list of all Genre.
exports.genre_list = (req, res, next) => {
  Genre.find()
    .sort({
      name: 'ascending',
    })
    .exec(function (err, list_genres) {
      if (err) {
        return next(err)
      }
      // Successful, so render
      res.render('genre_list', {
        title: 'Genre List',
        genre_list: list_genres,
      })
    })
}

// Display detail page for a specific Genre.
exports.genre_detail = (req, res, next) => {
  const id = mongoose.Types.ObjectId(req.params.id)
  // console.log(id)

  async.parallel(
    {
      genre(callback) {
        Genre.findById(id).exec(callback)
      },

      genre_books(callback) {
        Book.find({ genre: id }).exec(callback)
      },
    },
    (err, results) => {
      if (err) {
        return next(err)
      }
      if (results.genre == null) {
        // No results.
        const err = new Error('Genre not found')
        err.status = 404
        return next(err)
      }
      // Successful, so render
      res.render('genre_detail', {
        title: 'Genre Detail',
        genre: results.genre,
        genre_books: results.genre_books,
      })
    }
  )
}

// Display Genre create form on GET.
exports.genre_create_get = (req, res, next) => {
  res.render('genre_form', {
    title: 'Create Genre',
    genre: req.body,
    errors: [],
  })
}

// Handle Genre create on POST.
// NOTE: Instead of being a single middleware function (req, res), the controller specifies an array of middleware functions. Each method will be called in order.
exports.genre_create_post = [
  // Validate and sanitize the name field.
  body('name', 'Genre name required').trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req)

    // Create a genre object with escaped and trimmed data.
    // NOTE: This will be passed to the view if there are errors so that the user doesn't have to re-enter the data! awesome! (see below)
    const genre = new Genre({ name: req.body.name })

    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render('genre_form', {
        title: 'Create Genre',
        genre,
        errors: errors.array(),
      })
      return
    } else {
      // Data from form is valid.
      // Check if Genre with the same name already exists (in the database).
      Genre.findOne({ name: req.body.name }).exec((err, found_genre) => {
        if (err) {
          return next(err)
        }

        if (found_genre) {
          // Genre exists, redirect to its detail page.
          // NOTE: SEE ABOVE METHOD exports.genre_detail
          res.redirect(found_genre.url)
        } else {
          genre.save((err) => {
            if (err) {
              return next(err)
            }
            // Genre saved. Redirect to genre detail page.
            res.redirect(genre.url)
          })
        }
      })
    }
  },
]

// Check the end of the mdn webpage
// Display Genre delete form on GET.
exports.genre_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre delete GET')
}

// Handle Genre delete on POST.
exports.genre_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre delete POST')
}

// Display Genre update form on GET.
exports.genre_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre update GET')
}

// Handle Genre update on POST.
exports.genre_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre update POST')
}
