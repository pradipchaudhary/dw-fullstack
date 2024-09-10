export let authorized = (roles) => {
  return async (req, res, next) => {
    try {
      let _id = req._id;
      let result = await WebUser.findById(_id);

      let tokenRole = result.roles;

      if (roles.includes(tokenRole)) {
        next();
      } else {
        res.status(403).json({
          success: false,
          message: "role not authorized",
        });
      }
    } catch (error) {
      res.json({
        success: false,
        message: "user not authorized",
      });
    }
  };
};
