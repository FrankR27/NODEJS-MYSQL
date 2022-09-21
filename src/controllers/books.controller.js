import { pool } from "../db.js";

export const getBooks = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM books");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM books WHERE ID = ?", [id]);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createBook = async (req, res) => {
  try {
    const { TITLE, DESCRIPTION_BOOK, COVER_BOOK } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO books (TITLE, DESCRIPTION_BOOK, COVER_BOOK) VALUES (?, ?, ?)",
      [TITLE, DESCRIPTION_BOOK, COVER_BOOK]
    );
    return res.json("Book has been created successfully");
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM books WHERE ID = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Libro no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { TITLE, DESCRIPTION_BOOK, COVER_BOOK } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE books SET TITLE = IFNULL(?, TITLE), DESCRIPTION_BOOK = IFNULL(?, DESCRIPTION_BOOK), COVER_BOOK = IFNULL(?, COVER_BOOK) WHERE ID = ?",
      [TITLE, DESCRIPTION_BOOK, COVER_BOOK, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Libro no encontrado" });

    const [rows] = await pool.query("SELECT * FROM books WHERE ID = ?", [id]);

    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
