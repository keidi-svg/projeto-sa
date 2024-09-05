import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          user_name: `${data.firstName} ${data.lastName}`,
          to_name: 'Keidi',
          user_email: data.email,
          to_email: 'keidi.t.b@gmail.com',
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email enviado com sucesso:', result.text);
        },
        (error) => {
          console.log('Erro ao enviar o email:', error.text);
        }
      );
  };

  const formStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const errorStyle = {
    color: '#e53e3e',
    fontSize: '12px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={formStyle}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Entre em Contato</h2>
      <form onSubmit={handleSubmit(sendEmail)}>
        <div>
          <label htmlFor="firstName">Nome</label>
          <input
            style={inputStyle}
            type="text"
            id="firstName"
            placeholder="Primeiro nome"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <p style={errorStyle}>Nome é obrigatório.</p>}
        </div>

        <div>
          <label htmlFor="lastName">Sobrenome</label>
          <input
            style={inputStyle}
            type="text"
            id="lastName"
            placeholder="Sobrenome"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && <p style={errorStyle}>Sobrenome é obrigatório.</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            style={inputStyle}
            type="email"
            id="email"
            placeholder="Seu email"
            {...register('email', { required: true })}
          />
          {errors.email && <p style={errorStyle}>Email é obrigatório.</p>}
        </div>

        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea
            style={inputStyle}
            id="message"
            rows="5"
            placeholder="Sua mensagem"
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && <p style={errorStyle}>Mensagem é obrigatória.</p>}
        </div>

        <div className="text-center">
          <motion.button
            type="submit"
            style={buttonStyle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Enviar
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
