import React from 'react'
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
function ContactArea2() {
    return (
        <div class="contact-information">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="contact-item">
              <FaPhone/>
                <h4>Phone</h4>
                <p>Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
                <a href="#">090-080-0760</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-item">
              <FaEnvelope/>
                <h4>Email</h4>
                <p>Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
                <a href="#">info@company.com</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-item">
                <FaMapMarker/>
                <h4>Location</h4>
                <p>1020 New Mountain Street<br></br>Forest Park, FP 11220</p>
                <a href="#">View on Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    )
}

export default ContactArea2
