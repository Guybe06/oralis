const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");

router.get("/", async (req, res) => {
  try {
    const data = await userController.getUserData();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error("Erreur lors de la récupération des données d'utilisateur:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await userController.getUserDataById(id);
    if (!data || data.length === 0) {
      return res.status(404).json({ success: false, error: "Données non trouvées" });
    }
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error("Erreur lors de la récupération des données d'utilisateur par ID:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const newData = req.body;
    const result = await userController.createUserData(newData);
    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la création des données d'utilisateur:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await userController.updateUserData(id, updatedData);
    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données d'utilisateur:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userController.deleteUserData(id);
    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la suppression des données d'utilisateur:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

module.exports = router;