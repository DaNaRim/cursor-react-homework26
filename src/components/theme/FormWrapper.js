import styled from "styled-components"

export const FormWrapper = styled.form`
  font-family: ${({theme}) => theme.$fonts.$primary};
  width: 25rem;
  max-width: 25rem;
  margin: 0 auto;
  padding: 2.5rem;
  border: 1px solid ${({theme}) => theme.$blockColors.$borderColor};

  header {
    width: fit-content;
    margin: 0 auto 1.5rem auto;

    .img_wrapper {
      position: relative;
      width: 2rem;
      height: 2rem;
      margin: 0 auto 0.5rem auto;
      border-radius: 100%;
      background-color: ${({theme}) => theme.$blockColors.$formIconColor};

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        height: 50%;
        transform: translate(-50%, -50%);
      }
    }

    h1 {
      font-size: ${({theme}) => theme.$fontsSize.$h1};
      color: ${({theme}) => theme.$textColors.$primary};
    }
  }

  .fields {
    margin-bottom: 0.5rem;

    .input_wrapper {
      margin-bottom: 1rem;

      .error {
        font-size: ${({theme}) => theme.$fontsSize.$secondary};
        margin-top: 0.5rem;
        color: brown;
      }

      input[type="text"], input[type="password"], input[type="email"] {
        width: 100%;
        height: 2.5rem;
        padding: 0.5rem;
        color: ${({theme}) => theme.$textColors.$secondary};
        border: 2px solid ${({theme}) => theme.$blockColors.$borderColor};
        border-radius: ${({theme}) => theme.$borderRadius.$primary};
        background-color: transparent;

        &:focus {
          color: ${({theme}) => theme.$textColors.$secondary};
          border-color: ${({theme}) => theme.$textColors.$primary};
          outline: none;
        }

        &.incorrect {
          border-color: brown;
        }

        &.correct:not(:placeholder-shown) {
          border-color: green;
        }

        &[name="firstName"]:placeholder-shown, &[name="lastName"]:placeholder-shown {
          background: -webkit-linear-gradient(left, 
                                              ${({theme}) => theme.$textColors.$secondary} 0%,
                                              ${({theme}) => theme.$textColors.$secondary} 48%,
                                              red 48%, red 100%);
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
        }

        &[name="email"]:placeholder-shown {
          background: -webkit-linear-gradient(left, 
                                              ${({theme}) => theme.$textColors.$secondary} 0%,
                                              ${({theme}) => theme.$textColors.$secondary} 30%,
                                              red 30%, red 100%);
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
        }

        &[name="password"]:placeholder-shown {
          background: -webkit-linear-gradient(left,
                                              ${({theme}) => theme.$textColors.$secondary} 0%,
                                              ${({theme}) => theme.$textColors.$secondary} 22%,
                                              red 22%, red 100%);
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
        }

        &[name="confirmPassword"]:placeholder-shown {
          background: -webkit-linear-gradient(left, 
                                              ${({theme}) => theme.$textColors.$secondary} 0%,
                                              ${({theme}) => theme.$textColors.$secondary} 37%,
                                              red 37%, red 100%);
                      -webkit-background-clip: text;
                      -webkit-text-fill-color: transparent;
        }
      }

      .checkbox {
        display: flex;
        align-items: center;

        & * {
          cursor: pointer;
        }

        .checkbox_wrapper {
          input {
            display: none;

            &:checked + label {
              color: red;
            }
          }

          .checkbox-sign {
            font-size: 0.6rem;
            display: block;
            min-width: 0.9rem;
            max-width: 0.9rem;
            min-height: 0.9rem;
            max-height: 0.9rem;
            margin: 0 0.5rem 0 0;
            text-align: center;
            color: transparent;
            border: 0.1rem solid ${({theme}) => theme.$textColors.$secondary};
            border-radius: 0.2rem;
            background-color: transparent;
          }
        }

        .checkbox-desc {
          font-size: ${({theme}) => theme.$fontsSize.$secondary};
          line-height: 1rem;
          color: ${({theme}) => theme.$textColors.$secondary};
        }
      }
    }

    fieldset {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .input_wrapper {
        width: 47.5%;
      }
    }


    p {
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
      color: ${({theme}) => theme.$textColors.$secondary};

      span {
        color: red;
      }
    }

    button {
      font-weight: bold;
      width: 100%;
      height: 2rem;
      margin-bottom: 0;
      cursor: pointer;
      text-transform: uppercase;
      color: ${({theme}) => theme.$blockColors.$primary};
      border: none;
      border-radius: ${({theme}) => theme.$borderRadius.$primary};
      background-color: ${({theme}) => theme.$blockColors.$buttonColor};

      &:hover {
        color: ${({theme}) => theme.$blockColors.$buttonColor};
        border: 1px solid ${({theme}) => theme.$blockColors.$buttonColor};
        background-color: ${({theme}) => theme.$blockColors.$primary};
      }
    }
  }
}

.links {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;

  a, .link {
    font-size: ${({theme}) => theme.$fontsSize.$secondary};
    display: block;
    float: right;
    text-decoration: none;
    color: ${({theme}) => theme.$textColors.$link};

    &:only-child {
      margin-left: auto;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}

footer {
  font-size: ${({theme}) => theme.$fontsSize.$secondary};
  margin-top: 3rem;
  text-align: center;
  color: ${({theme}) => theme.$textColors.$secondary};
}
`