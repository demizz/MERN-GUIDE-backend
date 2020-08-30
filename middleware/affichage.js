const affichage = (req, res, next) => {
  //console.log(req);
  console.log(req.body);
  //console.log(req.body.formData);
  //console.log(req.file);
  next();
};
exports.affichage = affichage;
