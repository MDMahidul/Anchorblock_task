import { Card, Button,Label, TextInput } from "flowbite-react";
import React from "react";
import Paper from "../../assets/paper.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
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
        <form className="flex flex-col gap-4">
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
              className="input-field"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                className="font-medium text-gray-700"
                htmlFor="password1"
                value="Password"
              />
            </div>
            <TextInput
              className="text-base"
              id="password1"
              type="password"
              required
              placeholder="******"
            />
          </div>
          <Button
            className="my-3 bg-[#6941C6] hover:!bg-[#5927ce]"
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
