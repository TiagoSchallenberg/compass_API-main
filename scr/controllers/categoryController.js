import category from "../models/Category";
import category from "../models/Category";

class CategoryController {
    static listarNomes = (req, res) => {        // Lista os Nomes da Tabela category
        category.fing((err, livros) =>{
            res.status(200).json(category)
        })
    }

    static listID = (req, res) => {             // Lista os Nomes da Tabela pelo ID
        const id = req.params.id;

        category.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id do Nome não encontrado.`})
            } else {
                res.status(200).send(category);
            }
        })
    }

    static cadastrarNome = (req, res) => {      
        let category = new category(req.body);

        category.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar o Nome`})
            }else {
                res.status(201).send(category.toJSON())
            }
        })
    }

    static atualizarNome = (req, res) => {
        const id = req.params.id;

        category.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Nome atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })

    }

    static excluirNome = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Nome removido com sucesso'})
              } else {
                res.status(500).send({message: err.message})
              } 
        })
    }
}

export default CategoryController
