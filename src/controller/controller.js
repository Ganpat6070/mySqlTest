const connection = require('../DB/DB')

const createUser = (req, res) => {
    if (!req.body.description) {
        return res.status(400).send({
            message: "Todo description can not be empty"
        });
    }

    var params = req.body;
    console.log(params);

    connection.query("INSERT INTO todos SET ? ", params,
        function (error, results, fields) {
            if (error) throw error;
            return res.send({
                data: results,
                message: 'New todo has been created successfully.'
            });
        });
};

const getAllUsers = () => {};
const getUserById = () => {};
const updateUser = () => {};
const deleteUser = () => {};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
