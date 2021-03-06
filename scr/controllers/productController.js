import product from "../models/Product";
import product from "../models/Product";

class ProductController {

    static listarProdutos = (req, res) => {
        product.find((err, product) => {
            res.status(200).json(product)
        })
    }

    static listID = (req, res) => {
        const id = req.params.id;

        product.findById(id, (err, product) => {
            if(err) {
                res.status(400).send({message: `${err.message} - ID do produto não encontrado`})
            } else {
                res.status(200).send(product);
            }
        })
    }

    static cadastrarProdutos = (req, res) => {
        let product = new product(req.body);

        product.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar um Produto`})
            } else {
                res.status(201).send(product.toJSON())
            }
        })
    }

    static atualizarProdutos = (req, res) => {
        const id = req.params.id;

        product.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Produto atualizado com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirProdutos = (req, res) => {
        const id = req.params.id;

        product.findByIdAndDelete(id, (err) => {
            if(!err) {
               res.status(200).send({message: 'Produto removido com sucesso'}) 
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }    
}

export default ProductController

