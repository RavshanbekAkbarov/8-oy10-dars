import { useState } from "react";
import { Link } from "react-router-dom";
import FromInput from "../components/FromInput";
import { toast } from "react-toastify";



function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 3) {
      toast.error("Ism 3ta belgidan ko‘p bo‘lishi kerak");
      return;
    }
    if (userData.email.length < 3) {
      toast.error("Email 3ta belgidan ko‘p bo‘lishi kerak");
      return;
    }
    if (userData.password.length < 6) {
      toast.error("Parol 6ta belgidan ko‘p bo‘lishi kerak");
      return;
    }
    if (userData.password !== userData.repeatPassword) {
      toast.error("Parollar mos emas");
      return;
    }

    console.log("User Data:", userData);
    toast.success("Ro‘yxatdan muvaffaqiyatli o‘tdingiz!");
  };

  return (
    <div className="h-screen grid place-items-center w-full">
      <form className="max-w-96 mx-auto w-full" onSubmit={handleSubmit}>
        <h2 className="text-5xl font-bold text-blue-400 text-center mb-5">
          Register
        </h2>
        <FromInput
          type="text"
          placeholder="Name"
          label="Display Name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <FromInput
          type="email"
          placeholder="Email"
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <FromInput
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <FromInput
          type="password"
          placeholder="Repeat password"
          label="Repeat password"
          name="repeatPassword"
          value={userData.repeatPassword}
          onChange={handleInputChange}
        />
        <div className="mt-5">
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </div>
        <div className="text-center mt-1">
          <p>
            If you don't have an account,{" "}
            <Link className="link link-primary" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
