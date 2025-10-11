const googleCallback = (req, res) => {

  console.log('Authenticated User:', req.user);

  res.status(200).json({
    message: 'Google login successful',
    user: req.user,
  });
};

module.exports = {
  googleCallback,
};