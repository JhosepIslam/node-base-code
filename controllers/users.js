
  const getUsers = (req, res) => {
    res.json({
      ok: true,
      msg: "get API",
    });
  }

  const postUsers = (req, res) => {

    const {name, age} = req.body;

    res.json({
      ok: true,
      msg: "postUsers API",
      data: {name, age}
    });
  }

  const putUsers = (req, res) => {
    const {id} = req.params;
    res.json({
      ok: true,
      msg: "putUsers API",
      data: id
    });
  }


  const deleteUsers = (req, res) => {
    res.json({
      ok: true,
      msg: "deleteUsers API",
    });
  }


  module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}