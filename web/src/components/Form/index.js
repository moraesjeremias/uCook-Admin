import React, { useState, useEffect } from "react";
import "./styles.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./styles.css";

function FormInput (){
    const [product, setProduct] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [carbs, setCarbs] = useState('');
    const [imgURL, setImgURL] = useState('');

  return (
    <>
      <section className="sub-forms">
        <div>
          <Form id="input-form">
            <Form.Group className="form-row" controlId="formProduct">
              <Form.Control
                className="col"
                type="product"
                id="product"
                placeholder="Produto"
                value={product}
                onChange={e => setProduct(e.target.value)}
                required
              />
              <Form.Control
                className="col"
                type="brand"
                id="brand"
                placeholder="Marca"
                value={brand}
                onChange={e => setBrand(e.target.value)}
                required
              />
              <Form.Control
                className="col"
                type="number"
                id="price"
                placeholder="Preço (R$)"
                value={price}
                onChange={e => setPrice(e.target.value)}
                required
              />
              <Form.Control
                className="col"
                type="carbs"
                id="carbs"
                placeholder="Carboidratos (g)"
                value={carbs}
                onChange={e => setCarbs(e.target.value)}
                required
              />
              <Form.Control
                className="col"
                type="img-url"
                id="img-url"
                placeholder="URL da Imagem"
                value={imgURL}
                onChange={e => setImgURL(e.target.value)}
                required
              />
              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </Form.Group>
          </Form>
        </div>
      </section>
    </>
  );
};

export default FormInput;
