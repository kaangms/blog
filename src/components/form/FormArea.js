import React from "react";

function FormArea() {
  return (
    <div className="callback-form">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>
                Request a <em>call back</em>
              </h2>
              <span>Etiam suscipit ante a odio consequat</span>
            </div>
          </div>
          <div className="col-md-12">
            <div className="contact-form">
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
                        required=""
                      ></input>
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="E-Mail Address"
                        required=""
                      ></input>
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        name="subject"
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        required=""
                      ></input>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Your Message"
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="border-button"
                      >
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormArea;
