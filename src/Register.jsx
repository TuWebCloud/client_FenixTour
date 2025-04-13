import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
    <section className="section-register">
      <h1>Regístrate en el Viaje</h1>
      <form action="submit">
        <label>Tu Nombre</label>
        <input type="text" />
        <label>Tus Apellidos</label>
        <input type="text" />
        <label>Teléfono</label>
        <input type="tel" placeholder="+53 52525252" />
        <label>Número de Pasajeros</label>
        <input type="number" min="1" max="15" /* getFromApi */ />
        <Link to="/">
          <button>Confirmar</button>
        </Link>
      </form>
    </section>
    <style jsx>{`
      .section-register {
        display: grid;
        justify-content: center;
      }
      .section-register form {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 80vw;
      }
      .section-register h1 {
        text-align: center;
        margin-top: 100px;
        margin-bottom: 20px;
        font-size: 32px;
      }
      .section-register label {
        font-size: 22px;
        margin-top: 15px;
        padding-left: 8px;
      }
      .section-register input {
        font-size: 22px;
        padding: 4px;
        padding-left: 8px;
        border: none;
        border-bottom: 2px solid #f4bd0a;
        transition: all .2s ease;
      }
      .section-register input:focus {
        border-radius: 15px;
        outline: 2px solid #f4bd0a;
      }
      .section-register button {
        width: 100%;
        font-size: 30px;
        margin: 45px 0;
        border-radius: 20px;
        border: none;
        background-color: #f4bd0a;
      }
      .section-register button:hover {
        background-color: #f4bd0aaa;
      }

      @media screen and (min-width: 600px) {
        .section-register h1 {
          font-size: 25px;
          text-align: left;
          padding-left: 38px;
          margin-bottom: 10px;
        }
        .section-register form {
          width: 500px;
          padding: 30px 30px 0;
          border-radius: 20px;
          border: 2px solid #f4bd0a;
          margin-bottom: 40px;
        }
        .section-register button {
          width: 400px;
          margin-left: 50%;
          transform: translateX(-50%);
        }
      }
    `}</style>
    </>
  );
}

export default Register;