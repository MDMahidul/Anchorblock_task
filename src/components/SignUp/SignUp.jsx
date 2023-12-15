import { Card, Button, Label } from "flowbite-react";
import { useForm } from "react-hook-form";
import Paper from "../../assets/paper.svg";
import { Link } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";
import { useState } from "react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(); 
  
  const [passwordScore, setPasswordScore] = useState();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card
        href="#"
        className="max-w-md mx-auto rounded-2xl p-9 cursor-auto hover:!bg-white"
        style={{ width: "100%", maxWidth: "444px" }}
      >
        <div>
          <div className="flex items-center gap-2.5">
            <img src={Paper} alt="" />
            <p className="text-3xl font-bold text-gray-600">Stack</p>
          </div>
          <p className="text-xl font-semibold my-5 text-gray-700">
            Sign up to join with Stack
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label
                className="font-medium text-gray-700"
                htmlFor="email1"
                value="Email"
              />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className={`input-field  mb-1 ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-opacity-20"
                  : ""
              }`}
              placeholder="Enter Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="font-medium text-gray-700"
                htmlFor="password1"
                value="Password"
              />
            </div>
            <input
              className={`input-field  mb-1 ${
                errors.password
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500 focus:ring-opacity-20"
                  : ""
              }`}
              id="password"
              type="password"
              name="password"
              placeholder="******"
              onChange={() => watch("password")}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
            <PasswordStrengthBar
            className="mt-3 "
            style={{height:"20px"}}
              password={watch("password")}
              minLength={4}
              shortScoreWord=""
              scoreWords={""}
              onChangeScore={setPasswordScore}
            />
          </div>
          <Button
            className="mb-3 bg-[#6941C6] hover:!bg-[#5927ce]"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <p className="text-base font-medium text-gray-400">
          Already have an account?{" "}
          <Link className="text-blue-600" to="/">
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignUp;
