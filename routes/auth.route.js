const authController = require("../controllers/auth.contorller");

module.exports = (app)=>{
    // api for signup
    app.post("/crm/api/v1/auth/signup/", authController.signup);

}