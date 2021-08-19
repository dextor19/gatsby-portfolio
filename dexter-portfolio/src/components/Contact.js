import React, {useState} from 'react'
import styled from "styled-components"
import { navigate } from "gatsby"

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #233554;
  color: #fff;
  min-height: 80vh;
  border-bottom: 1px solid #2f4975;
  border-top: 1px solid #2f4975;

  h1 {
      color: #fff;
  }

  textarea,
  input {
      border: none;
      width: 20rem;
  }
  button {
   background-color: transparent;
   border: 1px solid #64ffda;
   border-radius: 4px;
   color: #fff;
   font-size: 1em;
   padding: 10px 50px;
   text-transform: uppercase;
   font-weight: normal;
   :hover{
      background-color: rgba(100, 255, 218, 0.1);
    }
  }
`;

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}

const Contact = () => {
    const [state, setState] = useState({})

    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }

    return (
        <StyledContactSection>
            <h1>Get In Touch</h1>
            <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
                </p>
                <p>
                <label>
                    NAME
                    <br />
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                </p>
                <p>
                <label>
                    EMAIL
                    <br />
                    <input type="email" name="email" onChange={handleChange} />
                </label>
                </p>
                <p>
                <label>
                    MESSAGE
                    <br />
                    <textarea name="message" onChange={handleChange} />
                </label>
                </p>
                <p>
                <button type="submit">Send</button>
                </p>
            </form>
        </StyledContactSection>
    );
};

export default Contact;