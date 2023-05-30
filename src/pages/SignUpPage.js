import { Button } from "components/button";
import FormGroup from "components/common/FormGroup";
import { Input } from "components/input";
import { Label } from "components/label";
import LayoutAuthentication from "layout/LayoutAuthentication";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm();

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
      <button className="flex items-center justify-center py-4 border border-strock rounded-xl gap-x-3 w-full text-text2 text-base font-semibold mb-5">
        <img
          srcSet="./icon-google.png 2x"
          alt="icon-google"
          className="w-6 h-6"
        />
        <span>Sign up with google</span>
      </button>
      <p className="text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Phan Đình Hoàng Long"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
          ></Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-5">
          <span className="inline-block w-5 h-5 rounded border border-text4 "></span>
          <p className="text-sm text-text2 flex-1">
            I agree to the{" "}
            <span className="underline text-secondary">Terms of Use</span> and
            have read and understand the{" "}
            <span className="underline text-secondary">Privacy policy.</span>
          </p>
        </div>
        <Button className="bg-primary w-full" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
