const db = require("../models");
const Pessoa = db.Pessoa;

module.exports = {
  async createPessoa(req, res) {
    try {
      const novaPessoa = await Pessoa.create(req.body);
      return res.status(201).json(novaPessoa);
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Erro ao criar pessoa", details: error.message });
    }
  },

  async getAllPessoas(req, res) {
    try {
      const pessoas = await Pessoa.findAll();
      return res.status(200).json(pessoas);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async getPessoaById(req, res) {
    try {
      const pessoa = await Pessoa.findByPk(req.params.id);  
      if (!pessoa) {
        return res.status(404).json({ error: "Pessoa não encontrada" });
      }
      return res.status(200).json(pessoa);  
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async updatePessoa(req, res) {
    try {
      const pessoa = await Pessoa.findByPk(req.params.id);  
      if (!pessoa) {
        return res.status(404).json({ error: "Pessoa não encontrada" });
      }
      await pessoa.update(req.body); 
      return res.status(200).json(pessoa); 
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async deletePessoa(req, res) {
    try {
      const pessoa = await Pessoa.findByPk(req.params.id); 
      if (!pessoa) {
        return res.status(404).json({ error: "Pessoa não encontrada" });
      }
      await pessoa.destroy(); 
      return res.status(204).send(); 
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
