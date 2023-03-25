import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classNames from "classnames";
import UserDataService from "../services/user.services";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      await UserDataService.addUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card border-0 shadow w-50 p-3 m-3 mx-auto">
      <h2 className="text-center mb-3 text-primary">
        Student Resigtration Form
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            className={classNames("", { "is-invalid": errors.fname })}
            type="text"
            placeholder="Enter Full Name"
            {...register("fname", {
              required: "This Field Is Required...",
              minLength: {
                value: 4,
                message: "Please Enter Fullname Minimum 4 Characters...",
              },
            })}
          />
          {errors.fname && (
            <div className="invalid-feedback">{errors.fname.message}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className={classNames("", { "is-invalid": errors.email })}
            type="text"
            placeholder="Enter Your Email"
            {...register("email", {
              required: "This Field is Required...",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Please Enter a Valid E-mail Address",
              },
            })}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Student Id</Form.Label>
          <Form.Control
            className={classNames("", { "is-invalid": errors.studId })}
            type="text"
            placeholder="Enter Your Student Id"
            {...register("studId", { required: "This is Required Field..." })}
          />
          {errors.studId && (
            <div className="invalid-feedback">{errors.studId.message}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select Branch</Form.Label>
          <Form.Select
            aria-label="Default select example"
            {...register("branch", { required: true })}
          >
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Automobile Engineering">
              Automobile Engineering
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select Year</Form.Label>
          <Form.Select
            aria-label="Default select example"
            {...register("year", { required: true })}
          >
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Fourth year">Fourth Year</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegistrationForm;
