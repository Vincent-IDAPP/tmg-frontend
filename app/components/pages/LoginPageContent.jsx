"use client";
import React from "react";
import Diagramme from "../Diagramme";
import Heading from "../Heading";
import { useState, useEffect } from "react";
import styles from "@/app/css/pages/_loginPageContent.module.scss";
import Button from "../Button";
import Input from "../Input";
import InputField from "../global/InputField";
import Label from "../global/Label";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { signIn } from "next-auth/react";

const LoginPageContent = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if(session){
      router.push("/")
    }
  }, [session, router]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log(formData);

    try {
      const res = await signIn("credentials", {
        redirect: true,
        email: formData.email,
        password: formData.password,
        callbackUrl: "/",
      });

      if (!res) {
        console.log("Connexion échouchée", res);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    console.log(formData);
  };

  return (
    <section className={styles.loginPageContent}>
      <Heading title={`Connexion à TrackMyGrades`} textAlign={"center"} />
      <form className={styles.formContainer}>
        <InputField>
          <Label text={"Adresse e-mail"} name={"email"} />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputField>
        <InputField>
          <Label text={"Mot de passe"} name={"password"} />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </InputField>
        <Button
          text={"Se connecter"}
          style={"theme"}
          margin={"0 auto"}
          onClick={handleSubmit}
        />
        <Button
          text={"Se connecter avec google"}
          style={"theme"}
          margin={"0 auto"}
          onClick={() => signIn("google")}
        />
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </section>
  );
};

export default LoginPageContent;
