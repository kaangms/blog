import React from 'react'

function FormFooter() {
    return (
      
            <div className="col-md-3 footer-item last-item">
            <h4>Contact Us</h4>
            <div className="contact-form">
              <form id="contact footer-contact" action="" method="post">
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""></input>
                    </fieldset>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required=""></input>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="filled-button">Send Message</button>
                    </fieldset>
                  </div>
                </div> 
              </form>
            </div>
          </div> 
    
    )
}

export default FormFooter
