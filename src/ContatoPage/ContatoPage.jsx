// Contato.jsx
import React from 'react';
import ContactForm from '../_components/ContatoForm.jsx';
import Layout from '../_components/Layout/Layout.jsx';

const ContatoPage  = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-6">Fale Conosco</h1>
        <p className="text-center text-gray-600 mb-10">
          Preencha o formulário abaixo para entrar em contato conosco.
        </p>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContatoPage;
