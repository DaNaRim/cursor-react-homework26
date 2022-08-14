import styled from "styled-components"

export const FormWrapper = styled.form`
  font-family: ${({theme}) => theme.$fonts.$primary};
  margin: 0 auto;
  width: 25rem;
  max-width: 25rem;
  padding: 2.5rem;
  border: 1px solid ${({theme}) => theme.$blockColors.$borderColor};

  header {
    margin: 0 auto 1.5rem auto;
    width: fit-content;

    .img_wrapper {
      position: relative;
      width: 2rem;
      height: 2rem;
      margin: 0 auto 0.5rem auto;
      border-radius: 100%;
      background-color: ${({theme}) => theme.$blockColors.$formIconColor};

      img {
        width: 50%;
        height: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
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
        margin-top: 0.5rem;
        font-size: ${({theme}) => theme.$fontsSize.$secondary};
        color: brown;
      }

      input[type="text"], input[type="password"], input[type="email"] {
        width: 100%;
        height: 2.5rem;
        padding: 0.5rem;
        border: 2px solid ${({theme}) => theme.$blockColors.$borderColor};
        border-radius: ${({theme}) => theme.$borderRadius.$primary};
        color: ${({theme}) => theme.$textColors.$secondary};
        background-color: transparent;

        &:focus {
          outline: none;
          border-color: ${({theme}) => theme.$textColors.$primary};
          color: ${({theme}) => theme.$textColors.$secondary};
        }

        &.incorrect {
          border-color: brown;
        }

        &.correct:not(:placeholder-shown) {
          border-color: green;
        }

        &[name="firstName"]:placeholder-shown, &[name="lastName"]:placeholder-shown {
          background: -webkit-linear-gradient(left, ${({theme}) => theme.$textColors.$secondary} 0%,
          ${({theme}) => theme.$textColors.$secondary} 48%,
          red 48%, red 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &[name="email"]:placeholder-shown {
          background: -webkit-linear-gradient(left, ${({theme}) => theme.$textColors.$secondary} 0%,
          ${({theme}) => theme.$textColors.$secondary} 30%,
          red 30%, red 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &[name="password"]:placeholder-shown {
          background: -webkit-linear-gradient(left, ${({theme}) => theme.$textColors.$secondary} 0%,
          ${({theme}) => theme.$textColors.$secondary} 22%,
          red 22%, red 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &[name="confirmPassword"]:placeholder-shown {
          background: -webkit-linear-gradient(left, ${({theme}) => theme.$textColors.$secondary} 0%,
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
              color: ${({theme}) => theme.$textColors.$secondary};
              background-color: transparent;
            }
          }

          .checkbox-sign {
            margin: 0 0.5rem 0 0;
            border: 0.1rem solid ${({theme}) => theme.$textColors.$secondary};
            color: rgba(0, 0, 0, 0.0);
            border-radius: 0.2rem;
            background-color: transparent;
            display: block;
            text-align: center;

            min-width: 0.9rem;
            max-width: 0.9rem;
            min-height: 0.9rem;
            max-height: 0.9rem;
          }
        }

        .checkbox-desc {
          font-size: ${({theme}) => theme.$fontsSize.$secondary};
          color: ${({theme}) => theme.$textColors.$secondary};
          line-height: 1rem;
        }
      }
    }

    fieldset {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .input_wrapper {
        width: 47.5%;
      }
    }


    p {
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      color: ${({theme}) => theme.$textColors.$secondary};

      span {
        color: red;
      }
    }

    button {
      width: 100%;
      height: 2rem;
      border: none;
      background-color: ${({theme}) => theme.$blockColors.$buttonColor};
      border-radius: ${({theme}) => theme.$borderRadius.$primary};
      text-transform: uppercase;
      font-weight: bold;
      color: ${({theme}) => theme.$blockColors.$primary};
      margin-bottom: 0;
      cursor: pointer;

      &:hover {
        background-color: ${({theme}) => theme.$blockColors.$primary};
        color: ${({theme}) => theme.$blockColors.$buttonColor};
        border: 1px solid ${({theme}) => theme.$blockColors.$buttonColor};
      }
    }
  }
}

.links {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;

  a, .link {
    display: block;
    font-size: ${({theme}) => theme.$fontsSize.$secondary};
    color: ${({theme}) => theme.$textColors.$link};
    text-decoration: none;
    float: right;

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