import React, { useState } from 'react';
import styled from '@emotion/styled';

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #2d3748;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${props => props.hasError ? '#e53e3e' : '#e2e8f0'};
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#e53e3e' : '#667eea'};
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid ${props => props.hasError ? '#e53e3e' : '#e2e8f0'};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#e53e3e' : '#667eea'};
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const ErrorMessage = styled.span`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: -0.25rem;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: #c6f6d5;
  color: #22543d;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  font-weight: 600;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // Validação do nome
    if (!formData.nome.trim()) {
      newErrors.nome = 'O nome é obrigatório';
    } else if (formData.nome.trim().length < 3) {
      newErrors.nome = 'O nome deve ter pelo menos 3 caracteres';
    }

    // Validação do email
    if (!formData.email.trim()) {
      newErrors.email = 'O email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Digite um email válido';
    }

    // Validação da mensagem
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'A mensagem é obrigatória';
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = 'A mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar para Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contato',
          'nome': formData.nome,
          'email': formData.email,
          'mensagem': formData.mensagem
        }).toString()
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ nome: '', email: '', mensagem: '' });
        
        // Esconde a mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error('Erro no envio');
      }

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper>
      {submitSuccess && (
        <SuccessMessage>
          ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
        </SuccessMessage>
      )}

      <Form 
        name="contato"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* Campo oculto necessário para Netlify Forms */}
        <input type="hidden" name="form-name" value="contato" />
        
        {/* Campo honeypot para proteção contra spam */}
        <input type="hidden" name="bot-field" />

        <FormGroup>
          <Label htmlFor="nome">Nome *</Label>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
            hasError={!!errors.nome}
          />
          {errors.nome && <ErrorMessage>{errors.nome}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            hasError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="mensagem">Mensagem *</Label>
          <TextArea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Escreva sua mensagem aqui..."
            hasError={!!errors.mensagem}
          />
          {errors.mensagem && <ErrorMessage>{errors.mensagem}</ErrorMessage>}
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;