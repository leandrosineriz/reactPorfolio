import React, { useEffect } from "react";
import { useUserForm } from "../rymApp/hooks/Custom.hooks";
import { useState } from "react";

export const UserForm = () => {
  const { form, setForm, handleChanges } = useUserForm();

  const [areEquals, setAreEquals] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  }

  useEffect(() => {
    const { password } = form;
    setAreEquals(password===passwordConfirmation);
  }, [passwordConfirmation]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="position-relative"
      style={{ padding: 5 + "vw " + 0 + " " + 5 + "vw " + 25 + "vw" }}
    >
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Registrarse</h4>
        <form className="needs-validation" noValidate="">
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Mail@example.com"
                name="email"
                onChange={handleChanges}
              />
              <div className="invalid-feedback">
                Por favor ingrese un email valido
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Clave
              </label>
              <input
                type="password"
                className="form-control"
                id="address"
                placeholder="Contraseña"
                required=""
                name="password"
                onChange={handleChanges}
              />
              
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Repetir Clave
              </label>
              <input
                type="password"
                className="form-control"
                id="address2"
                placeholder="Contraseña"
                required=""
                onChange={handlePasswordConfirmation}
              />
              { !areEquals && (
                <div className="form-text list-group-item-danger">
                  Las claves no son iguales
                </div>
                )
              }
              
            </div>
          </div>

          <hr className="my-4" />

          <button
            disabled={!areEquals}
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
};
