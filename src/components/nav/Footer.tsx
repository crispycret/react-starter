import * as React from 'react';

export const Footer = (props: any) => {
  const [value, setValue] = React.useState(0);

  return (
    <footer className="bg-dark text-center text-white" style={{padding: '0vh', margin: '0vh'}}>
      <div className="container p-4 pb-0" style={{padding: '0vh', margin: '0vh auto'}}>
        <section className="mb-4" style={{padding: '0vh', margin: '0vh auto'}}>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-google"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2022 Copyright:  <> </>
        <a className="text-white" href="https://mdbootstrap.com/">Fractal Engine</a>
      </div>
  </footer>
  );
}


export default Footer;