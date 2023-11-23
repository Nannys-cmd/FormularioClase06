import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmarPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (
      formData.nombre.trim() === '' ||
      formData.apellido.trim() === '' ||
      formData.email.trim() === '' ||
      formData.telefono.trim() === '' ||
      formData.password.trim() === ''
    ) {
      setError('Todos los campos son requeridos');
      return;
    }

    if (formData.password !== formData.confirmarPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Almacenamiento de datos simulado usando localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      password: '',
      confirmarPassword: '',
    });
    setError('');
    alert('Registro exitoso');
  };

  const handleLimpiar = () => {
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      password: '',
      confirmarPassword: '',
    });
    setError('');
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Registro</h2>
        {error && <p className="error-msg">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirmarPassword">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmarPassword"
              name="confirmarPassword"
              value={formData.confirmarPassword}
              onChange={handleChange}
            />
          </div>
          <div className="button-group">
            <button type="button" onClick={handleLimpiar}>
              Limpiar
            </button>
            <button type="submit">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
