const express = require("express");
const router = express.Router();
const reportController = require("../../controllers/reportController");

router.get("/", async (req, res) => {
  try {
    const data = await reportController.getReportData();
    res.json(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données de rapport:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await reportController.getReportDataById(id);
    if (!data || data.length === 0) {
      return res.status(404).json({ success: false, error: "Données non trouvées" });
    }
    res.status(200).json({ success: true, data: data });
  } catch (error) {
    console.error("Erreur lors de la récupération des données de rapport par ID:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const newData = req.body;
    const result = await reportController.createReportData(newData);
    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la création des données de rapport:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await reportController.updateReportData(id, updatedData);
    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données de rapport:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await reportController.deleteReportData(id);
    res.json(result);
  } catch (error) {
    console.error("Erreur lors de la suppression des données de rapport:", error);
    res.status(500).json({ success: false, error: "Erreur interne du serveur" });
  }
});

module.exports = router;
