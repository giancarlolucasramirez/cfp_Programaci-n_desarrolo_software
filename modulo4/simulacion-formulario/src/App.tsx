import { useState } from "react";
import * as yup from "yup";
import "./App.css";
import { FiLogOut } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { PiPasswordLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";



interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

function App() {
  //manejo de los estados tanto como el email y password como los errores
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<Errors>({});

  //esquema para las validaciones
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email no Valido")
      .required("Se requiere llenar el campo"),
    password: yup
      .string()
      .min(8, "Su contraseña debe de tener mínimo 8 carácteres")
      .required("Debes de poner una contraseña"),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* { abortEarly: false } hace que Yup no se detenga en el primer error, sino que devuelva todos los errores encontrados. */
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setError({});
      alert("Inicio de sesión exitoso  ");
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: Errors = {};
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path as keyof Errors] = error.message;
          }
        });
        setError(newErrors);
      }
    }
  };

  //Se ejecuta cada vez que el usuario escribe en un input.
  //Actualiza formData con los nuevos valores.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    validationSchema
      .validateAt(name, { [name]: value })
      .then(() => {
        setError((prevErrors) => ({ ...prevErrors, [name]: undefined }));
      })
      .catch((err) => {
        setError((prevErrors) => ({ ...prevErrors, [name]: err.message }));
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="bg-linear-to-t from-white to-sky-200 bg-center bg-no-repeat bg-cover h-auto w-96 rounded-xl flex flex-col pt-8 shadow-xl">
            <div className="flex justify-center">
              <div className="h-12 w-12 bg-white text-black rounded-xl flex justify-center items-center shadow-xl">
                <FiLogOut className="text-3xl" />
              </div>
            </div>
            <div className="text-black justify-center pt-2 font-bold flex flex-col">
              <span className="text-3xl flex justify-center">
                Sign in with email
              </span>
              <p className="text-sm flex justify-center pt-4 font-normal text-gray-600 text-center">
                Make a new doc to bring your words, data and teams together. For
                free
              </p>
              <div className="pl-12 pt-5 ">
                <div className="relative flex items-center">
                  <CiMail className="absolute left-3 text-gray-500" />
                  <input
                    type="email"
                    className="bg-gray-300 rounded-lg p-2 w-72 pl-12 "
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                  />
                </div>
                <div className="flex justify-center ">
                  {error.email && (
                    <p className="text-red-500 pr-12 ">{error.email}</p>
                  )}
                </div>

                <div className="relative flex items-center pt-2">
                  <PiPasswordLight className="absolute left-3 text-gray-500" />
                  <input
                    type="password"
                    className="bg-gray-300 rounded-lg p-2 w-72 pl-12 "
                    placeholder="Contraseña"
                    required
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                  />
                </div>
                <div className="flex justify-center text-center">
                  {error.password && (
                    <p className="text-red-500 pr-12 ">{error.password}</p>
                  )}
                </div>

                <a href="" className="flex justify-end pr-12">
                  Forgot password?
                </a>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex justify-center pt-4"
              >
                <button
                  type="submit"
                  className="text-white bg-black rounded-xl w-72 h-10 hover:bg-gray-400 "
                >
                  Get Started
                </button>
              </form>
              <p className="flex justify-center text-gray-500 pt-5">
                . . . . . . . . . . . . . . Or sing in with . . . . . . . . . .
                . . . .
              </p>
              <div className="flex justify-evenly pt-4 pb-6 ">
                <div className="relative flex items-center pt-2">
                  <FaGoogle className="absolute left-8 text-black flex justify-center" />
                  <button className="bg-white rounded-xl w-22 h-10 shadow-xl hover:bg-gray-200" />
                </div>
                <div className="relative flex items-center pt-2">
                  <FaFacebook className="absolute left-8  text-black flex justify-center" />
                  <button className="bg-white rounded-xl w-22 h-10 shadow-xl hover:bg-gray-200" />
                </div>
                <div className="relative flex items-center pt-2">
                  <FaApple className="absolute left-8 text-black flex justify-center" />
                  <button className="bg-whiterounded-xl w-22 h-10 shadow-xl hover:bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
