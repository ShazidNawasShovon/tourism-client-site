import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {
    handlePassword,
    handleEmail,
    handleResetPassword,
    signInWithGoogle,
    handleNameChange,
    toggleLogin,
    isLogin,
    setUserName,
    setError,
    setUser,
    error,
    email,
    pass,
  } = useAuth();

  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  // Handle Google Sign in or sign up
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // Registration or Login  Section

  const handleRegister = (event) => {
    event.preventDefault();
    if (pass.length < 6) {
      setError("Password Must be 6 character long");
      return;
    }
    isLogin ? handleLogin(email, pass) : registerNewUser(email, pass);
  };
  const handleLogin = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        setError("");
        history.push(redirect_url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // Signed up with Email & Pass
  const registerNewUser = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        setError("");
        setUserName(userCredential);
        history.push(redirect_url);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };
  return (
    <Container>
      <Row className="card-shadow">
        <Col
          xs={11}
          md={4}
          className="mx-auto border border-3 p-5 m-5 rounded rounded-3"
        >
          <h4 className="fw-bolder fs-3">
            {isLogin ? "Login" : "Create New Account"}
          </h4>
          <Form onSubmit={handleRegister} className="w-xs-100">
            {!isLogin && (
              <Row>
                <Col>
                  <Form.Control
                    onBlur={handleNameChange}
                    placeholder="Full Name"
                    required
                  />
                </Col>
              </Row>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Your Email"
                required
              ></Form.Control>

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePassword}
                type="password"
                placeholder="Password at least 6 characters"
                required
              />
            </Form.Group>
            {
              <ul>
                <li>{error}</li>
              </ul>
            }

            <Button variant="outline-success" type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </Form>
          <Form.Group className="my-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={toggleLogin}
              type="checkbox"
              label={
                isLogin
                  ? "New to Medi-Ambulance ?"
                  : "Already Have an Account ?"
              }
            />
          </Form.Group>

          {isLogin && (
            <p>
              <Link to="/resetPassword" onClick={handleResetPassword}>
                Forget Password ?
              </Link>
            </p>
          )}
          <div className="container mt-5 mx-auto text-center">
            ----------OR----------
            <br />
            <Button
              onClick={handleGoogleSignUp}
              variant="outline-dark"
              type="submit"
            >
              <i className="fab fa-google"></i>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
