module.exports = (err, req, res) => {
    res.status(err.status || 500)
    return res.json({
      error: {
        message: err.message
      }
    })
  }

