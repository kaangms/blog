import React from "react";
import { FaAngleRight } from "react-icons/fa";
import service01 from "../../images/single_service_01.jpg";
import service02 from "../../images/single_service_02.jpg";
import service03 from "../../images/single_service_03.jpg";
import service04 from "../../images/single_service_04.jpg";

function Consultancy() {
  return (
    <div>
      <div className="single-services">
        <div className="container">
          <div className="row" id="tabs">
            <div className="col-md-4">
              <ul>
                <li>
                  <a href="#tabs-1">
                    Yönetim ve Organizasyon
                    <FaAngleRight />
                  </a>
                </li>{" "}
                <li>
                  <a href="#tabs-2">
                    Stratejik Yönetim
                    <FaAngleRight />
                  </a>
                </li>{" "}
                <li>
                  <a href="#tabs-3">
                    Kurum Kültürü ve Liderlik
                    <FaAngleRight />
                  </a>
                </li>
                <li>
                  <a href="#tabs-4">
                    Girişimcilik
                    <FaAngleRight />
                  </a>
                </li>
                <li>
                  <a href="#tabs-5">
                    Kobiler
                    <FaAngleRight />
                  </a>
                </li>
                <li>
                  <a href="#tabs-6">
                    Aile İşletmeleri
                    <FaAngleRight />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <section className="tabs-content">
                <article id="tabs-1">
                  <img src={service01} alt=""></img>
                  <h4>Yönetim ve Orginzasyon</h4>
                  <p>
                    Vivamus sed feugiat elit. Pellentesque pretium, massa at
                    placerat vehicula, neque turpis pulvinar tortor, eget
                    convallis lorem odio non tortor. Donec massa est, fermentum
                    sit amet felis ac, maximus luctus elit. Vivamus aliquet,
                    dolor id imperdiet imperdiet, dui diam aliquet dui, a
                    euismod metus enim ac velit. Vivamus eu tristique odio, vel
                    tristique quam.
                    <br></br>
                    <br></br>Proin eu molestie risus. Etiam suscipit pretium
                    odio, at consectetur nisi. Sed ut dolor in augue cursus
                    ultrices. Vivamus mauris turpis, auctor vel facilisis in,
                    tincidunt vel diam. Sed vitae scelerisque orci. Nunc non
                    magna orci. Aliquam commodo mauris ante.
                  </p>
                  <a href="" className="filled-button">
                    Read More ...
                  </a>
                </article>
                <article id="tabs-2">
                  <img src={service02} alt=""></img>
                  <h4>Stratejik Yönetim</h4>
                  <p>
                    Sed ut dolor in augue cursus ultrices. Vivamus mauris
                    turpis, auctor vel facilisis in, tincidunt vel diam. Sed
                    vitae scelerisque orci. Nunc non magna orci. Aliquam commodo
                    mauris ante, quis posuere nibh vestibulum sit amet
                    <br></br>
                    <br></br>Pellentesque pretium, massa at placerat vehicula,
                    neque turpis pulvinar tortor, eget convallis lorem odio non
                    tortor. Donec massa est, fermentum sit amet felis ac,
                    maximus luctus elit. Vivamus aliquet, dolor id imperdiet
                    imperdiet, dui diam aliquet dui, a euismod metus enim ac
                    velit. Vivamus eu tristique odio, vel tristique quam.
                  </p>
                  <a href="" className="filled-button">
                    Read More ...
                  </a>
                </article>
                <article id="tabs-3">
                  <img src={service03} alt=""></img>
                  <h4>Kurum Kültürü ve Liderlik</h4>
                  <p>
                    Mauris lobortis quam id dictum dignissim. Donec pellentesque
                    erat dolor, cursus dapibus turpis hendrerit quis.
                    Suspendisse at suscipit arcu. Nulla sed erat lectus. Nulla
                    facilisi. In sit amet neque sapien. Donec scelerisque mi at
                    gravida efficitur. Nunc lacinia a est eu malesuada.
                    Curabitur eleifend elit sapien, sed pulvinar orci luctus
                    eget.
                    <br></br>
                    <br></br>Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Nunc vel ultrices
                    nulla, ac tincidunt eros. Aenean quis tellus velit. Praesent
                    pretium justo non auctor condimentum.
                  </p>
                  <a href="" className="filled-button">
                    Read More ...
                  </a>
                </article>
                <article id="tabs-4">
                  <img src={service04} alt=""></img>
                  <h4>Girişimcilik</h4>
                  <p>
                    Integer vehicula sapien quis dolor efficitur, eget molestie
                    eros tempus. Curabitur sollicitudin, tortor at suscipit
                    volutpat, nisi arcu aliquet dui, vitae semper sem turpis
                    quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut
                    ultricies maximus turpis, in sollicitudin ligula posuere
                    vel.
                    <br></br>
                    <br></br>Donec finibus maximus neque, vitae egestas quam
                    imperdiet nec. Proin nec mauris eu tortor consectetur
                    tristique. Etiam suscipit ante a odio consequat, in ornare
                    lacus suscipit. Cras ac libero massa. Quisque rhoncus velit
                    feugiat vulputate mollis. Donec nisl eros, malesuada sed
                    nisi id, condimentum condimentum quam.
                  </p>
                  <a href="" className="filled-button">
                    Read More ...
                  </a>
                </article>
                <article id="tabs-5">
                  <img src={service04} alt=""></img>
                  <h4>Kobiler</h4>
                  <p>
                    Integer vehicula sapien quis dolor efficitur, eget molestie
                    eros tempus. Curabitur sollicitudin, tortor at suscipit
                    volutpat, nisi arcu aliquet dui, vitae semper sem turpis
                    quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut
                    ultricies maximus turpis, in sollicitudin ligula posuere
                    vel.
                    <br></br>
                    <br></br>Donec finibus maximus neque, vitae egestas quam
                    imperdiet nec. Proin nec mauris eu tortor consectetur
                    tristique. Etiam suscipit ante a odio consequat, in ornare
                    lacus suscipit. Cras ac libero massa. Quisque rhoncus velit
                    feugiat vulputate mollis. Donec nisl eros, malesuada sed
                    nisi id, condimentum condimentum quam.
                  </p>
                  <a href="" className="filled-button">
                    Read More ...
                  </a>
                </article>
                <article id="tabs-6">
                  <img src={service04} alt=""></img>
                  <h4>Aile İşletmeleri</h4>
                  <p>
                    Integer vehicula sapien quis dolor efficitur, eget molestie
                    eros tempus. Curabitur sollicitudin, tortor at suscipit
                    volutpat, nisi arcu aliquet dui, vitae semper sem turpis
                    quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut
                    ultricies maximus turpis, in sollicitudin ligula posuere
                    vel.
                    <br></br>
                    <br></br>Donec finibus maximus neque, vitae egestas quam
                    imperdiet nec. Proin nec mauris eu tortor consectetur
                    tristique. Etiam suscipit ante a odio consequat, in ornare
                    lacus suscipit. Cras ac libero massa. Quisque rhoncus velit
                    feugiat vulputate mollis. Donec nisl eros, malesuada sed
                    nisi id, condimentum condimentum quam.
                  </p>
                  <a href="" className="filled-button">
                    Read More ...
                  </a>
                </article>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultancy;
