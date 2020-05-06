const ProductsModel = require('../model/Products');
const productsModel = new ProductsModel();

class Products {
    get (req, res) {
        const {id} = req.params;

        productsModel.get(id)
            .then((product) => {
                if (!product.exists) {
                    res.status(404).send({message: 'Product not found'});
                }
                res.json(product.data());
            })
            .catch(error => res.status(500).send(error));
    }

    create (req, res) {
        productsModel.create(req.body)
            .then((product) => {
                res.status(201).send({
                    ...req.body,
                    id: product.id,
                });
            })
            .catch(error => res.status(500).send(error));
    }

    update (req, res) {
        const {id} = req.params;

        productsModel.update(id, req.body)
            .then(res.status(200).send({message: 'Updated product', product: req.body}))
            .catch(error => res.status(500).send(error));
    }

    delete (req, res) {
        const {id} = req.params;

        productsModel.delete(id)
            .then(res.status(200).send({message: 'Deleted product'}))
            .catch(error => res.status(500).send(error));
    }
}

module.exports = Products;