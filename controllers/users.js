
  const getUsers = (req, res) => {
    res.json({
      ok: true,
      msg: "get API",
    });
  }

  const postUsers = (req, res) => {
    res.json({
      ok: true,
      msg: "postUsers API",
    });
  }

  const putUsers = (req, res) => {
    res.json({
      ok: true,
      msg: "putUsers API",
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