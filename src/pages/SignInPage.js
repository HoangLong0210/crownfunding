import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import IconEyeToggle from "components/icons/IconEyeToggle";
import FormGroup from "components/common/FormGroup";
import ButtonGoogle from "components/button/ButtonGoogle";
import Button from "components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";

const schema = yup.object({
  email: yup.string().required("Please enter your email address").email(""),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password must be 8 character"),
});

const SignInPage = () => {
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const handleSignIn = (values) => {
    console.log(values);
  };

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="text-text3 text-center lg:text-sm font-normal text-xs lg:mb-8 mb-6">
        Dont have an account?{" "}
        <Link to="/sign-up" className="text-primary font-medium underline">
          Sign up
        </Link>
      </p>
      <ButtonGoogle></ButtonGoogle>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium text-primary cursor-pointer">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button className="bg-primary w-full" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
