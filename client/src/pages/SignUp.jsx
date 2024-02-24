import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen">
      <div className=" mt-20 flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/*left*/}
        <div className="flex-1">
          <Link
            to={"/"}
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 rounded-xl text-white font-thin">
              NWN
            </span>
            Blog
          </Link>
        </div>
        {/*right*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username"></Label>
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div className="">
              <Label value="Your email"></Label>
              <TextInput type="text" placeholder="name@email.com" id="email" />
            </div>
            <div className="">
              <Label value="Password"></Label>
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone={"purpleToBlue"} type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-4">
            <span>Have an account?</span>
            <Link className="text-blue-500" to={"/sign-in"}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
