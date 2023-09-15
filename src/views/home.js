import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>GovStaffHelp</title>
        <meta property="og:title" content="GovStaffHelp" />
      </Helmet>
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/45dba4e8-4c88-454f-a16d-91defc021f2a/webchat/config.js" defer></script>
      <div className="home-hero">
        <div className="home-bg"></div>
        <header data-thq="thq-navbar" className="home-navbar">
          <span className="home-logo">
            <span>GovStaffHelp</span>
            <br></br>
          </span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <a
                href="https://govstaffhelp.teleporthq.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-button button button-clean"
              >
                Home
              </a>
              <a
                href="https://indianhelpline.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link button button-clean"
              >
                <span className="nav-links">
                  <span>Helpline</span>
                  <br></br>
                </span>
              </a>
              <a
                href="https://legislative.gov.in/constitution-of-india/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link01 button button-clean"
              >
                <span>
                  <span>Constitution Of India</span>
                  <br></br>
                </span>
              </a>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button1">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container01">
                <span className="home-logo1">
                  <span className="home-text08">Async</span>
                  <span className="home-text09">_</span>
                  <span className="home-text10">Sunlight</span>
                </span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text11 button button-clean">Home</span>
                <span className="home-text12 button button-clean">
                  All Projects
                </span>
                <span className="home-text13 button button-clean">
                  Digital Writings
                </span>
              </nav>
              <div className="home-container02">
                <a
                  href="https://www.instagram.com/async_sunlight/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-login button"
                >
                  Follow on instagram
                </a>
              </div>
              <div className="home-socials">
                <button className="social button">
                  <a href="mailto:sumitsharmakaen@gmail.com?subject=">
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M854 256q34 0 59 26t25 60v512q0 34-25 59t-59 25h-684q-34 0-59-25t-25-59v-512q0-34 25-60t59-26h86v-256h342v170h-256v342h84v-256h428z"></path>
                    </svg>
                  </a>
                </button>
                <button className="social button">
                  <a
                    href="https://github.com/Su-nlight"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                    </svg>
                  </a>
                </button>
                <button className="social button">
                  <img
                    alt="image"
                    src="/external/twitter.svg"
                    className="home-image"
                  />
                </button>
                <button className="social button">
                  <a
                    href="https://www.discordapp.com/users/727073320557871137"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      alt="image"
                      src="/external/discord.svg"
                      className="home-image1"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </header>
        <div className="home-container03">
          <div className="home-container04">
            <h1 className="home-text14">
              <span className="home-text15">Government Helpdesk</span>
              <br></br>
              <span>for Employees</span>
              <br></br>
            </h1>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1643173880819-442db8808fd3?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
            className="home-image2"
          />
          <img alt="image" src="/white-vector.svg" className="home-image3" />
        </div>
      </div>
      <div className="home-section1">
        <div className="home-container05">
          <h3 id="depart-head" className="home-text19 Healine">
            Government Departments
          </h3>
          <div id="god-depart-container" className="home-cards-container">
            <div id="left-depart" className="home-container06 gov-depart">
              <a
                href="https://www.india.gov.in/topics/agriculture"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05"
              >
                <h1 className="home-heading gov-depart-links">Agriculture</h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/commerce"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                <h1 className="home-text20 gov-depart-links">Commerce</h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/defence"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link07"
              >
                <h1 className="home-text21 gov-depart-links">Defence</h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/environment-forest"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <h1 className="home-text22 gov-depart-links">
                  Environment &amp; Forest
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/food-public-distribution"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <h1 className="home-text23 gov-depart-links">
                  Food &amp; Public Distribution
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/governance-administration"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <h1 className="home-text24 gov-depart-links">
                  Governance &amp; Administration
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/housing"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <h1 className="home-text25 gov-depart-links">Housing</h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/industries"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                <h1 className="home-text26 gov-depart-links">Industries</h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/information-broadcasting"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <h1 className="home-text27 gov-depart-links">
                  Information &amp; Broadcasting
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/law-justice"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link14"
              >
                <h1 className="home-text28 gov-depart-links">
                  Law &amp; Justice
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/rural"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link15"
              >
                <h1 className="home-text29 gov-depart-links">Rural</h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/social-development"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link16"
              >
                <h1 className="home-text30 gov-depart-links">
                  Social Development
                </h1>
              </a>
            </div>
            <div className="home-container07 gov-depart">
              <a
                href="https://www.india.gov.in/topics/travel-tourism"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link17"
              >
                <h1 className="home-text31 TextXL gov-depart-links">
                  Travel &amp; Tourism
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/art-culture"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                <h1 className="home-text32 gov-depart-links">
                  Art &amp; Culture
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/communications-it"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link19"
              >
                <h1 className="home-text33 gov-depart-links">
                  Communications &amp; IT
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/education"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link20"
              >
                <h1 className="home-text34 gov-depart-links">Education</h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/finance-taxes"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link21"
              >
                <h1 className="home-text35 gov-depart-links">
                  Finance &amp; Taxes
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/foreign-affairs"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link22"
              >
                <h1 className="home-text36 gov-depart-links">
                  Foreign Affairs &amp; Enforcement
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/infrastructure"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link23"
              >
                <h1 className="home-text37 gov-depart-links">Infrastructure</h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/labour-employment"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link24"
              >
                <h1 className="home-text38 gov-depart-links">
                  Labour &amp; Employment
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/power-energy"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link25"
              >
                <h1 className="home-text39 gov-depart-links">
                  Power &amp; Energy
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/science-technology"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link26"
              >
                <h1 className="home-text40 gov-depart-links">
                  Science &amp; Technology
                </h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/transport"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link27"
              >
                <h1 className="home-text41 gov-depart-links">Transport</h1>
              </a>
              <a
                href="https://www.india.gov.in/topics/youth-sports"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link28"
              >
                <h1 className="home-text42 gov-depart-links">
                  Youth &amp; Sports
                </h1>
              </a>
            </div>
          </div>
          <div className="home-work-with-us">
            <div className="home-container08">
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M384 554q64 0 140 18t139 60 63 94v128h-684v-128q0-52 63-94t139-60 140-18zM640 512q-26 0-56-10 56-66 56-160 0-38-16-86t-40-76q30-10 56-10 70 0 120 51t50 121-50 120-120 50zM214 342q0-70 50-121t120-51 120 51 50 121-50 120-120 50-120-50-50-120zM712 560q106 16 188 59t82 107v128h-172v-128q0-98-98-166z"></path>
                </svg>
              </div>
              <h3 className="home-text43 Healine">
                Work with us is a pleasure
              </h3>
              <span className="home-text44">
                <span className="home-text45">
                  Don&apos;t let your users guess by attaching tooltips and
                  popoves to any element. Just make sure you enable them first
                  via JavaScript.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className="home-text48">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and
                  you&apos;re good to go. Just make sure you enable them first
                  via JavaScript.
                </span>
                <br></br>
              </span>
              <span className="home-text49">Check Notus PRO React!</span>
            </div>
            <div className="home-container10">
              <div className="home-container11">
                <img alt="image" src="/blue_wave.svg" className="home-image4" />
              </div>
              <div className="home-container12">
                <h4 className="home-text50 Healine">
                  <span className="home-text51">Top Notch Services</span>
                  <br></br>
                </h4>
                <span className="home-text52">
                  <span>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section3">
        <div className="home-container13">
          <div className="home-services">
            <a
              href="http://www.digilocker.gov.in/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link29"
            >
              <div className="home-container14 gov-tool-card">
                <img
                  alt="image"
                  src="data:image/jpeg;base64,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"
                  className="gov-tool-img"
                />
                <h1 className="home-text54 TextXL gov-tool-head">Digilocker</h1>
              </div>
            </a>
            <a
              href="https://www.mygov.in/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link30"
            >
              <div className="home-container15 gov-tool-card">
                <img
                  alt="image"
                  src="data:image/jpeg;base64,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"
                  className="home-image6 gov-tool-img"
                />
                <h1 className="home-text55 TextXL gov-tool-head">MyGov</h1>
              </div>
            </a>
            <a
              href="https://myaadhaar.uidai.gov.in/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link31"
            >
              <div className="home-container16 gov-tool-card">
                <img
                  alt="image"
                  src="data:image/png;base64,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"
                  className="home-image7 gov-tool-img"
                />
                <h1 className="home-text56 TextXL gov-tool-head">Aadhaar</h1>
              </div>
            </a>
          </div>
          <div className="home-contact"></div>
        </div>
        <img alt="image" src="/gray-vector.svg" className="home-image8" />
      </div>
      <Footer></Footer>
      <div className="home-div">
        <Script
          html={`<script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/45dba4e8-4c88-454f-a16d-91defc021f2a/webchat/config.js" defer></script>`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
