const express = require("express");
const router = express.Router();
const departmentController = require("../../controllers/departmentController");

router.get("/", async (req, res) => {
  try {
    const data = await departmentController.getDepartmentData();
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error("Erreur lors de la récupération des données de département:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await departmentController.getDepartmentDataById(id);
    if (!data || data.length === 0) {
      return res.status(404).json({ success: false, error: "Données non trouvées" });
    }
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error("Erreur lors de la récupération des données de département par ID:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const newData = req.body;
    const result = await departmentController.createDepartmentData(newData);
    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la création des données de département:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await departmentController.updateDepartmentData(id, updatedData);
    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données de département:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await departmentController.deleteDepartmentData(id);
    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la suppression des données de département:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

module.exports = router;
