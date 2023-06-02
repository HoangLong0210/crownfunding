import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import IconEyeToggle from "components/icons/IconEyeToggle";
import FormGroup from "components/common/FormGroup";
import ButtonGoogle from "components/button/ButtonGoogle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { Checkbox } from "components/checkbox";
import { Button } from "components/button";

const schema = yup.object({
  name: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "Password must be 8 character"),
});

const SignUpPage = () => {
  const { value: acceptTerm, handleToggleValue: handleAcceptTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const handleSignUp = (values) => {
    console.log(values);
  };

  return (
    <LayoutAuthentication heading="SIGN UP">
      <p className="text-text3 text-center lg:text-sm font-normal text-xs lg:mb-8 mb-6">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign in
        </Link>
      </p>
      <ButtonGoogle></ButtonGoogle>
      <p className="text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Phan Đình Hoàng Long"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
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
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleAcceptTerm}>
            <p className="text-sm text-text2 flex-1 text-sx lg:text-sm dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button type="submit" kind="primary" className="w-full">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
